// Single source of truth for practice details. Edit here, not in pages.

export const PREVIEW = import.meta.env.PUBLIC_PREVIEW === '1';

export const site = {
  name: 'Dr. Mark Pitcher',
  legalName: 'Mark J. Pitcher, DC, MSc, CCSP',
  credentials: 'DC, MSc, CCSP',
  url: 'https://www.markjpitcher.com',
  phoneDisplay: '970-331-1199',
  phoneTel: '+19703311199',
  // Assembled in the browser at click time so scrapers never see it in the HTML.
  emailUser: 'markjpitcher',
  emailDomain: 'gmail.com',
  // Every email link opens with this subject so Gmail can filter and label requests.
  emailSubject: 'markjpitcher.com visit request',
  emailBody: 'Name:\nWhere you are staying (hotel or address area):\nDates you are in the valley:\nBest times for a visit:\nBrief reason for the visit (please no detailed medical information):\n',
  reviewUrl: 'https://g.page/r/CW4AWPoY43fCEAE/review',
  mapsUrl: 'https://www.google.com/maps?cid=14012918462012194926',
  areas: ['Vail', 'Beaver Creek', 'Avon', 'Edwards', 'Minturn'],
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/hotel-visits/', label: 'Hotel and home visits' },
  { href: '/treatments/', label: 'Treatments' },
  { href: '/about/', label: 'About' },
  { href: '/testimonials/', label: 'Testimonials' },
  { href: '/gallery/', label: 'Gallery' },
  { href: '/press/', label: 'Press' },
  { href: '/contact/', label: 'Contact' },
];

// In preview builds, pages are flat .html files; in production, clean folders.
// Base path: empty on markjpitcher.com, '/markjpitcher-site' on the GitHub test address.
const BASE = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

export function href(path) {
  if (!PREVIEW) return BASE + path;
  const [p, hash] = path.split('#');
  const file = p === '/' ? '/index.html' : p.replace(/\/$/, '') + '.html';
  return hash ? file + '#' + hash : file;
}

// Local file name -> original Wix media id. Production serves /images/<name>;
// preview builds load the same originals from Wix so they work before the
// images folder is copied into public/images.
const wix = {
  'home-01.jpg': 'f59c3b_f2a728e82090d78611c945e7153c9ba8.jpg',
  'home-04.jpg': 'f59c3b_ce0ba4d32e131302cba1e6137f1107e7.jpg',
  'home-05.jpg': 'f59c3b_94a60ff51676fec35dad40946033c0bc.jpg',
  'home-06.jpg': 'f59c3b_8b77a84df597196962ee1331b678c1db.jpg',
  'home-07.jpg': 'f59c3b_a8b4ded0181d4950b2c9af8105d8e705.jpg',
  'home-19.jpg': 'f59c3b_7cbd1e16348a49509075cbf8e6ac2244~mv2.jpg',
  'home-20.jpg': 'f59c3b_e61ae79e15b745ddbe387de7c8f8c18f~mv2_d_2800_1200_s_2.jpg',
  'treatment-info-02.jpg': 'f59c3b_9a80365c403d4d68abb9e9208427f1ec.jpg',
  'treatment-info-03.jpg': 'f59c3b_16686f989eab0d86b050a435fc8b3876.jpg',
  'treatment-info-04.jpg': 'f59c3b_99f0983111b045ceab4309dbbf3255aa.jpg',
  'treatment-info-06.jpeg': 'f59c3b_19142a9080484272a3fd8b56bb31838b~mv2.jpeg',
  'treatment-info-07.jpg': 'f59c3b_5b4431a3f9bc40a5b804457391cef0bd.jpg',
};

// Images already in public/images that the private preview can ship as its own files.
const bundled = new Set(['profile.webp', 'profile.jpg', 'avatar-female.svg', 'avatar-male.svg', 'home-17.jpg', 'nycb-logo.png','nate-page.jpg','taipei-khan.jpg','about-taipei.jpg','about-dancer.jpg','about-mentor.jpg','about-taping.jpg','about-trx.jpg','about-gym.jpg','vail-sunrise.jpg','treat-climb.jpg','treat-ballet.jpg','treat-tape.jpg','about-teaching.jpg','gallery-03.jpg','gallery-04.jpg','gallery-06.jpg','gallery-07.jpg','gallery-09.jpg','gallery-11.jpg','gallery-17.jpg','gallery-18.jpg','gallery-19.jpg','gallery-20.jpg','gallery-21.jpg','gallery-22.jpg','gallery-26.jpg','gallery-28.jpg']);

export function img(name, w) {
  if (PREVIEW && bundled.has(name)) return `./images/${name}`;
  if (PREVIEW) {
    // Private preview pages cannot load outside images, so show a labelled
    // stand-in. The real build uses the photo from public/images.
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><rect width="900" height="600" fill="#d6e7ec"/><path d="M0 600 L260 300 L400 430 L600 180 L900 520 L900 600 Z" fill="#1e4d45" opacity=".35"/><text x="450" y="300" text-anchor="middle" font-family="Arial" font-size="40" fill="#13222b">Photo: ${name}</text></svg>`;
    return 'data:image/svg+xml,' + encodeURIComponent(svg);
  }
  return `${BASE}/images/${name}`;
}
export const wixIds = wix;

// Video and other media served from public/media (shipped with the preview too).
export function media(name) {
  return PREVIEW ? `./media/${name}` : `${BASE}/media/${name}`;
}
