import { useCallback, useMemo, useRef, useState } from 'react';
import GalleryHero from '../components/gallery/GalleryHero.jsx';
import GalleryGrid from '../components/gallery/GalleryGrid.jsx';
import ImageLightbox from '../components/gallery/ImageLightbox.jsx';
import { gallerySections } from '../data/photos.js';

export default function Gallery() {
  // One flat list in render order, so a card's position in the grid is the
  // same number the viewer navigates by.
  const photos = useMemo(() => gallerySections.flatMap((section) => section.photos), []);

  const [index, setIndex] = useState(null);
  const triggerRef = useRef(null);

  const open = useCallback((next, element) => {
    triggerRef.current = element;
    setIndex(next);
  }, []);

  const close = useCallback(() => {
    setIndex(null);
    // Hand focus back to the thumbnail that opened the viewer. preventScroll
    // keeps the page from jumping while the dialog is still fading out.
    triggerRef.current?.focus({ preventScroll: true });
  }, []);

  const prev = useCallback(() => {
    setIndex((current) => (current === null ? null : (current - 1 + photos.length) % photos.length));
  }, [photos.length]);

  const next = useCallback(() => {
    setIndex((current) => (current === null ? null : (current + 1) % photos.length));
  }, [photos.length]);

  return (
    <>
      <GalleryHero />
      <GalleryGrid onOpen={open} />
      <ImageLightbox
        photos={photos}
        index={index}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </>
  );
}
