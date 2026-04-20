import { SCHEDULE } from '@/lib/constants';
import { t } from '@/lib/get-ui-text';
import styles from './ScheduleSection.module.css';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

export default function ScheduleSection() {
  const ui = t();
  return (
    <section id="schedule" className={`section section--alt ${styles.section}`}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">{ui.schedule.title}</h2>
            <p className="section-subtitle">{ui.schedule.subtitle}</p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {SCHEDULE.map((day, i) => (
            <ScrollReveal key={day.day} delay={i * 80} className={`card ${styles.day}`}>
              <h3 className={styles.dayName}>{day.day}</h3>
              <div className={styles.entries}>
                {day.entries.map((entry, j: number) => (
                  <div key={j} className={styles.entry}>
                    <span className={styles.time}>{entry.time}</span>
                    <div className={styles.entryInfo}>
                      <span className={styles.className}>{entry.name}</span>
                      <span className={styles.instructor}>{entry.instructor}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
