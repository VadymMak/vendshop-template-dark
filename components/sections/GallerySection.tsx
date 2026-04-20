import Image from 'next/image';
import { IMAGES } from '@/lib/constants';
import { t } from '@/lib/get-ui-text';
import styles from './GallerySection.module.css';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

function getGridClass(count: number): string {
  if (count === 1) return styles.grid1;
  if (count === 2) return styles.grid2;
  if (count === 3) return styles.grid3;
  if (count === 4) return styles.grid4;
  if (count === 5) return styles.grid5;
  if (count === 6) return styles.grid6;
  return styles.grid7plus;
}

export default function GallerySection() {
  const ui = t();
  const photos = IMAGES.gallery;

  if (!photos.length) return null;

  const gridClass = getGridClass(photos.length);

  return (
    <section id="gallery" className={`section section--alt ${styles.section}`}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">{ui.gallery.title}</h2>
            <p className="section-subtitle">{ui.gallery.subtitle}</p>
          </div>
        </ScrollReveal>

        <div className={`${styles.grid} ${gridClass}`}>
          {photos.map((src: string, i: number) => (
            <ScrollReveal
              key={i}
              delay={i * 80}
              className={`${styles.item} ${i === 0 ? styles.featured : ''}`}
            >
              <Image
                src={src}
                alt={`${ui.gallery.title} ${i + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
