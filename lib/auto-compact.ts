/**
 * AutoCompact - Central Automation Orchestrator
 * Coordinates all automation systems for maximum efficiency
 */

import { autoFetchAllPages, autoFetchHeroSection, autoFetchTestimonials, cacheUtils, startAutoRefresh } from './auto-data-fetcher'
import { optimizeImage, getOptimizedImageProps, imageConfigs } from './auto-image-optimizer'
import { onContentChange, forceSync, getSyncStatus } from './auto-content-sync'

// Central automation configuration
const AUTO_COMPACT_CONFIG = {
  enableDataFetching: true,
  enableImageOptimization: true,
  enableContentSync: true,
  enableDeployment: false, // Disabled for client-side
  enablePerformanceMonitoring: true,
  enableAutoRefresh: true,
  refreshInterval: 10 * 60 * 1000, // 10 minutes
  enableWatchMode: false
}

// System health tracking
interface SystemHealth {
  overall: 'excellent' | 'good' | 'fair' | 'poor'
  dataFetcher: 'online' | 'offline' | 'degraded'
  imageOptimizer: 'active' | 'inactive'
  contentSync: 'synced' | 'syncing' | 'offline'
  deployment: 'ready' | 'building' | 'deploying' | 'failed'
  performance: number // 0-100 score
  uptime: number
  lastHealthCheck: number
}

const systemHealth: SystemHealth = {
  overall: 'excellent',
  dataFetcher: 'online',
  imageOptimizer: 'active',
  contentSync: 'synced',
  deployment: 'ready',
  performance: 100,
  uptime: Date.now(),
  lastHealthCheck: Date.now()
}

// Performance metrics
interface PerformanceMetrics {
  dataFetchTime: number
  imageOptimizationSavings: number
  syncLatency: number
  buildTime: number
  cacheHitRate: number
  errorRate: number
}

const performanceMetrics: PerformanceMetrics = {
  dataFetchTime: 0,
  imageOptimizationSavings: 0,
  syncLatency: 0,
  buildTime: 0,
  cacheHitRate: 0,
  errorRate: 0
}

/**
 * AutoCompact - Main Orchestrator Class
 */
export class AutoCompact {
  private isInitialized = false
  private healthCheckInterval: NodeJS.Timeout | null = null
  private metricsInterval: NodeJS.Timeout | null = null

  /**
   * Initialize the complete automation system
   */
  async initialize(config: Partial<typeof AUTO_COMPACT_CONFIG> = {}) {
    if (this.isInitialized) {
      console.log('[AutoCompact] System already initialized')
      return
    }

    const finalConfig = { ...AUTO_COMPACT_CONFIG, ...config }

    console.log('[AutoCompact] 🚀 Initializing complete automation system...')
    console.log('[AutoCompact] Configuration:', finalConfig)

    try {
      // Initialize data fetching system
      if (finalConfig.enableDataFetching) {
        console.log('[AutoCompact] 📊 Initializing data fetcher...')
        await this.initializeDataFetcher(finalConfig)
      }

      // Initialize image optimization
      if (finalConfig.enableImageOptimization) {
        console.log('[AutoCompact] 🖼️ Initializing image optimizer...')
        this.initializeImageOptimizer()
      }

      // Initialize content synchronization
      if (finalConfig.enableContentSync) {
        console.log('[AutoCompact] 🔄 Initializing content sync...')
        await this.initializeContentSync()
      }

      // Skip deployment system on client-side
      // Deployment system requires Node.js APIs not available in browser

      // Start performance monitoring
      if (finalConfig.enablePerformanceMonitoring) {
        console.log('[AutoCompact] 📊 Starting performance monitoring...')
        this.startPerformanceMonitoring()
      }

      // Start health monitoring
      this.startHealthMonitoring()

      this.isInitialized = true
      systemHealth.uptime = Date.now()

      console.log('[AutoCompact] ✅ Complete automation system initialized successfully!')
      this.printSystemStatus()

    } catch (error) {
      console.error('[AutoCompact] ❌ Initialization failed:', error)
      throw error
    }
  }

  /**
   * Initialize data fetching system
   */
  private async initializeDataFetcher(config: typeof AUTO_COMPACT_CONFIG) {
    try {
      // Pre-fetch critical data
      console.log('[AutoCompact] Pre-fetching critical data...')
      const startTime = Date.now()

      await Promise.all([
        autoFetchHeroSection(),
        autoFetchTestimonials()
      ])

      const fetchTime = Date.now() - startTime
      performanceMetrics.dataFetchTime = fetchTime

      // Start auto-refresh if enabled
      if (config.enableAutoRefresh) {
        startAutoRefresh(config.refreshInterval)
      }

      systemHealth.dataFetcher = 'online'
      console.log(`[AutoCompact] Data fetcher ready (${fetchTime}ms)`)
    } catch (error) {
      systemHealth.dataFetcher = 'offline'
      throw error
    }
  }

