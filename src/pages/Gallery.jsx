import GalleryHero from '../components/gallery/GalleryHero.jsx';
import GalleryGrid from '../components/gallery/GalleryGrid.jsx';
import ImageLightbox from '../components/gallery/ImageLightbox.jsx';

export default function Gallery() {
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
      <ImageLightbox />
    </>
  );
}
