import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/config';
import { NAV_ITEMS, CONTACT_ITEMS, IMAGES } from '@/lib/constants';
import { t } from '@/lib/get-ui-text';
import styles from './Footer.module.css';

export default function Footer() {
  const ui = t();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        {/* Brand */}
        <div className={styles.brand}>
          {IMAGES.logo ? (
            <Image
              src={IMAGES.logo}
              alt={SITE_CONFIG.name}
              width={140}
              height={48}
              className={styles.logoImg}
              style={{ objectFit: 'contain' }}
            />
          ) : (
            <div className={styles.logo}>{SITE_CONFIG.name}</div>
          )}
          <p className={styles.tagline}>{SITE_CONFIG.tagline}</p>
          <p className={styles.copy}>
            {ui.footer.poweredBy}{' '}
            <a href="https://vendshop.sk" target="_blank" rel="noopener noreferrer" className={styles.vsLink}>
              VendShop
            </a>
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className={styles.colTitle}>{ui.footer.nav}</h4>
          <nav className={styles.links}>
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className={styles.link}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className={styles.colTitle}>{ui.footer.contact}</h4>
          <div className={styles.contactList}>
            {CONTACT_ITEMS.slice(0, 3).map((item, i) => (
              <div key={i} className={styles.contactRow}>
                <span>{item.icon}</span>
                <span>{item.lines[0]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div>
          <h4 className={styles.colTitle}>{ui.footer.booking}</h4>
          <p className={styles.ctaText}>{ui.footer.bookingText}</p>
          <a href="#booking" className={`btn btn--primary ${styles.ctaBtn}`}>
            {ui.footer.bookBtn}
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <span>© {year} {SITE_CONFIG.name}. {ui.footer.rights}</span>
          <div className={styles.bottomLinks}>
            <a href="#">{ui.footer.privacy}</a>
            <a href="#">{ui.footer.cookies}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
