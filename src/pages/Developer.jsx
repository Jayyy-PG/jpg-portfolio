import DeveloperHero from '../components/developer/DeveloperHero.jsx';
import SkillsSection from '../components/developer/SkillsSection.jsx';
import ProjectsSection from '../components/developer/ProjectsSection.jsx';
import TechStackSection from '../components/developer/TechStackSection.jsx';

export default function Developer() {
  return (
    <>
      <DeveloperHero />
      <SkillsSection />
      <ProjectsSection />
      <TechStackSection />
    </>
  );
}
