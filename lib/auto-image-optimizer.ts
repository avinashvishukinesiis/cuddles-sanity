/**
 * Automated Image Optimization with Sanity CDN integration
 * Handles responsive images, lazy loading, and performance optimization
 */

import { urlFor } from './sanity'

// Image optimization configuration
const IMAGE_QUALITY = 85
const DEFAULT_BLUR_DATA = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk'

// Image format configuration
export const IMAGE_FORMATS = {
  webp: 'webp',
  avif: 'avif',
  jpg: 'jpg',
  png: 'png'
} as const

// Responsive breakpoints
export const BREAKPOINTS = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const

// Common image sizes
export const IMAGE_SIZES = {
  thumbnail: 150,
  small: 300,
  medium: 600,
  large: 1200,
  hero: 1920
} as const

interface ImageOptimizationOptions {
  width?: number
  height?: number
  quality?: number
  format?: keyof typeof IMAGE_FORMATS
  blur?: boolean
  responsive?: boolean
  lazy?: boolean
}

interface ResponsiveImageSet {
  src: string
  srcSet: string
  sizes: string
  width: number
  height: number
  blurDataURL?: string
}

/**
 * Generate optimized image URL from Sanity asset
 */
export function optimizeImage(
  imageAsset: unknown,
  options: ImageOptimizationOptions = {}
): string {
  if (!imageAsset) return ''

  const {
    width,
    height,
    quality = IMAGE_QUALITY,
    format = 'jpg',
    blur = false
  } = options

  let builder = urlFor(imageAsset)
    .quality(quality)
    .format(format)
    .auto('format')

  if (width) builder = builder.width(width)
  if (height) builder = builder.height(height)
  if (blur) builder = builder.blur(50)

  return builder.url()
}

/**
 * Generate responsive image set with multiple sizes and formats
 */
export function generateResponsiveImageSet(
  imageAsset: unknown,
  targetWidth: number,
  options: ImageOptimizationOptions = {}
): ResponsiveImageSet {
  if (!imageAsset) {
    return {
      src: '',
      srcSet: '',
      sizes: '',
      width: targetWidth,
      height: Math.round(targetWidth * 0.75),
      blurDataURL: DEFAULT_BLUR_DATA
    }
  }

  const { quality = IMAGE_QUALITY, format = 'jpg' } = options

  // Generate multiple sizes (1x, 1.5x, 2x, 3x)
  const multipliers = [1, 1.5, 2, 3]
  const srcSetEntries = multipliers.map(multiplier => {
    const width = Math.round(targetWidth * multiplier)
    const url = optimizeImage(imageAsset, { width, quality, format })
    return `${url} ${multiplier}x`
  })

  // Generate different breakpoint sizes
  const breakpointSizes = Object.entries(BREAKPOINTS)
    .filter(([, size]) => size <= targetWidth * 2)
    .map(([, size]) => {
      const width = Math.min(size, targetWidth)
      const url = optimizeImage(imageAsset, { width, quality, format })
      return `${url} ${width}w`
    })

  const src = optimizeImage(imageAsset, { width: targetWidth, quality, format })
  const srcSet = [...srcSetEntries, ...breakpointSizes].join(', ')

  // Generate blur placeholder
  const blurDataURL = optimizeImage(imageAsset, {
    width: 10,
    height: 10,
    quality: 10,
    blur: true
  })

  return {
    src,
    srcSet,
    sizes: `(max-width: ${BREAKPOINTS.sm}px) 100vw, (max-width: ${BREAKPOINTS.md}px) 50vw, 33vw`,
    width: targetWidth,
    height: Math.round(targetWidth * 0.75),
    blurDataURL
  }
}

/**
 * Auto-generate optimized image props for Next.js Image component
 */
