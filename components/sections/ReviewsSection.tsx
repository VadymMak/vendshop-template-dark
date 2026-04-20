import { REVIEWS } from '@/lib/constants';
import { t } from '@/lib/get-ui-text';
import styles from './ReviewsSection.module.css';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

export default function ReviewsSection() {
  const ui = t();
  return (
    <section id="reviews" className={`section ${styles.section}`}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">{ui.reviews.title}</h2>
            <p className="section-subtitle">{ui.reviews.subtitle}</p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {REVIEWS.map((review, i) => (
            <ScrollReveal key={review.id} delay={i * 100} className={`card ${styles.card}`}>
              <div className="stars">{'★'.repeat(review.rating)}</div>
              <p className={styles.text}>&ldquo;{review.text}&rdquo;</p>
              <div className={styles.footer}>
                <div className={styles.avatar}>{review.initial}</div>
                <div>
                  <div className={styles.name}>{review.name}</div>
                  <div className={styles.detail}>{review.detail}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
