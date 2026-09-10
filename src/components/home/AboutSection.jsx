/**
 * Not a process diagram. The three stages below are the actual route Jay
 * took — print, then photography, then software — which is both more honest
 * and more specific than Plan / Design / Build / Improve.
 */
const stages = [
  {
    num: '01',
    label: { en: 'Print & media design', de: 'Print- und Mediengestaltung' },
    body: {
      en: 'Flyers, posters, and business cards in print and media. Fixed formats, real margins — and no undo once something went to print.',
      de: 'Flyer, Poster und Visitenkarten im Print- und Medienbereich. Feste Formate, echte Ränder – und kein Undo, sobald etwas gedruckt war.',
    },
  },
  {
    num: '02',
    label: { en: 'Photography', de: 'Fotografie' },
    body: {
      en: 'Motorsport, nature, and portraits — shot and edited in Lightroom and Photoshop. Photography has further sharpened my eye for composition, framing, and detail.',
      de: 'Motorsport, Natur und Porträts – fotografiert und bearbeitet in Lightroom und Photoshop. Die Fotografie hat meinen Blick für Bildaufbau, Komposition und Details weiter geschärft.',
    },
  },
  {
    num: '03',
    label: { en: 'Application development', de: 'Applikationsentwicklung' },
    body: {
      en: 'Today, my focus is application development. Alongside my training, I work on personal projects such as WISS HUB and GlattTube. My eye for layout and structure has stayed with me — only the medium has changed.',
      de: 'Heute liegt mein Fokus auf Applikationsentwicklung. Parallel zur Ausbildung arbeite ich an eigenen Projekten wie WISS HUB und GlattTube. Mein Blick für Layout und Struktur ist geblieben – nur das Medium hat sich verändert.',
    },
  },
];

export default function AboutSection() {
  return (
    <section className="section section--about work-section reveal" id="about">
      <div className="shell section__grid work-grid">
        <div className="section__num">03 / 04</div>
        <div className="work-heading" data-parallax-y="-10">
          <h2 className="section__title">
            <span data-show="en">From print to software</span>
            <span data-show="de">Von Print zu Software</span>
          </h2>
        </div>

        <div className="work-panel">
          <p className="work-statement" data-show="en">
            Before moving into software development, I worked in print and media. That's where I learned how much typography, spacing, and layout shape a design. I still bring that perspective into the interfaces I build today.
          </p>
          <p className="work-statement" data-show="de">
            Bevor ich in die Softwareentwicklung wechselte, war ich im Print- und Medienbereich tätig. Dort lernte ich, wie stark Typografie, Abstände und Layout die Wirkung eines Designs bestimmen. Diesen Blick nehme ich heute in meine Interfaces mit.
          </p>

          <ol className="path">
            {stages.map((stage) => (
              <li className="path__stage" key={stage.num}>
                <span className="path__num">{stage.num}</span>
                <h3 className="path__label">
                  <span data-show="en">{stage.label.en}</span>
                  <span data-show="de">{stage.label.de}</span>
                </h3>
                <p className="path__body">
                  <span data-show="en">{stage.body.en}</span>
                  <span data-show="de">{stage.body.de}</span>
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
