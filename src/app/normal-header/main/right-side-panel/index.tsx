'use client';

import { BannerAdArea } from '@/app/normal-header/main/right-side-panel/banner-ad-area';
import { ContentsNav } from '@/app/normal-header/main/right-side-panel/contents-nav';
import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

export const RightSidePanel = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [bannerBottom, setBannerBottom] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setBannerBottom(rect.bottom);
      setIsFixed(rect.bottom < 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.root}>
      <div ref={ref}>
        <BannerAdArea />
        <BannerAdArea />
      </div>
      <div className={isFixed ? styles.navFixed : ''} style={{ top: isFixed ? 0 : bannerBottom }}>
        <ContentsNav />
      </div>
    </div>
  );
};
