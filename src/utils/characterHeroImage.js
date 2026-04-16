import heroConfig from '../data/characterHeroImages.json';
import placeholderUrl from '../assets/imageIcon/Character.png';

const imagePoseUrlByFile = Object.fromEntries(
  Object.entries(
    import.meta.glob('../assets/imagePose/*.png', {
      eager: true,
      query: '?url',
      import: 'default',
    })
  ).map(([path, url]) => [path.split('/').pop(), url])
);

const portraitUrlByFile = Object.fromEntries(
  Object.entries(
    import.meta.glob('../assets/imagesCharacters/*.png', {
      eager: true,
      query: '?url',
      import: 'default',
    })
  ).map(([path, url]) => [path.split('/').pop(), url])
);

/**
 * Resolved hero banner image URL for a character route id (e.g. "flyron", "apolloray").
 * @param {string} characterId
 */
export function getCharacterHeroImageUrl(characterId) {
  const cfg = heroConfig.heroImageByCharacterId[characterId];
  if (!cfg) {
    throw new Error(`characterHeroImages: unknown character id "${characterId}"`);
  }
  if (cfg.placeholder) {
    return placeholderUrl;
  }
  if (cfg.imagePose) {
    const url = imagePoseUrlByFile[cfg.imagePose];
    if (url == null) {
      throw new Error(`characterHeroImages: missing imagePose asset "${cfg.imagePose}"`);
    }
    return url;
  }
  if (cfg.portraitImage) {
    const url = portraitUrlByFile[cfg.portraitImage];
    if (url == null) {
      throw new Error(`characterHeroImages: missing portrait "${cfg.portraitImage}"`);
    }
    return url;
  }
  throw new Error(`characterHeroImages: invalid entry for "${characterId}"`);
}
