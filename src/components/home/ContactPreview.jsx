import { useEffect, useRef } from 'react';

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
  const formRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return undefined;

    const onSubmit = (event) => {
      event.preventDefault();
      const status = form.querySelector('.contact-form__status');
      const data = Object.fromEntries(new FormData(form));
      if (!data.name || !data.email || !data.message) {
        status.textContent = (document.documentElement.dataset.lang === 'de')
          ? 'Bitte fülle Name, E-Mail und Nachricht aus.'
          : 'Please fill name, email and message.';
        status.dataset.tone = 'err';
        return;
      }
      const subject = encodeURIComponent(data.subject || 'Hi JPG - from your portfolio');
      const body = encodeURIComponent('Name: ' + data.name + '\nEmail: ' + data.email + '\n\n' + data.message + '\n\n- sent via jpg.portfolio');
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      status.textContent = (document.documentElement.dataset.lang === 'de')
        ? 'Dein Mail-Programm öffnet sich. Danke!'
        : 'Your mail app should open. Thanks!';
      status.dataset.tone = 'ok';
      form.reset();
    };

    form.addEventListener('submit', onSubmit);
    return () => form.removeEventListener('submit', onSubmit);
  }, []);

  return (
    <section className="section section--contact reveal" id="contact">
      <div className="shell section__grid">
        <div className="section__num" data-parallax-y="-12">04 / 04</div>
        <h2 className="section__title" data-parallax-y="-24">
          <span data-show="en">Say hi.</span>
          <span data-show="de">Sag hi.</span>
        </h2>
        <p className="section__lead" data-parallax-y="-14">
          <span data-show="en">Got a project, a role at your company, or just want to talk shop? Drop a line.</span>
          <span data-show="de">Projekt, offene Stelle in deiner Firma oder einfach Lust zu plaudern? Schreib mir.</span>
        </p>

        <form className="contact-form" id="contact-form" ref={formRef} noValidate>
          <div className="contact-form__row">
            <label>
              <span data-show="en">Name</span><span data-show="de">Name</span>
              <input type="text" name="name" required autoComplete="name" />
            </label>
            <label>
              <span data-show="en">Email</span><span data-show="de">E-Mail</span>
              <input type="email" name="email" required autoComplete="email" />
            </label>
          </div>
          <label className="contact-form__full">
            <span data-show="en">Subject</span><span data-show="de">Betreff</span>
            <input type="text" name="subject" />
          </label>
          <label className="contact-form__full">
            <span data-show="en">Message</span><span data-show="de">Nachricht</span>
            <textarea name="message" rows="6" required />
          </label>

          <div className="contact-form__foot">
            <div className="contact-links" aria-label="Social links">
              <a className="contact-form__alt" href={`mailto:${email}`}><ContactIcon type="mail" />{email}</a>
              <a className="contact-form__alt" href="https://github.com/Jayyy-PG" target="_blank" rel="noopener noreferrer"><ContactIcon type="github" />GitHub</a>
              <a className="contact-form__alt" href="https://www.instagram.com/jayyy_p.g/" target="_blank" rel="noopener noreferrer"><ContactIcon type="instagram" />Instagram</a>
            </div>
            <button className="btn btn--lg" type="submit">
              <span data-show="en">Send message</span>
              <span data-show="de">Nachricht senden</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </button>
          </div>

          <div className="contact-form__status" role="status" aria-live="polite" />
        </form>
      </div>
    </section>
  );
}
