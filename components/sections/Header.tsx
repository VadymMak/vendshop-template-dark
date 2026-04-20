'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { SITE_CONFIG } from '@/lib/config';
import { NAV_ITEMS, IMAGES } from '@/lib/constants';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 40);
      if (currentY < 64) setVisible(true);
      else if (currentY > lastScrollY.current + 5) setVisible(false);
      else if (currentY < lastScrollY.current - 5) setVisible(true);
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMenu();
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${visible ? '' : styles.hidden}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="#hero" className={styles.logoLink} onClick={(e) => handleNavClick(e, '#hero')}>
          {IMAGES.logo ? (
            <Image
              src={IMAGES.logo}
              alt={SITE_CONFIG.name}
              width={120}
              height={40}
              className={styles.logoImg}
              style={{ objectFit: 'contain' }}
            />
          ) : (
            <span className={styles.logoText}>{SITE_CONFIG.name}</span>
          )}
        </a>

        {/* Desktop nav */}
        <nav className={styles.nav}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.navLink}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA + Burger */}
        <div className={styles.actions}>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn--primary ${styles.ctaBtn}`}
          >
            WhatsApp
          </a>
          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className={styles.mobileMenu}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.mobileLink}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn--primary ${styles.mobileCta}`}
          >
            WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
