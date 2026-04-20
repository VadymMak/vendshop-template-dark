'use client';

import { useState } from 'react';
import { SERVICE_CATEGORIES } from '@/lib/constants';
import { t } from '@/lib/get-ui-text';
import styles from './ServicesSection.module.css';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

export default function ServicesSection() {
  const ui = t();
  const [activeTab, setActiveTab] = useState(SERVICE_CATEGORIES[0]?.id ?? '');

  const activeCategory = SERVICE_CATEGORIES.find((c) => c.id === activeTab);

  return (
    <section id="services" className={`section section--alt ${styles.section}`}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">{ui.services.title}</h2>
            <p className="section-subtitle">{ui.services.subtitle}</p>
          </div>
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal delay={100} className={styles.tabs}>
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.tab} ${activeTab === cat.id ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </ScrollReveal>

        {/* Cards */}
        <ScrollReveal delay={200} className={styles.grid}>
          {activeCategory?.items.map((item) => (
            <div key={item.id} className={`card ${styles.card}`}>
              <div className={styles.icon}>{item.icon}</div>
              <h3 className={styles.name}>{item.name}</h3>
              <p className={styles.desc}>{item.description}</p>
              <span className={styles.price}>{item.price}</span>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
