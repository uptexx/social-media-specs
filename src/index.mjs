/**
 * @uptexx/social-media-specs
 * Complete TypeScript/JSON specification of image, video, aspect ratio, duration,
 * and character limits across 10 social networks.
 *
 * Built by Uptexx (https://uptexx.com) — Powered by NexoPost (https://nexopost.com)
 */

const MB = 1024 * 1024;
const GB = 1024 * MB;

/**
 * Canonical specification database for 10 major social networks.
 */
export const PLATFORM_SPECS = Object.freeze({
  instagram: {
    id: 'instagram',
    name: 'Instagram',
    maxTextLength: 2200,
    maxHashtags: 30,
    optimalHashtags: { min: 3, max: 5 },
    maxCarouselItems: 20,
    placements: {
      feed: {
        type: 'mixed',
        recommendedResolution: { width: 1080, height: 1350 },
        minWidth: 320,
        maxWidth: 1440,
        minAspectRatio: 0.8, // 4:5
        maxAspectRatio: 1.91, // 1.91:1
        maxDurationSec: 3600,
        minDurationSec: 3,
        maxImageBytes: 8 * MB,
        maxVideoBytes: 4 * GB,
        supportedImageMimes: ['image/jpeg', 'image/png', 'image/webp'],
        supportedVideoMimes: ['video/mp4', 'video/quicktime']
      },
      reel: {
        type: 'video',
        recommendedResolution: { width: 1080, height: 1920 },
        minWidth: 500,
        maxWidth: 1920,
        minAspectRatio: 0.56, // ~9:16
        maxAspectRatio: 0.57,
        maxDurationSec: 900, // 15 mins max upload
        minDurationSec: 3,
        maxImageBytes: 8 * MB,
        maxVideoBytes: 4 * GB,
        supportedImageMimes: ['image/jpeg', 'image/png'],
        supportedVideoMimes: ['video/mp4', 'video/quicktime']
      },
      story: {
        type: 'mixed',
        recommendedResolution: { width: 1080, height: 1920 },
        minWidth: 500,
        maxWidth: 1920,
        minAspectRatio: 0.56,
        maxAspectRatio: 0.57,
        maxDurationSec: 60,
        minDurationSec: 1,
        maxImageBytes: 8 * MB,
        maxVideoBytes: 4 * GB,
        supportedImageMimes: ['image/jpeg', 'image/png', 'image/webp'],
        supportedVideoMimes: ['video/mp4', 'video/quicktime']
      },
      carousel: {
        type: 'mixed',
        recommendedResolution: { width: 1080, height: 1350 },
        minWidth: 320,
        maxWidth: 1440,
        minAspectRatio: 0.8,
        maxAspectRatio: 1.91,
        maxDurationSec: 60,
        minDurationSec: 3,
        maxImageBytes: 8 * MB,
        maxVideoBytes: 4 * GB,
        supportedImageMimes: ['image/jpeg', 'image/png', 'image/webp'],
        supportedVideoMimes: ['video/mp4', 'video/quicktime']
      }
    }
  },
  tiktok: {
    id: 'tiktok',
    name: 'TikTok',
    maxTextLength: 4000,
    maxHashtags: 30,
    optimalHashtags: { min: 3, max: 6 },
    maxCarouselItems: 35,
    placements: {
      video: {
        type: 'video',
        recommendedResolution: { width: 1080, height: 1920 },
        minWidth: 540,
        maxWidth: 3840,
        minAspectRatio: 0.5,
        maxAspectRatio: 1.78, // Supports 9:16 and 16:9
        maxDurationSec: 600, // 10 mins via API
        minDurationSec: 3,
        maxImageBytes: 20 * MB,
        maxVideoBytes: 4 * GB,
        supportedImageMimes: ['image/jpeg', 'image/png', 'image/webp'],
        supportedVideoMimes: ['video/mp4', 'video/quicktime', 'video/webm']
      },
      carousel: {
        type: 'image',
        recommendedResolution: { width: 1080, height: 1920 },
        minWidth: 540,
        maxWidth: 3840,
        minAspectRatio: 0.56,
        maxAspectRatio: 1.34,
        maxDurationSec: 0,
        minDurationSec: 0,
        maxImageBytes: 20 * MB,
        maxVideoBytes: 0,
        supportedImageMimes: ['image/jpeg', 'image/png', 'image/webp'],
        supportedVideoMimes: []
      }
    }
  },
  youtube: {
    id: 'youtube',
    name: 'YouTube',
    maxTitleLength: 100,
    maxTextLength: 5000,
    maxHashtags: 15,
    optimalHashtags: { min: 3, max: 5 },
    maxCarouselItems: 1,
    placements: {
      video: {
        type: 'video',
        recommendedResolution: { width: 1920, height: 1080 },
        minWidth: 426,
        maxWidth: 7680,
        minAspectRatio: 0.56,
        maxAspectRatio: 2.39,
        maxDurationSec: 43200, // 12 hours
        minDurationSec: 1,
        maxImageBytes: 2 * MB, // Thumbnail limit
        maxVideoBytes: 256 * GB,
        supportedImageMimes: ['image/jpeg', 'image/png'],
        supportedVideoMimes: ['video/mp4', 'video/quicktime', 'video/webm', 'video/x-msvideo']
      },
      short: {
        type: 'video',
        recommendedResolution: { width: 1080, height: 1920 },
        minWidth: 540,
        maxWidth: 2160,
        minAspectRatio: 0.56, // 9:16
        maxAspectRatio: 1.0, // up to 1:1 square
        maxDurationSec: 180, // 3 mins max for Shorts
        minDurationSec: 3,
        maxImageBytes: 2 * MB,
        maxVideoBytes: 10 * GB,
        supportedImageMimes: ['image/jpeg', 'image/png'],
        supportedVideoMimes: ['video/mp4', 'video/quicktime']
      }
    }
  },
  linkedin: {
    id: 'linkedin',
    name: 'LinkedIn',
    maxTextLength: 3000,
    maxHashtags: 30,
    optimalHashtags: { min: 3, max: 5 },
    maxCarouselItems: 20,
    placements: {
      post: {
        type: 'mixed',
        recommendedResolution: { width: 1200, height: 1200 },
        minWidth: 400,
        maxWidth: 4320,
        minAspectRatio: 0.57,
        maxAspectRatio: 2.4,
        maxDurationSec: 600, // 10 mins
        minDurationSec: 3,
        maxImageBytes: 8 * MB,
        maxVideoBytes: 5 * GB,
        supportedImageMimes: ['image/jpeg', 'image/png', 'image/gif'],
        supportedVideoMimes: ['video/mp4', 'video/quicktime']
      },
      feed: {
        type: 'mixed',
        recommendedResolution: { width: 1200, height: 627 },
        minWidth: 400,
        maxWidth: 4320,
        minAspectRatio: 0.57,
        maxAspectRatio: 2.4,
        maxDurationSec: 600,
        minDurationSec: 3,
        maxImageBytes: 8 * MB,
        maxVideoBytes: 5 * GB,
        supportedImageMimes: ['image/jpeg', 'image/png', 'image/gif'],
        supportedVideoMimes: ['video/mp4', 'video/quicktime']
      }
    }
  },
  x: {
    id: 'x',
    name: 'X (Twitter)',
    maxTextLength: 280,
    maxPremiumTextLength: 25000,
    maxHashtags: 10,
    optimalHashtags: { min: 1, max: 2 },
    maxCarouselItems: 4,
    placements: {
      post: {
        type: 'mixed',
        recommendedResolution: { width: 1200, height: 675 },
        minWidth: 200,
        maxWidth: 4096,
        minAspectRatio: 0.33,
        maxAspectRatio: 3.0,
        maxDurationSec: 140, // 2 mins 20 secs standard API
        minDurationSec: 1,
        maxImageBytes: 5 * MB,
        maxVideoBytes: 512 * MB,
        supportedImageMimes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
        supportedVideoMimes: ['video/mp4', 'video/quicktime']
      }
    }
  },
  pinterest: {
    id: 'pinterest',
    name: 'Pinterest',
    maxTitleLength: 100,
    maxTextLength: 500,
    maxHashtags: 20,
    optimalHashtags: { min: 2, max: 5 },
    maxCarouselItems: 5,
    placements: {
      pin: {
        type: 'mixed',
        recommendedResolution: { width: 1000, height: 1500 },
        minWidth: 200,
        maxWidth: 4000,
        minAspectRatio: 0.5, // 1:2
        maxAspectRatio: 1.91,
        maxDurationSec: 900, // 15 mins
        minDurationSec: 4,
        maxImageBytes: 20 * MB,
        maxVideoBytes: 2 * GB,
        supportedImageMimes: ['image/jpeg', 'image/png', 'image/webp'],
        supportedVideoMimes: ['video/mp4', 'video/quicktime']
      }
    }
  },
  threads: {
    id: 'threads',
    name: 'Threads',
    maxTextLength: 500,
    maxHashtags: 1, // Threads supports 1 topic tag per post
    optimalHashtags: { min: 1, max: 1 },
    maxCarouselItems: 20,
    placements: {
      post: {
        type: 'mixed',
        recommendedResolution: { width: 1080, height: 1350 },
        minWidth: 320,
        maxWidth: 1440,
        minAspectRatio: 0.5,
        maxAspectRatio: 2.0,
        maxDurationSec: 300, // 5 mins
        minDurationSec: 1,
        maxImageBytes: 8 * MB,
        maxVideoBytes: 1 * GB,
        supportedImageMimes: ['image/jpeg', 'image/png', 'image/webp'],
        supportedVideoMimes: ['video/mp4', 'video/quicktime']
      }
    }
  },
  facebook: {
    id: 'facebook',
    name: 'Facebook',
    maxTextLength: 63206,
    maxHashtags: 30,
    optimalHashtags: { min: 2, max: 5 },
    maxCarouselItems: 10,
    placements: {
      feed: {
        type: 'mixed',
        recommendedResolution: { width: 1200, height: 630 },
        minWidth: 200,
        maxWidth: 4096,
        minAspectRatio: 0.56,
        maxAspectRatio: 1.91,
        maxDurationSec: 14400, // 240 mins
        minDurationSec: 1,
        maxImageBytes: 10 * MB,
        maxVideoBytes: 4 * GB,
        supportedImageMimes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
        supportedVideoMimes: ['video/mp4', 'video/quicktime']
      },
      reel: {
        type: 'video',
        recommendedResolution: { width: 1080, height: 1920 },
        minWidth: 540,
        maxWidth: 1920,
        minAspectRatio: 0.56,
        maxAspectRatio: 0.57,
        maxDurationSec: 90,
        minDurationSec: 3,
        maxImageBytes: 10 * MB,
        maxVideoBytes: 1 * GB,
        supportedImageMimes: ['image/jpeg', 'image/png'],
        supportedVideoMimes: ['video/mp4', 'video/quicktime']
      },
      story: {
        type: 'mixed',
        recommendedResolution: { width: 1080, height: 1920 },
        minWidth: 500,
        maxWidth: 1920,
        minAspectRatio: 0.56,
        maxAspectRatio: 0.57,
        maxDurationSec: 60,
        minDurationSec: 1,
        maxImageBytes: 10 * MB,
        maxVideoBytes: 1 * GB,
        supportedImageMimes: ['image/jpeg', 'image/png'],
        supportedVideoMimes: ['video/mp4', 'video/quicktime']
      }
    }
  },
  bluesky: {
    id: 'bluesky',
    name: 'Bluesky',
    maxTextLength: 300, // 300 graphemes
    maxHashtags: 10,
    optimalHashtags: { min: 1, max: 3 },
    maxCarouselItems: 4,
    placements: {
      post: {
        type: 'mixed',
        recommendedResolution: { width: 1200, height: 675 },
        minWidth: 100,
        maxWidth: 4096,
        minAspectRatio: 0.33,
        maxAspectRatio: 3.0,
        maxDurationSec: 180, // 3 mins
        minDurationSec: 1,
        maxImageBytes: 1 * MB,
        maxVideoBytes: 100 * MB,
        supportedImageMimes: ['image/jpeg', 'image/png', 'image/webp'],
        supportedVideoMimes: ['video/mp4', 'video/quicktime', 'video/webm']
      }
    }
  },
  mastodon: {
    id: 'mastodon',
    name: 'Mastodon',
    maxTextLength: 500,
    maxHashtags: 20,
    optimalHashtags: { min: 2, max: 5 },
    maxCarouselItems: 4,
    placements: {
      post: {
        type: 'mixed',
        recommendedResolution: { width: 1200, height: 675 },
        minWidth: 100,
        maxWidth: 4096,
        minAspectRatio: 0.33,
        maxAspectRatio: 3.0,
        maxDurationSec: 600,
        minDurationSec: 1,
        maxImageBytes: 16 * MB,
        maxVideoBytes: 99 * MB,
        supportedImageMimes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
        supportedVideoMimes: ['video/mp4', 'video/quicktime', 'video/webm']
      }
    }
  }
});

