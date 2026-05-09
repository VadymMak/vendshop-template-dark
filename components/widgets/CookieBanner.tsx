'use client';
import { useEffect, useState } from 'react';
import styles from './CookieBanner.module.css';

const COOKIE_KEY = 'cookie_consent';
const COOKIE_DAYS = 365;

function getCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;
  return document.cookie.split('; ').find(r => r.startsWith(name + '='))?.split('=')[1];
}

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`;
}

interface CookieBannerProps {
  message: string;
  accept: string;
  reject: string;
  learnMore: string;
  settings: string;
}

export default function CookieBanner({ message, accept, reject, learnMore, settings }: CookieBannerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getCookie(COOKIE_KEY)) setVisible(true);
  }, []);

  useEffect(() => {
    const handler = () => setVisible(true);
    window.addEventListener('open-cookie-banner', handler);
    return () => window.removeEventListener('open-cookie-banner', handler);
  }, []);

  const handleAccept = () => {
    setCookie(COOKIE_KEY, 'accepted', COOKIE_DAYS);
    setVisible(false);
  };

  const handleReject = () => {
    setCookie(COOKIE_KEY, 'rejected', COOKIE_DAYS);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <p className={styles.message}>{message}</p>
        <div className={styles.actions}>
          <button className={styles.accept} onClick={handleAccept}>{accept}</button>
          <button className={styles.reject} onClick={handleReject}>{reject}</button>
          <a href="/cookies" className={styles.learnMore}>{learnMore}</a>
        </div>
      </div>
    </div>
  );
}
