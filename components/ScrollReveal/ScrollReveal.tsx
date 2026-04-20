'use client';
import type { ReactNode, CSSProperties } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './ScrollReveal.module.css';

type Animation = 'fadeUp' | 'fadeIn' | 'fadeLeft' | 'fadeRight' | 'scaleIn';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: Animation;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  as?: 'div' | 'section' | 'li';
}

export default function ScrollReveal({
  children,
  animation = 'fadeUp',
  delay = 0,
  className = '',
  style,
  as: Tag = 'div',
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={`${styles.reveal} ${styles[animation]} ${isVisible ? styles.visible : ''} ${className}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
    >
      {children}
    </Tag>
  );
}
