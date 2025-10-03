/**
 * Automated Content Synchronization System
 * Handles real-time content updates, webhooks, and sync management
 */

import { client } from './sanity'
import { autoFetchAllPages, cacheUtils } from './auto-data-fetcher'

// Sanity listen event interface (flexible to handle different event types)
interface SanityListenEvent {
  transition?: 'appear' | 'update' | 'disappear'
  result?: {
    _type: string
    _id: string
    [key: string]: unknown
  }
  documentId?: string
  [key: string]: unknown // Allow additional properties for different event types
}

// Subscription interface
interface SanitySubscription {
  unsubscribe(): void
}

// Sync configuration
const SYNC_INTERVAL = 30 * 1000 // 30 seconds
const MAX_SYNC_RETRIES = 3

// Content change tracking
interface ContentChange {
  _type: string
  _id: string
  action: 'create' | 'update' | 'delete'
  timestamp: number
  documentId?: string
}

// Sync status tracking
interface SyncStatus {
  isOnline: boolean
  lastSync: number
  syncInProgress: boolean
  failedAttempts: number
  pendingChanges: ContentChange[]
}

const syncStatus: SyncStatus = {
  isOnline: true,
  lastSync: 0,
  syncInProgress: false,
  failedAttempts: 0,
  pendingChanges: []
}

// Event listeners for content changes
const changeListeners: Map<string, Array<(change: ContentChange) => void>> = new Map()

/**
 * Real-time content synchronization using Sanity's real-time API
 */
export class AutoContentSync {
  private subscription: SanitySubscription | null = null
  private syncInterval: NodeJS.Timeout | null = null
  private isInitialized = false

  /**
   * Initialize the content sync system
   */
  async initialize() {
    if (this.isInitialized) return

    console.log('[ContentSync] Initializing auto-sync system...')

    try {
      // Start real-time subscription
      await this.startRealTimeSync()

      // Set up periodic sync fallback
      this.startPeriodicSync()

      // Set up network status monitoring
      this.setupNetworkMonitoring()

      this.isInitialized = true
      console.log('[ContentSync] Auto-sync initialized ✅')
    } catch (error) {
      console.error('[ContentSync] Initialization failed:', error)
      // Fall back to periodic sync only
      this.startPeriodicSync()
    }
  }

  /**
   * Start real-time content synchronization
   */
  private async startRealTimeSync() {
    try {
      // Listen to all document changes
      const query = '*[_type in ["homePage", "aboutUs", "testimonial", "program", "siteSettings"]]'

      this.subscription = client.listen(query, {}, { includeResult: true })
        .subscribe({
          next: (update) => this.handleRealtimeUpdate(update),
          error: (error) => {
            console.error('[ContentSync] Real-time sync error:', error)
            this.handleSyncError(error)
          }
        })

      console.log('[ContentSync] Real-time sync started')
    } catch (error) {
      console.error('[ContentSync] Failed to start real-time sync:', error)
      throw error
    }
  }

  /**
   * Handle real-time updates from Sanity
   */
  private async handleRealtimeUpdate(update: SanityListenEvent) {
    const { transition, result } = update

    // Skip processing if this is not a data event (e.g., error events)
    if (!result || !transition) {
      console.log('[ContentSync] Skipping non-data event')
      return
    }

    console.log(`[ContentSync] Real-time update: ${transition} for ${result._type}`)

    const change: ContentChange = {
      _type: result._type || 'unknown',
      _id: result._id || 'unknown',
      action: this.getActionFromTransition(transition),
      timestamp: Date.now(),
      documentId: result._id
    }

    // Invalidate relevant cache entries
    this.invalidateCache(change)

    // Notify listeners
    this.notifyListeners(change)

    // Update sync status
    syncStatus.lastSync = Date.now()
    syncStatus.isOnline = true
    syncStatus.failedAttempts = 0
  }

