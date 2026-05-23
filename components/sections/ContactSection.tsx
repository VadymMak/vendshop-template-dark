import { CONTACT_ITEMS, FAQ_ITEMS } from '@/lib/constants';
import { SITE_CONFIG } from '@/lib/config';
import { t } from '@/lib/get-ui-text';
import styles from './ContactSection.module.css';
import FaqAccordion from './FaqAccordion';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

export default function ContactSection() {
  const ui = t();
  const lang = SITE_CONFIG.language || 'sk';

  // Build map URL from the address ContactItem (📍) so it geocodes the real business
  // address instead of using hardcoded coordinates. Falls back to a blank map if empty.
  const addressItem = CONTACT_ITEMS.find((item) => item.icon === '📍');
  const addressQuery = addressItem?.lines.filter(Boolean).join(', ') ?? '';
  const mapSrc = addressQuery
    ? `https://maps.google.com/maps?q=${encodeURIComponent(addressQuery)}&output=embed&hl=${lang}`
    : `https://www.google.com/maps/embed?pb=!1m2!1ssk!2ssk&hl=${lang}`;

  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">{ui.contact.title}</h2>
            <p className="section-subtitle">{ui.contact.subtitle}</p>
          </div>
        </ScrollReveal>

        <div className={styles.layout}>
          {/* Contact info */}
          <div className={styles.info}>
            <div className={styles.cards}>
              {CONTACT_ITEMS.map((item, i) => (
                <ScrollReveal key={i} delay={i * 100} className={`card ${styles.card}`}>
                  <div className={styles.icon}>{item.icon}</div>
                  <div>
                    <div className={styles.title}>{item.title}</div>
                    {item.lines.map((line: string, j: number) => (
                      <div key={j} className={styles.line}>
                        {line}
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Map */}
            <ScrollReveal delay={300} className={styles.mapWrap}>
              <iframe
                src={mapSrc}
                width="100%"
                height="260"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)', borderRadius: 'var(--radius-md)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa"
              />
            </ScrollReveal>
          </div>

          {/* FAQ */}
          <ScrollReveal delay={200} animation="fadeLeft">
            <h3 className={styles.faqTitle}>{ui.faq.title}</h3>
            <FaqAccordion items={FAQ_ITEMS} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
