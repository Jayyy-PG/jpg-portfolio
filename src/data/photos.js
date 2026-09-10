/**
 * Gallery content.
 *
 * `alt` describes what is in the frame for anyone who cannot see it and is
 * kept short and factual — it is not a place for keywords. `desc` is the
 * caption shown in the lightbox and may add context the picture does not
 * carry on its own.
 *
 * Section `meta` states the countries and the actual year range of the
 * photographs it contains, so it has to be checked when photos are added.
 */

/**
 * Grid cards load a downscaled copy of the same file; the lightbox loads the
 * original. Regenerate the thumbnails with `node scripts/make-thumbnails.mjs`
 * after adding or replacing a photo.
 */
export function thumbnailFor(src) {
  return src.replace('/gallery/large/', '/gallery/thumbnails/');
}

export const gallerySections = [
  {
    title: { en: 'Cars and Motorsport', de: 'Autos und Motorsport' },
    meta: 'CH · BE · 2025 — 2026',
    tint: 'warm',
    display: {
      en: 'CARS · MOTION · SPEED',
      de: 'AUTOS · SPORT · TEMPO',
      direction: 120,
    },
    photos: [
      {
        id: 'g-01',
        title: { en: 'Ferrari F1', de: 'Ferrari F1' },
        series: { en: 'Cars and Motorsport · Spa-Francorchamps', de: 'Autos und Motorsport · Spa-Francorchamps' },
        src: '/images/gallery/large/f1-ferrari.webp',
        alt: {
          en: 'Ferrari Formula 1 car in the pit lane at Spa-Francorchamps, seen through the fence.',
          de: 'Ferrari-Formel-1-Wagen in der Boxengasse von Spa-Francorchamps, durch den Zaun fotografiert.',
        },
        aspectRatio: '3 / 2',
        size: 'xl',
        camera: 'Canon EOS 250D',
        lens: '55-250mm f/4-5.6 IS STM',
        iso: '1250',
        aperture: 'f/2.0',
        shutter: '1/1600',
        focal: '85mm',
        date: '2025-07-26',
        desc: {
          en: 'Ferrari F1 at the Belgian Grand Prix in Spa-Francorchamps.',
          de: 'Ferrari F1 beim Grossen Preis von Belgien in Spa-Francorchamps.',
        },
      },
      {
        id: 'g-02',
        title: { en: 'Emil Frey Racing Ferrari 296 GT3', de: 'Emil Frey Racing Ferrari 296 GT3' },
        series: { en: 'Cars and Motorsport · ZH', de: 'Autos und Motorsport · ZH' },
        src: '/images/gallery/large/mv-ferrari.webp',
        alt: {
          en: 'Emil Frey Racing Ferrari 296 GT3 in Red Bull livery, number 31, on display indoors.',
          de: 'Ferrari 296 GT3 von Emil Frey Racing in Red-Bull-Lackierung, Startnummer 31, in einer Ausstellung.',
        },
        aspectRatio: '3 / 2',
        size: 'sm',
        camera: 'Canon EOS 250D',
        lens: 'EF-S18-55mm f/4-5.6 IS STM',
        iso: '2500',
        aperture: 'f/4.5',
        shutter: '1/125',
        focal: '23mm',
        date: '2025-11-01',
        desc: {
          en: "Max Verstappen's Emil Frey Racing Ferrari 296 GT3, which won the NLS9 debut race.",
          de: 'Der Emil Frey Racing Ferrari 296 GT3, mit dem Max Verstappen das NLS9-Debütrennen gewann.',
        },
      },
      {
        id: 'g-03',
        title: { en: 'Yellow Lambo | Rain', de: 'Gelber Lamborghini | Regen' },
        series: { en: 'Cars and Motorsport · ZH · Rain', de: 'Autos und Motorsport · ZH · Regen' },
        src: '/images/gallery/large/yellow-lambo.webp',
        alt: {
          en: 'Yellow Lamborghini on a wet road in the rain.',
          de: 'Gelber Lamborghini auf nasser Strasse im Regen.',
        },
        aspectRatio: '3 / 2',
        size: 'md',
        camera: 'Canon EOS 250D',
        lens: 'EF-S18-55mm f/4-5.6 IS STM',
        iso: '1000',
        aperture: 'f/4.5',
        shutter: '1/1250',
        focal: '21mm',
        date: '2025-04-20',
        desc: {
          en: 'Yellow Lamborghini in the rain.',
          de: 'Ein gelber Lamborghini im Regen.',
        },
      },
      {
        id: 'g-04',
        title: { en: 'Porsche Cup Spa', de: 'Porsche Cup Spa' },
        series: { en: 'Cars and Motorsport · Spa-Francorchamps', de: 'Autos und Motorsport · Spa-Francorchamps' },
        src: '/images/gallery/large/spa-porsche.webp',
        alt: {
          en: 'Porsche Cup race car on track at Spa-Francorchamps.',
          de: 'Porsche-Cup-Rennwagen auf der Strecke in Spa-Francorchamps.',
        },
        aspectRatio: '4 / 5',
        size: 'md',
        camera: 'Canon EOS 250D',
        lens: '55-250mm f/4-5.6 IS STM',
        iso: '800',
        aperture: 'f/5.6',
        shutter: '1/1600',
        focal: '250mm',
        date: '2025-07-25',
        desc: {
          en: 'Porsche Cup at Spa-Francorchamps.',
          de: 'Porsche Cup in Spa-Francorchamps.',
        },
      },
      {
        id: 'g-05',
        title: { en: 'Supermoto 125cc', de: 'Supermoto 125 ccm' },
        series: { en: 'Cars and Motorsport · AG', de: 'Autos und Motorsport · AG' },
        src: '/images/gallery/large/lenny-bike.webp',
        alt: {
          en: '125 cc supermoto bike in motion.',
          de: '125-ccm-Supermoto in Fahrt.',
        },
        aspectRatio: '4 / 5',
        size: 'lg',
        camera: 'Canon EOS 250D',
        lens: '55-250mm f/4-5.6 IS STM',
        iso: '6400',
        aperture: 'f/4.5',
        shutter: '1/1000',
        focal: '64mm',
        date: '2025-04-30',
        desc: {
          en: 'Supermoto 125cc.',
          de: 'Supermoto 125 ccm.',
        },
      },
      {
        id: 'g-06',
        title: { en: 'Supermoto 125cc Red/White', de: 'Supermoto 125 ccm Rot/Weiss' },
        series: { en: 'Cars and Motorsport · Forest', de: 'Autos und Motorsport · Wald' },
        src: '/images/gallery/large/leandro-bike.webp',
        alt: {
          en: 'Red and white 125 cc supermoto bike on a forest track.',
          de: 'Rot-weisse 125-ccm-Supermoto auf einem Waldweg.',
        },
        aspectRatio: '4 / 5',
        size: 'xl',
        camera: 'Sony A7 III',
        lens: 'FE 24-240mm F3.5-6.3 OSS',
        iso: '320',
        aperture: 'f/6.3',
        shutter: '1/1000',
        focal: '130mm',
        date: '2026-03-22',
        desc: {
          en: 'Supermoto 125cc in red and white.',
          de: 'Supermoto 125 ccm in Rot und Weiss.',
        },
      },
    ],
  },
  {
    title: { en: 'Nature and Culture', de: 'Natur und Kultur' },
    meta: 'CH · 2024 — 2025',
    tint: 'lime',
    display: {
      en: 'NATURE · CULTURE · LIFE',
      de: 'NATUR · KULTUR · LEBEN',
      direction: -120,
    },
    photos: [
      {
        id: 'g-07',
        title: { en: 'Little River with Wooden Bridge', de: 'Kleiner Fluss mit Holzbrücke' },
        series: { en: 'Nature and Culture · Water', de: 'Natur und Kultur · Wasser' },
        src: '/images/gallery/large/birchweiher.webp',
        alt: {
          en: 'A small river crossed by a wooden bridge.',
          de: 'Ein kleiner Fluss, über den eine Holzbrücke führt.',
        },
        aspectRatio: '4 / 5',
        size: 'md',
        camera: 'Canon EOS 250D',
        lens: '55-250mm f/4-5.6 IS STM',
        iso: '200',
        aperture: 'f/4.5',
        shutter: '1/200',
        focal: '84mm',
        date: '2025-04-22',
        desc: {
          en: 'Little river with a wooden bridge.',
          de: 'Kleiner Fluss mit Holzbrücke.',
        },
      },
      {
        id: 'g-08',
        title: { en: 'Bruder Klaus', de: 'Bruder Klaus' },
        series: { en: 'Nature and Culture · Bruder Klaus', de: 'Natur und Kultur · Bruder Klaus' },
        src: '/images/gallery/large/bruederchlaus.webp',
        alt: {
          en: 'View from the Bruder Klaus site in Hägglingen over lawn and trees towards the valley and distant hills.',
          de: 'Blick vom Bruder-Klaus-Areal in Hägglingen über Wiese und Bäume ins Tal und auf die Hügel dahinter.',
        },
        aspectRatio: '3 / 2',
        size: 'xl',
        camera: 'Canon EOS 250D',
        lens: '18-55mm f/4-5.6 IS STM',
        iso: '400',
        aperture: 'f/4',
        shutter: '1/1000',
        focal: '55mm',
        date: '2024-08-04',
        desc: {
          en: 'View from the Bruder Klaus site in Hägglingen over lawn and trees towards the valley and distant hills.',
          de: 'Blick vom Bruder-Klaus-Areal in Hägglingen über Wiese und Bäume ins Tal und auf die Hügel dahinter.',
        },
      },
      {
        id: 'g-09',
        title: { en: 'Opera House Zurich', de: 'Opernhaus Zürich' },
        series: { en: 'Nature and Culture · ZH', de: 'Natur und Kultur · ZH' },
        src: '/images/gallery/large/opernhaus-zh.webp',
        alt: {
          en: 'The opera house in Zurich.',
          de: 'Das Opernhaus in Zürich.',
        },
        aspectRatio: '3 / 2',
        size: 'sm',
        camera: 'Canon EOS 250D',
        lens: '18-55mm f/4-5.6 IS STM',
        iso: '2000',
        aperture: 'f/5.6',
        shutter: '1/1250',
        focal: '47mm',
        date: '2024-04-20',
        desc: {
          en: 'Opera house in Zurich.',
          de: 'Opernhaus in Zürich.',
        },
      },
    ],
  },
  {
    title: { en: 'Lifestyle Portrait', de: 'Lifestyle-Porträt' },
    meta: 'CH · 2026',
    tint: 'rose',
    display: {
      en: 'LIFESTYLE · PORTRAIT · MOOD',
      de: 'LIFESTYLE · PORTRÄT · MOOD',
      direction: 120,
    },
    photos: [
      {
        id: 'g-10',
        title: { en: 'Fire Portrait', de: 'Feuer-Porträt' },
        series: { en: 'Lifestyle Portrait · Outdoor', de: 'Lifestyle-Porträt · Outdoor' },
        src: '/images/gallery/large/fire.webp',
        alt: {
          en: 'Portrait in near darkness, surrounded by glowing sparks rising from a fire.',
          de: 'Porträt in fast völliger Dunkelheit, umgeben von glühenden Funken eines Feuers.',
        },
        aspectRatio: '5 / 7',
        size: 'md',
        camera: 'Sony A7 III',
        lens: 'FE 24-240mm F3.5-6.3 OSS',
        iso: '8000',
        aperture: 'f/6.3',
        shutter: '1/250',
        focal: '226mm',
        date: '2026-04-06',
        desc: {
          en: 'Grilling outdoors.',
          de: 'Grillen im Freien.',
        },
      },
      {
        id: 'g-11',
        title: { en: 'Biker Portrait', de: 'Biker-Porträt' },
        series: { en: 'Lifestyle Portrait · Biker', de: 'Lifestyle-Porträt · Biker' },
        src: '/images/gallery/large/Leandro-portrait.webp',
        alt: {
          en: 'Portrait of a biker.',
          de: 'Porträt eines Bikers.',
        },
        aspectRatio: '4 / 5',
        size: 'md',
        camera: 'Sony A7 III',
        lens: 'FE 24-240mm F3.5-6.3 OSS',
        iso: '500',
        aperture: 'f/5',
        shutter: '1/4000',
        focal: '45mm',
        date: '2026-03-22',
        desc: {
          en: 'Biker portrait.',
          de: 'Biker-Porträt.',
        },
      },
      {
        id: 'g-12',
        title: { en: 'Töffli Portrait', de: 'Töffli-Porträt' },
        series: { en: 'Lifestyle Portrait · Outdoor', de: 'Lifestyle-Porträt · Outdoor' },
        src: '/images/gallery/large/toeffli-portrait.webp',
        alt: {
          en: 'Outdoor portrait with a Töffli moped.',
          de: 'Porträt im Freien mit einem Töffli.',
        },
        aspectRatio: '3 / 4',
        size: 'xs',
        camera: 'Sony A7 III',
        lens: 'FE 24-240mm F3.5-6.3 OSS',
        iso: '6400',
        aperture: 'f/4',
        shutter: '1/1000',
        focal: '55mm',
        date: '2026-04-30',
        desc: {
          en: 'Outdoor portrait with a Töffli.',
          de: 'Porträt im Freien mit einem Töffli.',
        },
      },
    ],
  },
];