  /**
   * Set up periodic sync as a fallback
   */
  private startPeriodicSync() {
    this.syncInterval = setInterval(async () => {
      if (!syncStatus.syncInProgress) {
        await this.performSync()
      }
    }, SYNC_INTERVAL)

    console.log('[ContentSync] Periodic sync started (30s interval)')
  }

  /**
   * Perform manual sync
   */
  async performSync(force = false): Promise<boolean> {
    if (syncStatus.syncInProgress && !force) {
      console.log('[ContentSync] Sync already in progress')
      return false
    }

    syncStatus.syncInProgress = true
    const startTime = Date.now()

    try {
      console.log('[ContentSync] Starting content sync...')

      // Check for content changes since last sync
      const lastSyncTime = new Date(syncStatus.lastSync || 0).toISOString()
      const changesQuery = `*[_type in ["homePage", "aboutUs", "testimonial", "program", "siteSettings"] && _updatedAt > "${lastSyncTime}"]`

      const changes = await client.fetch(changesQuery)

      if (changes.length > 0) {
        console.log(`[ContentSync] Found ${changes.length} content changes`)

        // Clear relevant cache entries
        changes.forEach((doc: { _id: string; _type: string }) => {
          cacheUtils.invalidate(doc._type)
        })

        // Refresh data
        await autoFetchAllPages()

        // Notify about changes
        changes.forEach((doc: { _id: string; _type: string }) => {
          const change: ContentChange = {
            _type: doc._type,
            _id: doc._id,
            action: 'update',
            timestamp: Date.now(),
            documentId: doc._id
          }
          this.notifyListeners(change)
        })
      }

      // Update sync status
      syncStatus.lastSync = Date.now()
      syncStatus.isOnline = true
      syncStatus.failedAttempts = 0
      syncStatus.syncInProgress = false

      const duration = Date.now() - startTime
      console.log(`[ContentSync] Sync completed in ${duration}ms ✅`)
      return true

    } catch (error) {
      console.error('[ContentSync] Sync failed:', error)
      this.handleSyncError(error)
      return false
    }
  }

  /**
   * Handle sync errors with retry logic
   */
  private handleSyncError(_error?: unknown) {
    syncStatus.failedAttempts++
    syncStatus.syncInProgress = false
    syncStatus.isOnline = false

    if (syncStatus.failedAttempts >= MAX_SYNC_RETRIES) {
      console.error('[ContentSync] Max sync retries reached, switching to offline mode')
      this.enterOfflineMode()
    } else {
      // Retry after exponential backoff
      const retryDelay = Math.pow(2, syncStatus.failedAttempts) * 1000
      console.log(`[ContentSync] Retrying sync in ${retryDelay}ms (attempt ${syncStatus.failedAttempts})`)

      setTimeout(() => {
        this.performSync(true)
      }, retryDelay)
    }
  }

  /**
   * Enter offline mode when sync fails
   */
  private enterOfflineMode() {
    syncStatus.isOnline = false
    console.warn('[ContentSync] Entered offline mode - using cached data')

    // Continue trying to reconnect every minute
    setTimeout(() => {
      syncStatus.failedAttempts = 0
      this.performSync(true)
    }, 60000)
  }

  /**
   * Set up network connectivity monitoring
   */
  private setupNetworkMonitoring() {
    if (typeof window === 'undefined') return

    window.addEventListener('online', () => {
      console.log('[ContentSync] Network back online, resuming sync')
      syncStatus.isOnline = true
      syncStatus.failedAttempts = 0
      this.performSync(true)
    })

    window.addEventListener('offline', () => {
      console.log('[ContentSync] Network offline, entering offline mode')
      this.enterOfflineMode()
    })
  }

  /**
   * Get action type from Sanity transition
   */
  private getActionFromTransition(transition?: string): ContentChange['action'] {
    switch (transition) {
      case 'appear': return 'create'
      case 'update': return 'update'
      case 'disappear': return 'delete'
      default: return 'update'
    }
  }

