"use client";
import { useEffect, useState } from "react";
import styles from "./CookieBanner.module.css";

const COOKIE_KEY = "cookie_consent";
const COOKIE_DAYS = 365;

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name: string, value: string, days: number) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + expires.toUTCString() + ";path=/;SameSite=Lax";
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
    window.addEventListener("open-cookie-banner", handler);
    return () => window.removeEventListener("open-cookie-banner", handler);
  }, []);

  function handleAccept() {
    setCookie(COOKIE_KEY, "accepted", COOKIE_DAYS);
    setVisible(false);
  }

  function handleReject() {
    setCookie(COOKIE_KEY, "rejected", COOKIE_DAYS);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className={styles.banner} role="dialog" aria-label={settings}>
      <div className={styles.inner}>
        <p className={styles.message}>
          {message}{" "}
          <a href="/datenschutz" className={styles.link}>{learnMore}</a>
        </p>
        <div className={styles.actions}>
          <button className={styles.reject} onClick={handleReject}>{reject}</button>
          <button className={styles.accept} onClick={handleAccept}>{accept}</button>
        </div>
      </div>
    </div>
  );
}
