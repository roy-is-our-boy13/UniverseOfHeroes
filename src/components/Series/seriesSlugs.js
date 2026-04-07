/** URL segment for a series display name, e.g. "Apollo Ray" → "apollo-ray". */
export function seriesNameToSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
