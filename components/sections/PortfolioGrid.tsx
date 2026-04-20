'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IMAGES } from '@/lib/constants';
import styles from './PortfolioGrid.module.css';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

export default function PortfolioGrid() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  const allImages = [IMAGES.hero, IMAGES.about, ...IMAGES.gallery];

  return (
    <section id="portfolio" className={`section section--alt ${styles.section}`}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">
              Naše <span>Práce</span>
            </h2>
            <p className="section-subtitle">Výber z našich realizovaných projektov.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100} className={styles.grid}>
          {allImages.map((src: string, i: number) => (
            <button
              key={i}
              className={styles.item}
              onClick={() => setLightbox(src)}
              aria-label={`Otvoriť obrázok ${i + 1}`}
            >
              <Image
                src={src}
                alt={`Portfolio ${i + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className={styles.overlay}>
                <span className={styles.zoomIcon}>+</span>
              </div>
            </button>
          ))}
        </ScrollReveal>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)}>
          <button className={styles.close} aria-label="Zavrieť">✕</button>
          <div className={styles.lightboxImg}>
            <Image
              src={lightbox}
              alt="Portfolio detail"
              fill
              style={{ objectFit: 'contain' }}
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}