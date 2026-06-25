const markup = `<section class="section section--about work-section reveal" id="about">
  <div class="shell section__grid work-grid">
    <div class="section__num" data-parallax-y="-12">03 / 04</div>
    <div class="work-heading" data-parallax-y="-22">
      <h2 class="section__title">
        <span data-show="en">How I Work</span>
        <span data-show="de">Wie ich arbeite</span>
      </h2>
    </div>

    <div class="work-panel">
      <div class="work-panel__intro" data-parallax-y="14">
        <div class="work-panel__intro-top">
          <span class="eyebrow">Process</span>
          <span class="work-panel__mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12a9 9 0 1 1-2.64-6.36" /><path d="M21 3.5v5h-5" />
            </svg>
          </span>
        </div>
        <p class="work-statement" data-show="en">I keep projects <strong>structured</strong> from the first idea to the <strong>final polish</strong>, so design and code feel like <strong>one clean system</strong>.</p>
        <p class="work-statement" data-show="de">Ich halte Projekte von der ersten Idee bis zum letzten Detail <strong>strukturiert</strong>, damit Design und Code wie <strong>ein sauberes System</strong> wirken.</p>
      </div>

      <ol class="work-steps">
        <li class="work-step" data-parallax-y="-8">
          <div class="work-step__head">
            <span class="work-step__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" />
              </svg>
            </span>
            <span class="work-step__num">01</span>
          </div>
          <strong data-show="en">Plan</strong><strong data-show="de">Planen</strong>
          <p data-show="en">Define the goal, structure the idea and choose the right tools before writing code.</p>
          <p data-show="de">Ziel definieren, Idee strukturieren und passende Tools wählen, bevor ich Code schreibe.</p>
        </li>
        <li class="work-step" data-parallax-y="8">
          <div class="work-step__head">
            <span class="work-step__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
              </svg>
            </span>
            <span class="work-step__num">02</span>
          </div>
          <strong data-show="en">Design</strong><strong data-show="de">Designen</strong>
          <p data-show="en">Create clean layouts, user-friendly flows and visual systems that match the project.</p>
          <p data-show="de">Klare Layouts, einfache Abläufe und visuelle Systeme erstellen, die zum Projekt passen.</p>
        </li>
        <li class="work-step" data-parallax-y="-6">
          <div class="work-step__head">
            <span class="work-step__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="m8 7-5 5 5 5" /><path d="m16 7 5 5-5 5" /><path d="m13.5 4-3 16" />
              </svg>
            </span>
            <span class="work-step__num">03</span>
          </div>
          <strong data-show="en">Build</strong><strong data-show="de">Entwickeln</strong>
          <p data-show="en">Write structured code, connect logic and turn the concept into a working product.</p>
          <p data-show="de">Strukturierten Code schreiben, Logik verbinden und das Konzept in ein funktionierendes Produkt umsetzen.</p>
        </li>
        <li class="work-step" data-parallax-y="10">
          <div class="work-step__head">
            <span class="work-step__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" /><path d="M19 14.5v3M20.5 16h-3" />
              </svg>
            </span>
            <span class="work-step__num">04</span>
          </div>
          <strong data-show="en">Improve</strong><strong data-show="de">Verbessern</strong>
          <p data-show="en">Test, debug, refactor and polish details until the experience feels right.</p>
          <p data-show="de">Testen, debuggen, refactoren und Details verbessern, bis sich die Experience richtig anfühlt.</p>
        </li>
      </ol>

      <div class="work-toolbox">
        <span>Project Planning</span><span>UI/UX Design</span><span>Clean Code</span><span>Responsive Design</span><span>Debugging</span><span>Testing</span><span>Refactoring</span><span>Git Workflow</span><span>Documentation</span><span>Performance</span>
      </div>
    </div>
  </div>
</section>`;

export default function AboutSection() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
