const ICONS = '/images/icons';

/**
 * Grouped by what the tool is actually for, not rendered as one card per
 * logo. Technical entries carry a small mark before the name; the mark is
 * decorative, since the name next to it is the visible label.
 *
 * The creative row is deliberately text only. Adobe does not permit third
 * parties to use its product icons, and an imitation would be worse than
 * none — so those tools are named in full instead.
 */
const groups = [
  {
    key: 'development',
    label: { en: 'Development', de: 'Entwicklung' },
    items: [
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Python', icon: 'python' },
      { name: 'Java', icon: 'java' },
      { name: 'SQL', icon: 'mysql' },
    ],
  },
  {
    key: 'web',
    label: { en: 'Web', de: 'Web' },
    items: [
      { name: 'HTML', icon: 'html5' },
      { name: 'CSS', icon: 'css3' },
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs', invert: true },
    ],
  },
  {
    key: 'tools',
    label: { en: 'Tools', de: 'Tools' },
    items: [
      { name: 'Git', icon: 'git' },
      { name: 'Docker', icon: 'docker' },
    ],
  },
  {
    key: 'creative',
    label: { en: 'Creative', de: 'Gestaltung' },
    items: [
      { name: 'Adobe Photoshop' },
      { name: 'Adobe Lightroom' },
      { name: 'Adobe InDesign' },
      { name: 'DaVinci Resolve' },
      { name: 'Adobe Premiere Pro' },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="skills reveal">
      <div className="shell">
        <div className="skills__head" data-parallax-y="-10">
          <span className="eyebrow">02 / Stack</span>
          <h2 className="skills__title">
            <span data-show="en">Tools I use.</span>
            <span data-show="de">Tools, die ich nutze.</span>
          </h2>
        </div>

        <dl className="stack-list">
          {groups.map((group) => (
            <div className="stack-row" key={group.key}>
              <dt className="stack-row__label">
                <span data-show="en">{group.label.en}</span>
                <span data-show="de">{group.label.de}</span>
              </dt>
              <dd className="stack-row__items">
                {group.items.map((item) => (
                  <span className="stack-item" key={item.name}>
                    {item.icon && (
                      <img
                        className={item.invert ? 'stack-item__icon stack-item__icon--invert' : 'stack-item__icon'}
                        src={`${ICONS}/${item.icon}.svg`}
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                    {item.name}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
