import { WHY_ITEMS } from '@/lib/constants';
import { t } from '@/lib/get-ui-text';
import styles from './WhyUsSection.module.css';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

export default function WhyUsSection() {
  const ui = t();
  return (
    <section id="why-us" className={`section ${styles.section}`}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">{ui.whyUs.title}</h2>
            <p className="section-subtitle">{ui.whyUs.subtitle}</p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {WHY_ITEMS.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 100} className={`card ${styles.card}`}>
              <div className={styles.icon}>{item.icon}</div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
