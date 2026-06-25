const email = 'jaygrenacher.ch@gmail.com';

function ContactIcon({ type }) {
  const icons = {
    mail: <path d="M4 6h16v12H4zM4 7l8 6 8-6" />,
    github: <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.36-1.18-3.36-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.35 1.08 2.92.82.09-.65.35-1.08.63-1.33-2.21-.25-4.54-1.1-4.54-4.91 0-1.08.39-1.97 1.03-2.66-.1-.25-.45-1.26.1-2.63 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.07c.85 0 1.7.11 2.5.33 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.38.1 2.63.64.69 1.03 1.58 1.03 2.66 0 3.82-2.34 4.66-4.56 4.9.36.32.68.94.68 1.9v2.82c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />,
    instagram: <><rect x="4" y="4" width="16" height="16" rx="5" /><circle cx="12" cy="12" r="3.5" /><path d="M17.5 6.5h.01" /></>,
  };

  return (
    <svg className="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[type]}
    </svg>
  );
}

export default function ContactPreview() {
  return (
    <section className="section section--contact reveal" id="contact">
      <div className="shell section__grid">
        <div className="section__num">04 / 04</div>
        <h2 className="section__title">
          <span data-show="en">Let's talk.</span>
          <span data-show="de">Sag hallo.</span>
        </h2>
        <p className="section__lead">
          <span data-show="en">Open to internships, dev roles and freelance briefs — or just a chat about code, photography or motorsport. The fastest way to reach me is email.</span>
          <span data-show="de">Offen für Praktika, Dev-Stellen und Freelance-Aufträge — oder einfach ein Austausch über Code, Fotografie oder Motorsport. Am schnellsten erreichst du mich per E-Mail.</span>
        </p>

        <div className="contact-card section__media">
          <span className="eyebrow eyebrow--accent">
            <span data-show="en">Available for internships</span>
            <span data-show="de">Verfügbar für Praktika</span>
          </span>

          <a className="contact-card__mail" href={`mailto:${email}`}>
            <span className="contact-card__mail-label">
              <ContactIcon type="mail" />
              <span data-show="en">Write me an email</span>
              <span data-show="de">Schreib mir eine E-Mail</span>
            </span>
            <span className="contact-card__mail-addr">{email}</span>
            <svg className="contact-card__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </a>

          <div className="contact-card__socials">
            <a className="contact-card__social" href="https://github.com/Jayyy-PG" target="_blank" rel="noopener noreferrer">
              <ContactIcon type="github" />GitHub
            </a>
            <a className="contact-card__social" href="https://www.instagram.com/jayyy_p.g/" target="_blank" rel="noopener noreferrer">
              <ContactIcon type="instagram" />Instagram
            </a>
          </div>

          <div className="contact-card__meta">
            <span>Aargau · CH</span>
            <span className="contact-card__dot" aria-hidden="true" />
            <span data-show="en">Usually replies within a day</span>
            <span data-show="de">Antwortet meist innert eines Tages</span>
          </div>
        </div>
      </div>
    </section>
  );
}
