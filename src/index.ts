import {
  PLATFORM_SPECS as RAW_SPECS,
  getPlatformSpecs as getSpecs,
  listSupportedPlatforms as listPlatforms,
  validateMediaDimensions as validateMedia
} from './index.mjs';

import type {
  PlatformSpec,
  PlatformSummary,
  MediaValidationInput,
  MediaValidationResult
} from './index.d.ts';

export const PLATFORM_SPECS: Readonly<Record<string, PlatformSpec>> = RAW_SPECS;

export function getPlatformSpecs(platform: string): PlatformSpec {
  return getSpecs(platform);
}

export function listSupportedPlatforms(): PlatformSummary[] {
  return listPlatforms();
}

export function validateMediaDimensions(
  platform: string,
  placement: string | undefined,
  media: MediaValidationInput
): MediaValidationResult {
  return validateMedia(platform, placement, media);
}
