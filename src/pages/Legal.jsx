import { legalDocuments } from '../data/legal.js';
import { useLang } from '../utils/lang.js';

/**
 * Renders /datenschutz and /impressum from the same layout.
 *
 * Long-form prose is the one place the site does not render both languages
 * and hide one with CSS — that would double a page of legal text in the DOM
 * for no benefit, so the active language is picked in JavaScript instead.
 */
export default function Legal({ doc }) {
  const lang = useLang();
  const source = legalDocuments[doc];
  const content = source[lang] || source.en;

  return (
    <section className="legal reveal">
      <div className="shell legal__inner">
        <header className="legal__head">
          <h1 className="legal__title">{content.title}</h1>
          <p className="legal__updated">{content.updated}</p>
        </header>

        <p className="legal__intro">{content.intro}</p>

        {content.sections.map((section) => (
          <section className="legal__section" key={section.heading}>
            <h2 className="legal__heading">{section.heading}</h2>
            {section.body.map((paragraph, i) => (
              <p className="legal__body" key={`${section.heading}-${i}`}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
    </section>
  );
}