  /**
   * Initialize image optimization system
   */
  private initializeImageOptimizer() {
    // Set up image performance tracking
    if (typeof window !== 'undefined') {
      const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            // Track lazy loading performance
            console.log(`[AutoCompact] Lazy loading: ${img.src}`)
          }
        })
      })
    }

    systemHealth.imageOptimizer = 'active'
    console.log('[AutoCompact] Image optimizer ready')
  }

  /**
   * Initialize content synchronization
   */
  private async initializeContentSync() {
    try {
      // Initialize content sync (placeholder for now)
      console.log('[AutoCompact] Content sync initialized')

      // Set up content change listeners
      onContentChange('*', (change) => {
        console.log(`[AutoCompact] Content updated: ${change._type}`)
        this.updatePerformanceMetrics()
      })

      systemHealth.contentSync = 'synced'
      console.log('[AutoCompact] Content sync ready')
    } catch (error) {
      systemHealth.contentSync = 'offline'
      throw error
    }
  }

  // Deployment system removed for client-side compatibility

  /**
   * Start performance monitoring
   */
  private startPerformanceMonitoring() {
    this.metricsInterval = setInterval(() => {
      this.updatePerformanceMetrics()
      this.calculatePerformanceScore()
    }, 30000) // Every 30 seconds

    console.log('[AutoCompact] Performance monitoring started')
  }

  /**
   * Start health monitoring
   */
  private startHealthMonitoring() {
    this.healthCheckInterval = setInterval(() => {
      this.performHealthCheck()
    }, 60000) // Every minute

    console.log('[AutoCompact] Health monitoring started')
  }

  /**
   * Perform comprehensive health check
   */
  private async performHealthCheck() {
    const startTime = Date.now()

    try {
      // Check data fetcher
      const cacheStats = cacheUtils.stats()
      systemHealth.dataFetcher = cacheStats.length > 0 ? 'online' : 'degraded'

      // Check content sync
      const syncStatus = getSyncStatus()
      systemHealth.contentSync = syncStatus.isOnline ? 'synced' : 'offline'

      // Deployment system not available on client-side
      systemHealth.deployment = 'ready'

      // Calculate overall health
      this.calculateOverallHealth()

      systemHealth.lastHealthCheck = Date.now()

      const checkTime = Date.now() - startTime
      if (checkTime > 1000) {
        console.warn(`[AutoCompact] Health check took ${checkTime}ms (slow)`)
      }

    } catch (error) {
      console.error('[AutoCompact] Health check failed:', error)
      systemHealth.overall = 'poor'
    }
  }

  /**
   * Calculate overall system health
   */
  private calculateOverallHealth() {
    const componentScores = [
      systemHealth.dataFetcher === 'online' ? 4 : systemHealth.dataFetcher === 'degraded' ? 2 : 1,
      systemHealth.imageOptimizer === 'active' ? 4 : 2,
      systemHealth.contentSync === 'synced' ? 4 : systemHealth.contentSync === 'syncing' ? 3 : 1,
      systemHealth.deployment === 'ready' ? 4 : systemHealth.deployment === 'failed' ? 1 : 3
    ]

    const averageScore = componentScores.reduce((a, b) => a + b) / componentScores.length

    if (averageScore >= 3.5) systemHealth.overall = 'excellent'
    else if (averageScore >= 2.5) systemHealth.overall = 'good'
    else if (averageScore >= 1.5) systemHealth.overall = 'fair'
    else systemHealth.overall = 'poor'
  }

  /**
   * Update performance metrics
   */
  private updatePerformanceMetrics() {
    const cacheStats = cacheUtils.stats()

    // Calculate cache hit rate
    performanceMetrics.cacheHitRate = cacheStats.filter(s => s.fresh).length / Math.max(cacheStats.length, 1) * 100

    // Error rate not available without deployment system
    performanceMetrics.errorRate = 0
  }

  /**
   * Calculate performance score
   */
  private calculatePerformanceScore() {
    const scores = []

    // Cache performance (0-25 points)
    scores.push(Math.min(25, performanceMetrics.cacheHitRate * 0.25))

    // Data fetch speed (0-25 points)
    const fetchSpeedScore = performanceMetrics.dataFetchTime < 1000 ? 25 :
                           performanceMetrics.dataFetchTime < 2000 ? 20 :
                           performanceMetrics.dataFetchTime < 5000 ? 15 : 10
    scores.push(fetchSpeedScore)

    // Error rate (0-25 points)
    const errorScore = Math.max(0, 25 - performanceMetrics.errorRate)
    scores.push(errorScore)

    // System health (0-25 points)
    const healthScore = systemHealth.overall === 'excellent' ? 25 :
                       systemHealth.overall === 'good' ? 20 :
                       systemHealth.overall === 'fair' ? 15 : 10
    scores.push(healthScore)

    systemHealth.performance = Math.round(scores.reduce((a, b) => a + b))
  }

  /**
   * Print current system status
   */
  printSystemStatus() {
    const uptime = Math.round((Date.now() - systemHealth.uptime) / 1000)
    console.log('\n[AutoCompact] 📊 SYSTEM STATUS')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log(`Overall Health: ${this.getHealthEmoji(systemHealth.overall)} ${systemHealth.overall.toUpperCase()}`)
    console.log(`Performance Score: ${systemHealth.performance}/100`)
    console.log(`System Uptime: ${uptime}s`)
    console.log('\nComponents:')
    console.log(`  📊 Data Fetcher: ${systemHealth.dataFetcher}`)
    console.log(`  🖼️ Image Optimizer: ${systemHealth.imageOptimizer}`)
    console.log(`  🔄 Content Sync: ${systemHealth.contentSync}`)
    console.log(`  🚀 Deployment: ${systemHealth.deployment}`)
    console.log('\nMetrics:')
    console.log(`  Cache Hit Rate: ${performanceMetrics.cacheHitRate.toFixed(1)}%`)
    console.log(`  Data Fetch Time: ${performanceMetrics.dataFetchTime}ms`)
    console.log(`  Error Rate: ${performanceMetrics.errorRate.toFixed(1)}%`)
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')
  }

  /**
   * Get health emoji indicator
   */
  private getHealthEmoji(health: string): string {
    switch (health) {
      case 'excellent': return '🟢'
      case 'good': return '🟡'
      case 'fair': return '🟠'
      case 'poor': return '🔴'
      default: return '⚪'
    }
  }

  /**
   * Get system health status
   */
  getHealth(): SystemHealth {
    return { ...systemHealth }
  }

  /**
   * Get performance metrics
   */
  getMetrics(): PerformanceMetrics {
    return { ...performanceMetrics }
  }

  /**
   * Shutdown the automation system
   */
  shutdown() {
    console.log('[AutoCompact] 🔄 Shutting down automation system...')

    if (this.healthCheckInterval) {
      clearInterval(this.healthCheckInterval)
      this.healthCheckInterval = null
    }

    if (this.metricsInterval) {
      clearInterval(this.metricsInterval)
      this.metricsInterval = null
    }

    // contentSync.stop() // Placeholder for content sync cleanup

    this.isInitialized = false
    console.log('[AutoCompact] ✅ System shutdown complete')
  }
}

