const markup = `<section class="section section--about work-section reveal" id="about">
  <div class="shell section__grid work-grid">
    <div class="section__num" data-parallax-y="-12">03 / 04</div>
    <div class="work-heading" data-parallax-y="-22">
      <h2 class="section__title">
        <span data-show="en">How I Work</span>
        <span data-show="de">Wie ich arbeite</span>
      </h2>
      <p class="section__lead">
        <span data-show="en">A calm workflow for turning ideas into polished digital products: clear decisions, focused execution and careful finishing.</span>
        <span data-show="de">Ein ruhiger Workflow für digitale Produkte: klare Entscheidungen, fokussierte Umsetzung und sauberes Finishing.</span>
      </p>
    </div>

    <div class="work-panel">
      <div class="work-panel__intro" data-parallax-y="14">
        <span class="eyebrow">Process</span>
        <p data-show="en">I keep projects structured from the first idea to the final polish, so design and code feel like one clean system.</p>
        <p data-show="de">Ich halte Projekte von der ersten Idee bis zum letzten Detail strukturiert, damit Design und Code wie ein sauberes System wirken.</p>
      </div>

      <ol class="work-steps">
        <li class="work-step" data-parallax-y="-8">
          <span class="work-step__num">01</span>
          <strong data-show="en">Plan</strong><strong data-show="de">Planen</strong>
          <p data-show="en">Define the goal, structure the idea and choose the right tools before writing code.</p>
          <p data-show="de">Ziel definieren, Idee strukturieren und passende Tools wählen, bevor ich Code schreibe.</p>
        </li>
        <li class="work-step" data-parallax-y="8">
          <span class="work-step__num">02</span>
          <strong data-show="en">Design</strong><strong data-show="de">Designen</strong>
          <p data-show="en">Create clean layouts, user-friendly flows and visual systems that match the project.</p>
          <p data-show="de">Klare Layouts, einfache Abläufe und visuelle Systeme erstellen, die zum Projekt passen.</p>
        </li>
        <li class="work-step" data-parallax-y="-6">
          <span class="work-step__num">03</span>
          <strong data-show="en">Build</strong><strong data-show="de">Entwickeln</strong>
          <p data-show="en">Write structured code, connect logic and turn the concept into a working product.</p>
          <p data-show="de">Strukturierten Code schreiben, Logik verbinden und das Konzept in ein funktionierendes Produkt umsetzen.</p>
        </li>
        <li class="work-step" data-parallax-y="10">
          <span class="work-step__num">04</span>
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
