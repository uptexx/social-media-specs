import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  getPlatformSpecs,
  validateMediaDimensions,
  listSupportedPlatforms,
  PLATFORM_SPECS
} from '../src/index.mjs';

describe('@uptexx/social-media-specs', () => {
  it('lists all 10 supported platforms with complete metadata', () => {
    const platforms = listSupportedPlatforms();
    assert.equal(platforms.length, 10);
    const ids = platforms.map((p) => p.id);
    assert.deepEqual(ids, [
      'instagram',
      'tiktok',
      'youtube',
      'linkedin',
      'x',
      'pinterest',
      'threads',
      'facebook',
      'bluesky',
      'mastodon'
    ]);
  });

  it('retrieves platform specs case-insensitively and resolves aliases like twitter -> x', () => {
    const ig = getPlatformSpecs('Instagram');
    assert.equal(ig.id, 'instagram');
    assert.equal(ig.maxTextLength, 2200);
    assert.equal(ig.maxHashtags, 30);

    const xSpec = getPlatformSpecs('Twitter');
    assert.equal(xSpec.id, 'x');
    assert.equal(xSpec.maxTextLength, 280);
  });

  it('throws descriptive error for unsupported platforms', () => {
    assert.throws(() => getPlatformSpecs('myspace'), /Unsupported platform/);
    assert.throws(() => getPlatformSpecs(''), /Platform name must be a non-empty string/);
  });

  it('validates a standard 9:16 Instagram Reel video accurately', () => {
    const result = validateMediaDimensions('instagram', 'reel', {
      width: 1080,
      height: 1920,
      durationSec: 45,
      sizeBytes: 25 * 1024 * 1024,
      mimeType: 'video/mp4'
    });
    assert.equal(result.valid, true);
    assert.equal(result.errors.length, 0);
    assert.equal(result.aspectRatio, 0.5625);
  });

  it('rejects an Instagram Reel with invalid landscape aspect ratio', () => {
    const result = validateMediaDimensions('instagram', 'reel', {
      width: 1920,
      height: 1080,
      durationSec: 30,
      mimeType: 'video/mp4'
    });
    assert.equal(result.valid, false);
    assert.ok(result.errors.some((e) => e.includes('Aspect ratio')));
  });

  it('validates YouTube Short duration limit (<= 180 seconds)', () => {
    const validShort = validateMediaDimensions('youtube', 'short', {
      width: 1080,
      height: 1920,
      durationSec: 120,
      mimeType: 'video/mp4'
    });
    assert.equal(validShort.valid, true);

    const tooLongShort = validateMediaDimensions('youtube', 'short', {
      width: 1080,
      height: 1920,
      durationSec: 240,
      mimeType: 'video/mp4'
    });
    assert.equal(tooLongShort.valid, false);
    assert.ok(tooLongShort.errors.some((e) => e.includes('duration')));
  });

  it('enforces Bluesky 1MB image size limit', () => {
    const overLimit = validateMediaDimensions('bluesky', 'post', {
      width: 1200,
      height: 675,
      sizeBytes: 2 * 1024 * 1024,
      mimeType: 'image/jpeg'
    });
    assert.equal(overLimit.valid, false);
    assert.ok(overLimit.errors.some((e) => e.includes('File size')));
  });

  it('detects unsupported MIME types and invalid placements', () => {
    const badMime = validateMediaDimensions('linkedin', 'post', {
      width: 1200,
      height: 1200,
      mimeType: 'application/pdf'
    });
    assert.equal(badMime.valid, false);
    assert.ok(badMime.errors.some((e) => e.includes('MIME type')));

    const badPlacement = validateMediaDimensions('x', 'story', {
      width: 1080,
      height: 1920
    });
    assert.equal(badPlacement.valid, false);
    assert.ok(badPlacement.errors.some((e) => e.includes('Unsupported placement')));
  });

  it('exports frozen PLATFORM_SPECS constant to prevent accidental mutation', () => {
    assert.equal(Object.isFrozen(PLATFORM_SPECS), true);
  });
});
