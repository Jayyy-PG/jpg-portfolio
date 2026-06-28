const markup = `<section class="skills reveal">
  <div class="shell">
    <div class="skills__head" data-parallax-y="-32" data-parallax-rx="-5">
      <span class="eyebrow">02 / Stack</span>
      <h2 class="skills__title">
        <span data-show="en">Tools I use.</span>
        <span data-show="de">Tools, die ich nutze.</span>
      </h2>
    </div>

    <div class="skills__grid">
      <div class="skill-card"><img alt="HTML" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" /><span class="skill-card__name">HTML</span><span class="skill-card__cap">Markup</span></div>
      <div class="skill-card"><img alt="CSS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" /><span class="skill-card__name">CSS</span><span class="skill-card__cap">Styling</span></div>
      <div class="skill-card"><img alt="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" /><span class="skill-card__name">JavaScript</span><span class="skill-card__cap">Frontend / DOM</span></div>
      <div class="skill-card"><img alt="React" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /><span class="skill-card__name">React</span><span class="skill-card__cap">UI Library</span></div>
      <div class="skill-card"><img class="skill-card__icon--invert" alt="Next.js" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" /><span class="skill-card__name">Next.js</span><span class="skill-card__cap">React Framework</span></div>
      <div class="skill-card"><img alt="Python" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" /><span class="skill-card__name">Python</span><span class="skill-card__cap">Tooling / Backend</span></div>
      <div class="skill-card"><img alt="SQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" /><span class="skill-card__name">SQL</span><span class="skill-card__cap">Data</span></div>
      <div class="skill-card"><img alt="Java" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" /><span class="skill-card__name">Java</span><span class="skill-card__cap">OOP</span></div>
    </div>

    <div class="skills__extra">
      <span><strong data-show="en">Also:</strong><strong data-show="de">Auch:</strong></span>
      <span class="chip">Git</span>
      <span class="chip">Docker</span>
    </div>
    <div class="skills__extra">
      <span><strong data-show="en">Video &amp; Photo Editing:</strong><strong data-show="de">Video- &amp; Bildbearbeitung:</strong></span>
      <span class="chip">Photoshop</span>
      <span class="chip">DaVinci Resolve</span>
      <span class="chip">Lightroom</span>
      <span class="chip">InDesign</span>
      <span class="chip">Premiere</span>
    </div>
  </div>
</section>`;

export default function SkillsSection() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