export function getOptimizedImageProps(
  imageAsset: unknown,
  alt: string,
  options: ImageOptimizationOptions & {
    priority?: boolean
    className?: string
  } = {}
) {
  const {
    width = IMAGE_SIZES.medium,
    height,
    quality = IMAGE_QUALITY,
    priority = false,
    className = '',
    lazy = !priority
  } = options

  if (!imageAsset) {
    return {
      src: '',
      alt,
      width,
      height: height || Math.round(width * 0.75),
      className,
      priority: false,
      loading: 'lazy' as const,
      blurDataURL: DEFAULT_BLUR_DATA,
      placeholder: 'blur' as const
    }
  }

  const responsiveSet = generateResponsiveImageSet(imageAsset, width, options)

  return {
    src: responsiveSet.src,
    srcSet: responsiveSet.srcSet,
    sizes: responsiveSet.sizes,
    alt,
    width: responsiveSet.width,
    height: height || responsiveSet.height,
    className,
    priority,
    loading: lazy ? ('lazy' as const) : ('eager' as const),
    blurDataURL: responsiveSet.blurDataURL,
    placeholder: 'blur' as const,
    quality
  }
}

/**
 * Preload critical images for better performance
 */
export function preloadImage(imageAsset: unknown, options: ImageOptimizationOptions = {}) {
  if (!imageAsset) return

  const { width = IMAGE_SIZES.hero, quality = IMAGE_QUALITY } = options
  const url = optimizeImage(imageAsset, { width, quality })

  const link = document.createElement('link')
  link.rel = 'preload'
  link.as = 'image'
  link.href = url
  document.head.appendChild(link)
}

/**
 * Batch preload multiple images
 */
export function preloadImages(images: Array<{ asset: unknown; options?: ImageOptimizationOptions }>) {
  images.forEach(({ asset, options }) => {
    preloadImage(asset, options)
  })
}

/**
 * Auto-optimize images in content blocks
 */
export function optimizeContentImages(content: Record<string, unknown>[]): Record<string, unknown>[] {
  return content.map(block => {
    if (block._type === 'image' && block.asset) {
      return {
        ...block,
        optimized: getOptimizedImageProps(block.asset, block.alt || '', {
          width: IMAGE_SIZES.large,
          quality: IMAGE_QUALITY
        })
      }
    }
    return block
  })
}

/**
 * Generate WebP fallback sources for better browser support
 */
export function generateWebPFallback(imageAsset: unknown, width: number) {
  if (!imageAsset) return { webp: '', fallback: '' }

  return {
    webp: optimizeImage(imageAsset, { width, format: 'webp' }),
    avif: optimizeImage(imageAsset, { width, format: 'avif' }),
    fallback: optimizeImage(imageAsset, { width, format: 'jpg' })
  }
}

/**
 * Performance monitoring utilities
 */
export const imagePerformance = {
  // Track image loading times
  trackLoadTime: (src: string, startTime: number) => {
    const loadTime = performance.now() - startTime
    console.log(`[ImageOptimizer] ${src.split('/').pop()} loaded in ${loadTime.toFixed(2)}ms`)
  },

  // Lazy loading intersection observer
  createLazyLoader: (callback: (entries: IntersectionObserverEntry[]) => void) => {
    return new IntersectionObserver(callback, {
      rootMargin: '50px 0px',
      threshold: 0.01
    })
  },

  // Calculate image size savings
  calculateSavings: (originalSize: number, optimizedSize: number) => {
    const savings = ((originalSize - optimizedSize) / originalSize) * 100
    return Math.round(savings)
  }
}

/**
 * Auto-generate optimal image configurations for different components
 */
export const imageConfigs = {
  hero: { width: IMAGE_SIZES.hero, quality: 90, priority: true },
  card: { width: IMAGE_SIZES.medium, quality: 85, lazy: true },
  thumbnail: { width: IMAGE_SIZES.thumbnail, quality: 80, lazy: true },
  gallery: { width: IMAGE_SIZES.large, quality: 85, lazy: true },
  avatar: { width: 100, height: 100, quality: 85, lazy: true },
  logo: { width: 200, quality: 90, priority: true }
}

/**
 * Auto-detect optimal image format based on browser support
 */
export function getOptimalFormat(): keyof typeof IMAGE_FORMATS {
  if (typeof window === 'undefined') return 'jpg'

  // Check for AVIF support
  const canvas = document.createElement('canvas')
  if (canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0) {
    return 'avif'
  }

  // Check for WebP support
  if (canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0) {
    return 'webp'
  }

  return 'jpg'
}