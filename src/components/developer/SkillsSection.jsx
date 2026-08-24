const ICONS = '/images/icons';

const skills = [
  { name: 'HTML', cap: 'Markup', icon: 'html5' },
  { name: 'CSS', cap: 'Styling', icon: 'css3' },
  { name: 'JavaScript', cap: 'Frontend / DOM', icon: 'javascript' },
  { name: 'React', cap: 'UI Library', icon: 'react' },
  { name: 'Next.js', cap: 'React Framework', icon: 'nextjs', invert: true },
  { name: 'Python', cap: 'Tooling / Backend', icon: 'python' },
  { name: 'SQL', cap: 'Data', icon: 'mysql' },
  { name: 'Java', cap: 'OOP', icon: 'java' },
];

export default function SkillsSection() {
  return (
    <section className="skills reveal">
      <div className="shell">
        <div className="skills__head" data-parallax-y="-32" data-parallax-rx="-5">
          <span className="eyebrow">02 / Stack</span>
          <h2 className="skills__title">
            <span data-show="en">Tools I use.</span>
            <span data-show="de">Tools, die ich nutze.</span>
          </h2>
        </div>

        <div className="skills__grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <img
                className={skill.invert ? 'skill-card__icon--invert' : undefined}
                alt={skill.name}
                src={`${ICONS}/${skill.icon}.svg`}
              />
              <span className="skill-card__name">{skill.name}</span>
              <span className="skill-card__cap">{skill.cap}</span>
            </div>
          ))}
        </div>

        <div className="skills__extra">
          <span><strong data-show="en">Also:</strong><strong data-show="de">Auch:</strong></span>
          <span className="chip">Git</span>
          <span className="chip">Docker</span>
        </div>
        <div className="skills__extra">
          <span>
            <strong data-show="en">Video &amp; Photo Editing:</strong>
            <strong data-show="de">Video- &amp; Bildbearbeitung:</strong>
          </span>
          <span className="chip">Photoshop</span>
          <span className="chip">DaVinci Resolve</span>
          <span className="chip">Lightroom</span>
          <span className="chip">InDesign</span>
          <span className="chip">Premiere</span>
        </div>
      </div>
    </section>
  );
}
