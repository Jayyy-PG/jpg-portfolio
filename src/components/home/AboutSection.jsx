const steps = [
  {
    num: '01',
    parallax: '-8',
    title: { en: 'Plan', de: 'Planen' },
    body: {
      en: 'Define the goal, structure the idea and choose the right tools before writing code.',
      de: 'Ziel definieren, Idee strukturieren und passende Tools wählen, bevor ich Code schreibe.',
    },
    icon: (
      <>
        <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" />
      </>
    ),
  },
  {
    num: '02',
    parallax: '8',
    title: { en: 'Design', de: 'Designen' },
    body: {
      en: 'Create clean layouts, user-friendly flows and visual systems that match the project.',
      de: 'Klare Layouts, einfache Abläufe und visuelle Systeme erstellen, die zum Projekt passen.',
    },
    icon: (
      <>
        <path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
      </>
    ),
  },
  {
    num: '03',
    parallax: '-6',
    title: { en: 'Build', de: 'Entwickeln' },
    body: {
      en: 'Write structured code, connect logic and turn the concept into a working product.',
      de: 'Strukturierten Code schreiben, Logik verbinden und das Konzept in ein funktionierendes Produkt umsetzen.',
    },
    icon: (
      <>
        <path d="m8 7-5 5 5 5" /><path d="m16 7 5 5-5 5" /><path d="m13.5 4-3 16" />
      </>
    ),
  },
  {
    num: '04',
    parallax: '10',
    title: { en: 'Improve', de: 'Verbessern' },
    body: {
      en: 'Test, debug, refactor and polish details until the experience feels right.',
      de: 'Testen, debuggen, refactoren und Details verbessern, bis sich die Experience richtig anfühlt.',
    },
    icon: (
      <>
        <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" /><path d="M19 14.5v3M20.5 16h-3" />
      </>
    ),
  },
];

const toolbox = [
  'Project Planning', 'UI/UX Design', 'Clean Code', 'Responsive Design', 'Debugging',
  'Testing', 'Refactoring', 'Git Workflow', 'Documentation', 'Performance',
];

export default function AboutSection() {
  return (
    <section className="section section--about work-section reveal" id="about">
      <div className="shell section__grid work-grid">
        <div className="section__num" data-parallax-y="-12">03 / 04</div>
        <div className="work-heading" data-parallax-y="-22">
          <h2 className="section__title">
            <span data-show="en">How I Work</span>
            <span data-show="de">Wie ich arbeite</span>
          </h2>
        </div>

        <div className="work-panel">
          <div className="work-panel__intro" data-parallax-y="14">
            <div className="work-panel__intro-top">
              <span className="eyebrow">Process</span>
              <span className="work-panel__mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a9 9 0 1 1-2.64-6.36" /><path d="M21 3.5v5h-5" />
                </svg>
              </span>
            </div>
            <p className="work-statement" data-show="en">I keep projects <strong>structured</strong> from the first idea to the <strong>final polish</strong>, so design and code feel like <strong>one clean system</strong>.</p>
            <p className="work-statement" data-show="de">Ich halte Projekte von der ersten Idee bis zum letzten Detail <strong>strukturiert</strong>, damit Design und Code wie <strong>ein sauberes System</strong> wirken.</p>
          </div>

          <ol className="work-steps">
            {steps.map((step) => (
              <li className="work-step" data-parallax-y={step.parallax} key={step.num}>
                <div className="work-step__head">
                  <span className="work-step__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      {step.icon}
                    </svg>
                  </span>
                  <span className="work-step__num">{step.num}</span>
                </div>
                <strong data-show="en">{step.title.en}</strong><strong data-show="de">{step.title.de}</strong>
                <p data-show="en">{step.body.en}</p>
                <p data-show="de">{step.body.de}</p>
              </li>
            ))}
          </ol>

          <div className="work-toolbox">
            {toolbox.map((tool) => <span key={tool}>{tool}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
