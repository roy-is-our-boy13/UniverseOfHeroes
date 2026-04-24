import cashCircuits from '../../assets/Comics/Cash & Circuits_ Bank Heist Gone Rogue.pdf';
import shadowBlade from '../../assets/Comics/Shadow Blade_ Ninja Hunter.pdf';
import brokenBadge from '../../assets/Comics/Shadows of the Broken Badge.pdf';

import flyRonTitle from '../../assets/SeriesLogos/FlyRonTitle.png';
import flyRonCover from '../../assets/imagesCharacters/FlyRon.png';
import flyRonArt from '../../assets/otherImages/FlyRonArt.png';

import wildWrathTitle from '../../assets/SeriesLogos/WildWrathTitle.png';
import wildWrathBg from '../../assets/Wallpaper/WildWrathWallpaper.png';
import wildWrathCover from '../../assets/imagesCharacters/WildWrath.png';
import wildWrath1 from '../../assets/otherImages/WildWrath1.png';

import redManTitle from '../../assets/SeriesLogos/RedManTitle.png';
import redManBg from '../../assets/otherImages/RedMan1.png';
import redManCover from '../../assets/imagesCharacters/RedMan.png';

import ravenBg from '../../assets/otherImages/RavenVanguardComicPage.png';
import ravenCover from '../../assets/imagesCharacters/RavenVangaurd.png';

import humanStrikeTitle from '../../assets/SeriesLogos/HumanStrikeTitle.png';
import humanStrikeBg from '../../assets/otherImages/HumanStrike1.png';
import humanStrikeCover from '../../assets/imagesCharacters/HumanStrike.png';

import cristerTitle from '../../assets/SeriesLogos/CristerTitle.png';
import cristerCover from '../../assets/imagesCharacters/Crister.png';
import cristerArt from '../../assets/otherImages/CristerArt.png';

import terraBg from '../../assets/otherImages/CharactersTitle.png';
import terraA from '../../assets/otherImages/MessengerPoster.png';
import terraB from '../../assets/otherImages/JungleTitian1.png';

import morphoTitle from '../../assets/SeriesLogos/MorphoManTitle.png';
import morphoCover from '../../assets/imagesCharacters/MorphoMan.png';
import morpho1 from '../../assets/otherImages/MorphoMan1.png';

import flitterTitle from '../../assets/SeriesLogos/FlitterMouseTitle.png';
import flitterBg from '../../assets/otherImages/FlitterMouse1.png';
import flitterCover from '../../assets/imagesCharacters/FlitterMouse.png';

import reflectorCover from '../../assets/imagesCharacters/Reflector.png';
import reflectorPose from '../../assets/imagePose/RefectorPose.png';

import apolloTitle from '../../assets/SeriesLogos/ApolloRayTitle.png';
import apolloCover from '../../assets/imagesCharacters/ApolloRay.png';
import apolloArt from '../../assets/otherImages/ApolloRayArt.png';

import jungleTitle from '../../assets/SeriesLogos/JungleTitianTitle.png';
import jungleBg from '../../assets/otherImages/JungleTitian1.png';
import jungleCover from '../../assets/imagesCharacters/JungleTitan.png';

import aegisTitle from '../../assets/SeriesLogos/AegislLuminarTitle.png';
import aegisBg from '../../assets/otherImages/AegisLuminar1.png';
import aegisCover from '../../assets/imagesCharacters/Aegis Luminar.png';

import theMessengerTitle from '../../assets/SeriesLogos/TheMessengerTitle.png';
import theMessengerCover from '../../assets/imagesCharacters/TheMessenger.png';

function edition(title, date, coverImage, href = null) {
  return { title, date, coverImage, href };
}

