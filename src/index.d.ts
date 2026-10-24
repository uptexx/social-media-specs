/**
 * @uptexx/social-media-specs
 * Complete TypeScript/JSON specification of image, video, aspect ratio, duration,
 * and character limits across 10 social networks.
 */

export interface Resolution {
  width: number;
  height: number;
}

export interface PlacementSpec {
  type: 'image' | 'video' | 'mixed';
  recommendedResolution: Resolution;
  minWidth: number;
  maxWidth: number;
  minAspectRatio: number;
  maxAspectRatio: number;
  maxDurationSec: number;
  minDurationSec: number;
  maxImageBytes: number;
  maxVideoBytes: number;
  supportedImageMimes: string[];
  supportedVideoMimes: string[];
}

export interface PlatformSpec {
  id: string;
  name: string;
  maxTitleLength?: number;
  maxTextLength: number;
  maxPremiumTextLength?: number;
  maxHashtags: number;
  optimalHashtags: { min: number; max: number };
  maxCarouselItems: number;
  placements: Record<string, PlacementSpec>;
}

export interface PlatformSummary {
  id: string;
  name: string;
  maxTextLength: number;
  maxHashtags: number;
  placements: string[];
}

export interface MediaValidationInput {
  width: number;
  height: number;
  durationSec?: number;
  sizeBytes?: number;
  mimeType?: string;
}

export interface MediaValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
  aspectRatio: number;
  matchedSpec: PlacementSpec | null;
}

export declare const PLATFORM_SPECS: Readonly<Record<string, PlatformSpec>>;

export declare function getPlatformSpecs(platform: string): PlatformSpec;
export declare function listSupportedPlatforms(): PlatformSummary[];
export declare function validateMediaDimensions(
  platform: string,
  placement: string | undefined,
  media: MediaValidationInput
): MediaValidationResult;
