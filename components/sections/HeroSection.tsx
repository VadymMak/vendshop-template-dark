import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/config';
import { IMAGES, HERO } from '@/lib/constants';
import { t } from '@/lib/get-ui-text';
import styles from './HeroSection.module.css';

// Default when HERO.layout is missing (legacy constants.ts that predates the
// layout field). Match the template's historical visual identity.
const DEFAULT_LAYOUT: 'split' | 'full' = 'full';

export default function HeroSection() {
  const ui = t();
  const layout: 'split' | 'full' = HERO.layout ?? DEFAULT_LAYOUT;

  if (layout === 'full') {
    return (
      <section id="hero" className={styles.heroFull}>
        <div className={styles.heroFullBg}>
          <Image
            src={IMAGES.hero}
            alt={SITE_CONFIG.name}
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
        </div>
        <div className={styles.heroFullOverlay} />
        <div className={`container ${styles.heroFullContent}`}>
          <p className={styles.eyebrow}>{SITE_CONFIG.name}</p>
          <h1 className={styles.title}>{HERO.title || SITE_CONFIG.tagline}</h1>
          {HERO.subtitle && <p className={styles.sub}>{HERO.subtitle}</p>}
          <div className={styles.ctas}>
            <a href="#booking" className="btn btn--primary">{ui.hero.cta1}</a>
            <a href="#services" className="btn btn--outline-light">{ui.hero.cta2}</a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="hero" className={styles.heroSplit}>
      <div className={styles.heroSplitImage}>
        <Image
          src={IMAGES.hero}
          alt={SITE_CONFIG.name}
          fill
          priority
          style={{ objectFit: 'cover' }}
          sizes="50vw"
        />
      </div>
      <div className={styles.heroSplitText}>
        <p className={styles.eyebrow}>{SITE_CONFIG.name}</p>
        <h1 className={styles.title}>{HERO.title || SITE_CONFIG.tagline}</h1>
        {HERO.subtitle && <p className={styles.sub}>{HERO.subtitle}</p>}
        <div className={styles.ctas}>
          <a href="#booking" className="btn btn--primary">{ui.hero.cta1}</a>
          <a href="#services" className="btn btn--outline">{ui.hero.cta2}</a>
        </div>
      </div>
    </section>
  );
}
