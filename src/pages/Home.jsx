import Hero from '../components/home/Hero.jsx';
import FeaturedProjects from '../components/home/FeaturedProjects.jsx';
import AboutSection from '../components/home/AboutSection.jsx';
import ContactPreview from '../components/home/ContactPreview.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <AboutSection />
      <ContactPreview />
    </>
  );
}