/** @type {Record<string, { title: string; description: string; heroImage: string; collectedEditions: ReturnType<typeof edition>[] }>} */
export const SERIES_BY_SLUG = {
  'fly-ron': {
    title: 'Fly Ron',
    description:
      'High above the city, FLY RON patrols the skyline—part stunt pilot, part vigilante. When a syndicate threatens innocent lives, he trades calm for courage and proves that HEROES do not need capes to leave a mark.',
    heroImage: flyRonTitle,
    heroObjectFit: 'contain',
    alliesLinks: [{ name: 'Fly Ron', path: '/flyron' }],
    collectedEditions: [
      edition('Fly Ron: City Wings', 'Mar 4, 2025', flyRonCover),
      edition('Fly Ron: Afterburn', 'Jul 18, 2025', flyRonArt),
      edition('Cash & Circuits', 'Oct 2, 2025', flyRonCover, cashCircuits),
    ],
  },
  'wild-wrath': {
    title: 'Wild Wrath',
    description:
      'WILD WRATH channels the fury of the storm. Exiled and underestimated, he returns to settle scores with honor—RAW POWER tempered by a code no villain can break.',
    heroImage: wildWrathTitle,
    heroObjectFit: 'contain',
    alliesLinks: [{ name: 'Wild Wrath', path: '/wildwrath' }],
    collectedEditions: [
      edition('Wild Wrath: Book One', 'Jan 21, 2025', wildWrathCover),
      edition('Wild Wrath: Scorched Earth', 'Jun 9, 2025', wildWrath1),
      edition('Shadow Blade', 'Nov 14, 2025', wildWrath1, shadowBlade),
    ],
  },
  'wild-reign': {
    title: 'Wild Reign',
    description:
      'WILD REIGN chronicles a feral uprising in the frontier zones, where fractured alliances and primal power decide who leads and who survives.',
    heroImage: wildWrathBg,
    alliesLinks: [
      { name: 'Roaring Lion', path: '/roaringlion' },
      { name: 'Howl Wolf', path: '/howlwolf' },
    ],
    collectedEditions: [
      edition('Wild Reign: Rise of Claws', 'Jan 15, 2026', wildWrathCover),
      edition('Wild Reign: Crown of Ash', 'Apr 19, 2026', wildWrath1),
    ],
  },
  'red-man': {
    title: 'Red Man',
    description:
      'The RED MAN moves like a warning light—fast, bright, impossible to ignore. In a world of gray alliances, he fights so the TRUTH stays visible.',
    heroImage: redManTitle,
    heroObjectFit: 'contain',
    alliesLinks: [{ name: 'Red Man', path: '/redman' }],
    collectedEditions: [
      edition('Red Man: Crimson Line', 'Feb 11, 2025', redManCover),
      edition('Red Man: Heat Signature', 'Aug 30, 2025', redManBg),
    ],
  },
  'raven-van-guard': {
    title: 'Raven Van Guard',
    description:
      'RAVEN VAN GUARD operates where maps end. Espionage, ghosts of old wars, and a conscience that refuses to quit—this series is GRIT, gadgets, and midnight rooftops.',
    heroImage: ravenBg,
    alliesLinks: [
      { name: 'Raven Van Guard', path: '/ravenvangaurd' },
      { name: 'Michael', path: '/michael' },
      { name: 'Gabriel', path: '/gabriel' },
      { name: 'Raphael', path: '/raphael' },
      { name: 'Uriel', path: '/uriel' },
      { name: 'Ariel', path: '/ariel' },
      { name: 'Azrael', path: '/azrael' },
      { name: 'Chamuel', path: '/chamuel' },
    ],
    collectedEditions: [
      edition('Raven Van Guard: Black File', 'Apr 7, 2025', ravenCover),
      edition('Raven Van Guard: Ghost Signal', 'Sep 22, 2025', ravenBg),
      edition('Shadows of the Broken Badge', 'Dec 10, 2025', ravenCover, brokenBadge),
    ],
  },
  'human-strike': {
    title: 'Human Strike',
    description:
      'HUMAN STRIKE proves ordinary courage still beats supernatural odds. Every punch is earned; every victory costs something—and the READ never gets easy.',
    heroImage: humanStrikeTitle,
    heroObjectFit: 'contain',
    alliesLinks: [{ name: 'Human Strike', path: '/humanstrike' }],
    collectedEditions: [
      edition('Human Strike: First Contact', 'May 5, 2025', humanStrikeCover),
      edition('Human Strike: Iron Lessons', 'Oct 19, 2025', humanStrikeBg),
    ],
  },
  crister: {
    title: 'Crister',
    description:
      'CRISTER walks the line between icon and outlaw. Brilliant, stubborn, and haunted by CHOICES that echo across the city—this is street-level mythmaking.',
    heroImage: cristerTitle,
    heroObjectFit: 'contain',
    alliesLinks: [{ name: 'Crister', path: '/crister' }],
    collectedEditions: [
      edition('Crister: Cold Open', 'Mar 28, 2025', cristerCover),
      edition('Crister: Night Markets', 'Jul 7, 2025', cristerArt),
    ],
  },
  'terra-warriors': {
    title: 'Terra Warriors',
    description:
      'When ancient seals break, the TERRA WARRIORS rise—champions bound to land, sea, and sky. Their battles decide whether the world KEEPS its balance.',
    heroImage: terraBg,
    showHero: false,
    /** Profile routes match `characters.jsx` (same as the Characters grid). */
    alliesLinks: [
      { name: 'Fly Ron', path: '/flyron' },
      { name: 'Wild Wrath', path: '/wildwrath' },
      { name: 'Crister', path: '/crister' },
      { name: 'Human Strike', path: '/humanstrike' },
      { name: 'Apollo Ray', path: '/apolloray' },
      { name: 'Reflector', path: '/reflector' },
    ],
    collectedEditions: [
      edition('Terra Warriors: Book One', 'Feb 2, 2025', terraA),
      edition('Terra Warriors: Shattered Crown', 'Jun 16, 2025', terraB),
    ],
  },
  'morpho-man': {
    title: 'Morpho Man',
    description:
      'MORPHO MAN shifts shape to survive. Identity becomes both weapon and wound in a thriller about who you are when you can be ANYONE.',
    heroImage: morphoTitle,
    heroObjectFit: 'contain',
    alliesLinks: [{ name: 'Morpho Man', path: '/morphoman' }],
    collectedEditions: [
      edition('Morpho Man: Masks', 'Apr 19, 2025', morphoCover),
      edition('Morpho Man: Double Self', 'Sep 3, 2025', morpho1),
    ],
  },
  'flitter-mouse': {
    title: 'Flitter Mouse',
    description:
      'Small, quick, and sharper than she looks—FLITTER MOUSE turns scrapyards into workshops and setbacks into WINS. Hopeful, kinetic, and full of heart.',
    heroImage: flitterTitle,
    heroObjectFit: 'contain',
    alliesLinks: [{ name: 'Flitter Mouse', path: '/flittermouse' }],
    collectedEditions: [
      edition('Flitter Mouse: Little Thunder', 'Jan 9, 2025', flitterCover),
      edition('Flitter Mouse: Neon Alley', 'Aug 11, 2025', flitterBg),
    ],
  },
  refector: {
    title: 'Refector',
    description:
      'REFECTOR bends light and expectation. In a city addicted to surfaces, only he sees what is REAL—and reflects it back until villains cannot hide.',
    heroImage: reflectorPose,
    alliesLinks: [{ name: 'Refector', path: '/reflector' }],
    collectedEditions: [
      edition('Refector: Mirror Law', 'Mar 15, 2025', reflectorCover),
      edition('Refector: Bright Lies', 'Nov 1, 2025', reflectorPose),
    ],
  },
  'apollo-ray': {
    title: 'Apollo Ray',
    description:
      'APOLLO RAY brings sunlight to the fight—charisma, precision, and a streak of defiance bright enough to burn through CONSPIRACY and fear.',
    heroImage: apolloTitle,
    heroObjectFit: 'contain',
    alliesLinks: [{ name: 'Apollo Ray', path: '/apolloray' }],
    collectedEditions: [
      edition('Apollo Ray: Dawn Patrol', 'May 27, 2025', apolloCover),
      edition('Apollo Ray: Solar Flare', 'Dec 2, 2025', apolloArt),
    ],
  },
  'jungle-titan': {
    title: 'Jungle Titan',
    description:
      'Deep green canopy, older magic, and a guardian who will not yield—JUNGLE TITAN is SURVIVAL myth turned modern epic.',
    heroImage: jungleTitle,
    heroObjectFit: 'contain',
    alliesLinks: [{ name: 'Jungle Titan', path: '/jungletitian' }],
    collectedEditions: [
      edition('Jungle Titan: Green Throne', 'Feb 26, 2025', jungleCover),
      edition('Jungle Titan: River of Teeth', 'Oct 8, 2025', jungleBg),
    ],
  },
  'aegis-luminar': {
    title: 'Aegis Luminar',
    description:
      'AEGIS LUMINAR carries shields of light—protector, tactician, and last line when darkness masses at the gate. Honor is not passive; it is FORGED.',
    heroImage: aegisTitle,
    heroObjectFit: 'contain',
    alliesLinks: [{ name: 'Aegis Luminar', path: '/aegisluminar' }],
    collectedEditions: [
      edition('Aegis Luminar: Litany', 'Apr 3, 2025', aegisCover),
      edition('Aegis Luminar: Last Bastion', 'Sep 17, 2025', aegisBg),
    ],
  },
  'the-messenger': {
    title: 'The Messenger',
    description:
      'THE MESSENGER moves between silence and signal, carrying truth where it is hardest to hear and binding scattered allies with a single, clear voice.',
    heroImage: theMessengerTitle,
    heroObjectFit: 'contain',
    alliesLinks: [{ name: 'The Messenger', path: '/themessenger' }],
    collectedEditions: [
      edition('The Messenger: Signal & Silence', 'Mar 1, 2025', theMessengerCover),
    ],
  },
};

export function getSeriesBySlug(slug) {
  if (!slug) return undefined;
  return SERIES_BY_SLUG[slug];
}
