import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/config';
import { IMAGES, HERO } from '@/lib/constants';
import { t } from '@/lib/get-ui-text';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const ui = t();
  return (
    <section id="hero" className={styles.hero}>
      {/* Background image */}
      <div className={styles.bg}>
        <Image
          src={IMAGES.hero}
          alt={SITE_CONFIG.name}
          fill
          priority
          style={{ objectFit: 'cover' }}
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={`container ${styles.content}`}>
        <div className={styles.panel}>
          <p className={styles.eyebrow}>{SITE_CONFIG.name}</p>
          <h1 className={styles.title}>{HERO.title || SITE_CONFIG.tagline}</h1>
          {HERO.subtitle && <p className={styles.sub}>{HERO.subtitle}</p>}
          <div className={styles.ctas}>
            <a href="#booking" className="btn btn--primary">{ui.hero.cta1}</a>
            <a href="#services" className="btn btn--outline-light">{ui.hero.cta2}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