  /**
   * Invalidate cache based on content changes
   */
  private invalidateCache(change: ContentChange) {
    switch (change._type) {
      case 'homePage':
        cacheUtils.invalidate('homePage')
        cacheUtils.invalidate('heroSection')
        break
      case 'testimonial':
        cacheUtils.invalidate('testimonials')
        break
      default:
        cacheUtils.invalidate(change._type)
    }
  }

  /**
   * Notify registered listeners about changes
   */
  private notifyListeners(change: ContentChange) {
    const typeListeners = changeListeners.get(change._type) || []
    const allListeners = changeListeners.get('*') || []

    const allListenersArray = [...typeListeners, ...allListeners]
    allListenersArray.forEach(listener => {
      try {
        listener(change)
      } catch (error) {
        console.error('[ContentSync] Listener error:', error)
      }
    })
  }

  /**
   * Stop the sync system
   */
  stop() {
    if (this.subscription) {
      this.subscription.unsubscribe()
      this.subscription = null
    }

    if (this.syncInterval) {
      clearInterval(this.syncInterval)
      this.syncInterval = null
    }

    this.isInitialized = false
    console.log('[ContentSync] Auto-sync stopped')
  }
}

// Global sync instance
export const contentSync = new AutoContentSync()

/**
 * Subscribe to content changes
 */
export function onContentChange(
  documentType: string | '*',
  callback: (change: ContentChange) => void
) {
  if (!changeListeners.has(documentType)) {
    changeListeners.set(documentType, [])
  }
  changeListeners.get(documentType)!.push(callback)

  // Return unsubscribe function
  return () => {
    const listeners = changeListeners.get(documentType)
    if (listeners) {
      const index = listeners.indexOf(callback)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }
}

/**
 * Get current sync status
 */
export function getSyncStatus(): SyncStatus {
  return { ...syncStatus }
}

/**
 * Force a content sync
 */
export async function forceSync(): Promise<boolean> {
  return contentSync.performSync(true)
}

/**
 * Webhook handler for Sanity webhooks
 */
export async function handleWebhook(payload: Record<string, unknown>): Promise<void> {
  console.log('[ContentSync] Webhook received:', payload)

  try {
    const change: ContentChange = {
      _type: (payload._type as string) || 'unknown',
      _id: (payload._id as string) || 'unknown',
      action: payload.transition === 'create' ? 'create' :
              payload.transition === 'delete' ? 'delete' : 'update',
      timestamp: Date.now(),
      documentId: (payload._id as string) || undefined
    }

    // Invalidate cache
    contentSync['invalidateCache'](change)

    // Refresh relevant data
    await autoFetchAllPages()

    // Notify listeners
    contentSync['notifyListeners'](change)

    console.log('[ContentSync] Webhook processed successfully')
  } catch (error) {
    console.error('[ContentSync] Webhook processing failed:', error)
  }
}

/**
 * Initialize auto-sync on app start
 */
export async function initializeContentSync() {
  try {
    await contentSync.initialize()
  } catch (error) {
    console.error('[ContentSync] Failed to initialize:', error)
  }
}

/**
 * Content sync utilities
 */
export const syncUtils = {
  // Check if content is stale
  isStale: (lastUpdate: number, maxAge = 5 * 60 * 1000) => {
    return Date.now() - lastUpdate > maxAge
  },

  // Get sync health status
  getHealth: () => ({
    isOnline: syncStatus.isOnline,
    lastSync: syncStatus.lastSync,
    timeSinceLastSync: Date.now() - syncStatus.lastSync,
    failedAttempts: syncStatus.failedAttempts,
    syncInProgress: syncStatus.syncInProgress
  }),

  // Manual cache invalidation
  invalidateAll: () => {
    cacheUtils.clear()
    console.log('[ContentSync] All caches cleared')
  }
}

// Auto-initialize if in browser environment
if (typeof window !== 'undefined') {
  // Initialize after page load
  window.addEventListener('load', () => {
    setTimeout(initializeContentSync, 1000)
  })
}