const PLATFORM_ALIASES = {
  twitter: 'x',
  'x.com': 'x',
  ig: 'instagram',
  yt: 'youtube',
  fb: 'facebook',
  bsky: 'bluesky'
};

/**
 * Normalizes a platform name to its canonical key.
 * @param {string} platform
 * @returns {string}
 */
function normalizePlatformId(platform) {
  if (!platform || typeof platform !== 'string') {
    throw new TypeError('Platform name must be a non-empty string.');
  }
  const clean = platform.trim().toLowerCase();
  return PLATFORM_ALIASES[clean] || clean;
}

/**
 * Returns the full specification object for a given social network.
 *
 * @param {string} platform - Platform identifier (e.g., 'instagram', 'tiktok', 'x')
 * @returns {object} Complete platform specification
 */
export function getPlatformSpecs(platform) {
  const key = normalizePlatformId(platform);
  const spec = PLATFORM_SPECS[key];
  if (!spec) {
    throw new Error(
      `Unsupported platform "${platform}". Supported platforms: ${Object.keys(PLATFORM_SPECS).join(', ')}`
    );
  }
  return structuredClone(spec);
}

/**
 * Lists all 10 supported social media platforms and their summary metadata.
 *
 * @returns {Array<{ id: string, name: string, maxTextLength: number, maxHashtags: number, placements: string[] }>}
 */
