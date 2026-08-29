/**
 * All imagery on this site is served from the original remote CDN
 * (S3 bucket + Unsplash) rather than bundled locally, matching the
 * source static site's architecture.
 */
export const S3_BASE = 'https://d3epw9xjpezjqk.cloudfront.net';

export const CHEDI_LOGO = `${S3_BASE}/chedilogo.webp`;
