import { CONTACT_ITEMS, FAQ_ITEMS } from '@/lib/constants';
import { t } from '@/lib/get-ui-text';
import styles from './ContactSection.module.css';
import FaqAccordion from './FaqAccordion';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

export default function ContactSection() {
  const ui = t();
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.6!2d18.74!3d49.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDEzJzEyLjAiTiAxOMKwNDQnMjQuMCJF!5e0!3m2!1ssk!2ssk!4v1680000000000!5m2!1ssk!2ssk"
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