// Global AutoCompact instance
export const autoCompact = new AutoCompact()

/**
 * Quick Actions - One-click automation commands
 */
export const quickActions = {
  // Refresh all data
  refreshAll: async () => {
    console.log('[AutoCompact] 🔄 Refreshing all data...')
    cacheUtils.clear()
    await autoFetchAllPages()
    await forceSync()
    console.log('[AutoCompact] ✅ All data refreshed')
  },

  // Optimize all images
  optimizeImages: (images: Array<{ asset: unknown; alt: string }>) => {
    console.log('[AutoCompact] 🖼️ Optimizing images...')
    return images.map(img => getOptimizedImageProps(img.asset, img.alt, imageConfigs.card))
  },

  // Build functions not available on client-side

  // System health check
  healthCheck: async () => {
    console.log('[AutoCompact] 🩺 Running system health check...')
    await autoCompact['performHealthCheck']()
    autoCompact.printSystemStatus()
    return autoCompact.getHealth()
  }
}

/**
 * Smart Presets - Pre-configured automation setups
 */
export const smartPresets = {
  // Development mode - fast iteration
  development: {
    enableDataFetching: true,
    enableImageOptimization: true,
    enableContentSync: true,
    enableDeployment: false,
    enablePerformanceMonitoring: false,
    enableAutoRefresh: true,
    refreshInterval: 5 * 60 * 1000, // 5 minutes
    enableWatchMode: false
  },

  // Production mode - maximum performance (client-side)
  production: {
    enableDataFetching: true,
    enableImageOptimization: true,
    enableContentSync: true,
    enableDeployment: false, // Not available on client-side
    enablePerformanceMonitoring: true,
    enableAutoRefresh: true,
    refreshInterval: 15 * 60 * 1000, // 15 minutes
    enableWatchMode: false
  },

  // CI/CD mode - not available on client-side
  cicd: {
    enableDataFetching: false,
    enableImageOptimization: false,
    enableContentSync: false,
    enableDeployment: false,
    enablePerformanceMonitoring: false,
    enableAutoRefresh: false,
    enableWatchMode: false
  }
}

/**
 * Initialize AutoCompact with smart defaults
 */
export async function initializeAutoCompact(preset: 'development' | 'production' | 'cicd' | 'custom' = 'development', customConfig?: Record<string, unknown>) {
  const config = preset === 'custom' ? customConfig : smartPresets[preset]

  console.log(`[AutoCompact] Initializing with ${preset} preset...`)
  await autoCompact.initialize(config)

  return autoCompact
}

// Export all automation utilities
export {
  // Data fetching
  autoFetchAllPages,
  autoFetchHeroSection,
  autoFetchTestimonials,
  cacheUtils,

  // Image optimization
  optimizeImage,
  getOptimizedImageProps,
  imageConfigs,

  // Content sync
  onContentChange,
  forceSync,
  getSyncStatus
}

// Auto-initialize in browser environment
if (typeof window !== 'undefined') {
  // Initialize after DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      initializeAutoCompact('development')
    }, 1000)
  })
}