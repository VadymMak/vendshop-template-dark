import { STATS } from '@/lib/constants';
import { t } from '@/lib/get-ui-text';
import styles from './StatsBar.module.css';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

export default function StatsBar() {
  const ui = t();
  const statLabels = [ui.stats.years, ui.stats.clients, ui.stats.rating, ui.stats.guarantee];

  return (
    <section className={styles.bar}>
      <div className={`container ${styles.grid}`}>
        {STATS.map((stat, i) => (
          <ScrollReveal key={i} delay={i * 100} className={styles.item}>
            <span className={styles.value}>{stat.value}</span>
            <span className={styles.label}>{statLabels[i] ?? stat.label}</span>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
