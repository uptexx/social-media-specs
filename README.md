# @uptexx/social-media-specs

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6.svg)](https://www.typescriptlang.org/)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-0-success.svg)](#features)
[![Built by Uptexx](https://img.shields.io/badge/Built%20by-Uptexx-0A0A0A.svg)](https://uptexx.com)
[![Powered by NexoPost](https://img.shields.io/badge/Powered%20by-NexoPost-6366F1.svg)](https://nexopost.com)
[![NVIDIA Inception](https://img.shields.io/badge/NVIDIA-Inception%20Program%20Member-76B900.svg)](https://nexopost.com)

> **Built by [Uptexx](https://uptexx.com)** — This open-source package is maintained by the engineering team behind **[NexoPost](https://nexopost.com)**, the AI-powered B2B social media scheduling, editorial calendar, and autonomous publishing platform. Proud **NVIDIA Inception Program Member**.

Complete TypeScript/JSON specification of image, video, aspect ratio, duration, and character limits across 10 social networks (**Instagram**, **TikTok**, **YouTube**, **LinkedIn**, **X**, **Pinterest**, **Threads**, **Facebook**, **Bluesky**, **Mastodon**).

---

## Features

- **10 Major Social Networks**: Standardized specifications for Instagram, TikTok, YouTube, LinkedIn, X (Twitter), Pinterest, Threads, Facebook, Bluesky, and Mastodon.
- **Placement-Aware**: Separate rules for `feed`, `reel`, `story`, `carousel`, `short`, `post`, `video`, and `pin`.
- **Pre-Flight Media Validation**: Validate pixel dimensions, aspect ratios, video duration, file size in bytes, and MIME types before uploading to social APIs.
- **Zero Dependencies**: 100% pure ES2022 JavaScript & TypeScript declarations with zero external runtime packages.

---

## Installation

```bash
npm install @uptexx/social-media-specs
```

---

## Quick Start (Usage Examples)

```javascript
import {
  getPlatformSpecs,
  validateMediaDimensions,
  listSupportedPlatforms
} from '@uptexx/social-media-specs';

// 1. List all 10 supported platforms
const platforms = listSupportedPlatforms();
console.log(platforms.map((p) => p.id));
// ['instagram', 'tiktok', 'youtube', 'linkedin', 'x', 'pinterest', 'threads', 'facebook', 'bluesky', 'mastodon']

// 2. Get full platform specifications
const igSpecs = getPlatformSpecs('instagram');
console.log(igSpecs.maxTextLength); // 2200
console.log(igSpecs.placements.reel.maxDurationSec); // 900

// 3. Validate media before publishing
const validation = validateMediaDimensions('instagram', 'reel', {
  width: 1080,
  height: 1920,
  durationSec: 45,
  sizeBytes: 18 * 1024 * 1024,
  mimeType: 'video/mp4'
});

if (!validation.valid) {
  console.error('Media validation failed:', validation.errors);
}
```

---

## API Reference

| Function | Parameters | Return Type | Description |
| :--- | :--- | :--- | :--- |
| `getPlatformSpecs(platform)` | `platform: string` | `PlatformSpec` | Returns full specifications for the target social platform (supports aliases like `twitter` -> `x`). |
| `validateMediaDimensions(platform, placement, media)` | `platform: string`, `placement?: string`, `media: MediaValidationInput` | `MediaValidationResult` | Validates width, height, aspect ratio, duration, file size, and MIME type against placement rules. |
| `listSupportedPlatforms()` | None | `PlatformSummary[]` | Returns an array of all 10 supported platforms with summary limits and placement keys. |

### `MediaValidationInput` Parameters

- `width` (`number`, required): Media width in pixels.
- `height` (`number`, required): Media height in pixels.
- `durationSec` (`number`, optional): Video duration in seconds.
- `sizeBytes` (`number`, optional): Total file size in bytes.
- `mimeType` (`string`, optional): Standard MIME type string (e.g., `'video/mp4'`, `'image/jpeg'`).

---

## About Uptexx & NexoPost

**[Uptexx](https://uptexx.com)** builds enterprise-grade AI publishing and marketing automation infrastructure. Our flagship product, **[NexoPost](https://nexopost.com)**, empowers B2B brands, agencies, and growth teams with AI-assisted content creation, multi-network scheduling, and automated cross-channel analytics. Uptexx is a proud **NVIDIA Inception Program Member**.

- **Company Website:** [https://uptexx.com](https://uptexx.com)
- **Product Website:** [https://nexopost.com](https://nexopost.com)
- **License:** MIT © Kuzey Tech Bilgi Teknolojileri Ticaret Limited Sirketi (Uptexx)
