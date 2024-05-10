'use client';

import { Title } from '@/app/normal-header/main/main-contents/article/title';
import { useEffect, useRef } from 'react';
import styles from './styles.module.css';

type Props = {
  setActiveSection: (section: string) => void;
};

export const Article = ({ setActiveSection }: Props) => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      let activeSection = '';

      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + currentScrollPosition;
          if (sectionTop <= currentScrollPosition && sectionTop + section.offsetHeight > currentScrollPosition) {
            activeSection = `section${index + 1}`;
          }
        }
      });

      setActiveSection(activeSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  return (
    <div className={styles.root}>
      <Title />
      <section
        className={styles.section}
        data-section="section1"
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
      >
        セクション１
        <div className={styles.text}>wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</div>
      </section>
      <section
        className={styles.section}
        data-section="section2"
        ref={(el) => {
          sectionRefs.current[1] = el;
        }}
      >
        セクション２
        <div className={styles.text}>wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</div>
        <div className={styles.sub}>
          サブセクション2-1
          <div className={styles.text}>wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</div>
        </div>
      </section>
      <section
        className={styles.section}
        data-section="section3"
        ref={(el) => {
          sectionRefs.current[2] = el;
        }}
      >
        セクション３
        <div className={styles.text}>wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</div>
      </section>
      <section
        className={styles.section}
        data-section="section4"
        ref={(el) => {
          sectionRefs.current[3] = el;
        }}
      >
        セクション４
        <div className={styles.text}>wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</div>
        <div className={styles.sub}>
          サブセクション4-1
          <div className={styles.text}>wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</div>
        </div>
        <div className={styles.sub}>
          サブセクション4-2
          <div className={styles.text}>wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</div>
        </div>
        <div className={styles.sub}>
          サブセクション4-3
          <div className={styles.text}>wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</div>
        </div>
        <div className={styles.sub}>
          サブセクション4-4
          <div className={styles.text}>wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</div>
        </div>
      </section>
      <section
        className={styles.section}
        data-section="section5"
        ref={(el) => {
          sectionRefs.current[4] = el;
        }}
      >
        セクション５
      </section>
    </div>
  );
};