export function listSupportedPlatforms() {
  return Object.values(PLATFORM_SPECS).map((spec) => ({
    id: spec.id,
    name: spec.name,
    maxTextLength: spec.maxTextLength,
    maxHashtags: spec.maxHashtags,
    placements: Object.keys(spec.placements)
  }));
}

/**
 * Validates media dimensions, duration, file size, and MIME type against a platform's placement constraints.
 *
 * @param {string} platform - Platform identifier
 * @param {string} [placement] - Placement type (e.g., 'feed', 'reel', 'story', 'short', 'post', 'video', 'pin'). Defaults to first available placement.
 * @param {object} media - Media properties to validate
 * @param {number} media.width - Media width in pixels
 * @param {number} media.height - Media height in pixels
 * @param {number} [media.durationSec] - Video duration in seconds (optional for images)
 * @param {number} [media.sizeBytes] - File size in bytes
 * @param {string} [media.mimeType] - MIME type (e.g., 'image/jpeg', 'video/mp4')
 * @returns {{ valid: boolean, errors: string[], warnings: string[], aspectRatio: number, matchedSpec: object }}
 */
export function validateMediaDimensions(platform, placement, media = {}) {
  const spec = getPlatformSpecs(platform);
  const availablePlacements = Object.keys(spec.placements);
  const normalizedPlacement = placement ? placement.trim().toLowerCase() : availablePlacements[0];

  const placementSpec = spec.placements[normalizedPlacement];
  if (!placementSpec) {
    return {
      valid: false,
      errors: [
        `Unsupported placement "${placement}" for ${spec.name}. Available placements: ${availablePlacements.join(', ')}`
      ],
      warnings: [],
      aspectRatio: 0,
      matchedSpec: null
    };
  }

  const errors = [];
  const warnings = [];
  const { width, height, durationSec, sizeBytes, mimeType } = media || {};

  if (typeof width !== 'number' || width <= 0 || typeof height !== 'number' || height <= 0) {
    errors.push('Valid positive width and height in pixels are required.');
    return {
      valid: false,
      errors,
      warnings,
      aspectRatio: 0,
      matchedSpec: placementSpec
    };
  }

  const aspectRatio = Number((width / height).toFixed(4));

  if (width < placementSpec.minWidth) {
    errors.push(
      `Width (${width}px) is below minimum required width (${placementSpec.minWidth}px) for ${spec.name} ${normalizedPlacement}.`
    );
  }
  if (width > placementSpec.maxWidth) {
    warnings.push(
      `Width (${width}px) exceeds maximum recommended width (${placementSpec.maxWidth}px) and may be downscaled by ${spec.name}.`
    );
  }

  if (aspectRatio < placementSpec.minAspectRatio || aspectRatio > placementSpec.maxAspectRatio) {
    errors.push(
      `Aspect ratio (${aspectRatio}) is outside allowed range [${placementSpec.minAspectRatio} - ${placementSpec.maxAspectRatio}] for ${spec.name} ${normalizedPlacement}.`
    );
  }

  const isVideo =
    (typeof mimeType === 'string' && mimeType.startsWith('video/')) ||
    (typeof durationSec === 'number' && durationSec > 0) ||
    placementSpec.type === 'video';

  if (typeof durationSec === 'number' && durationSec > 0) {
    if (placementSpec.type === 'image') {
      errors.push(`${spec.name} ${normalizedPlacement} only supports static images, not video.`);
    } else {
      if (durationSec < placementSpec.minDurationSec) {
        errors.push(
          `Video duration (${durationSec}s) is shorter than minimum allowed (${placementSpec.minDurationSec}s).`
        );
      }
      if (durationSec > placementSpec.maxDurationSec) {
        errors.push(
          `Video duration (${durationSec}s) exceeds maximum allowed (${placementSpec.maxDurationSec}s) for ${spec.name} ${normalizedPlacement}.`
        );
      }
    }
  } else if (placementSpec.type === 'video' && durationSec !== undefined && durationSec <= 0) {
    errors.push(`${spec.name} ${normalizedPlacement} requires a video with positive duration.`);
  }

  if (typeof sizeBytes === 'number' && sizeBytes > 0) {
    const maxBytes = isVideo ? placementSpec.maxVideoBytes : placementSpec.maxImageBytes;
    if (maxBytes > 0 && sizeBytes > maxBytes) {
      errors.push(
        `File size (${(sizeBytes / MB).toFixed(2)} MB) exceeds maximum limit (${(maxBytes / MB).toFixed(2)} MB).`
      );
    }
  }

  if (typeof mimeType === 'string' && mimeType.trim() !== '') {
    const cleanMime = mimeType.trim().toLowerCase();
    const allowedMimes = [
      ...placementSpec.supportedImageMimes,
      ...placementSpec.supportedVideoMimes
    ];
    if (!allowedMimes.includes(cleanMime)) {
      errors.push(
        `MIME type "${cleanMime}" is not supported for ${spec.name} ${normalizedPlacement}. Allowed: ${allowedMimes.join(', ')}`
      );
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    aspectRatio,
    matchedSpec: placementSpec
  };
}
