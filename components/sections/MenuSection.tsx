'use client';

import { useState } from 'react';
import { MENU_CATEGORIES } from '@/lib/constants';
import { t } from '@/lib/get-ui-text';
import styles from './MenuSection.module.css';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

export default function MenuSection() {
  const ui = t();
  const [activeTab, setActiveTab] = useState(MENU_CATEGORIES[0]?.id ?? '');

  const activeCategory = MENU_CATEGORIES.find((c) => c.id === activeTab);

  return (
    <section id="menu" className={`section section--alt ${styles.section}`}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">{ui.menu.title}</h2>
            <p className="section-subtitle">{ui.menu.subtitle}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100} className={styles.tabs}>
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.tab} ${activeTab === cat.id ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </ScrollReveal>

        <ScrollReveal delay={200} className={styles.list}>
          {activeCategory?.items.map((item) => (
            <div key={item.id} className={`card ${styles.item}`}>
              <div className={styles.info}>
                <h3 className={styles.name}>{item.name}</h3>
                <p className={styles.desc}>{item.description}</p>
              </div>
              <span className={styles.price}>{item.price}</span>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
