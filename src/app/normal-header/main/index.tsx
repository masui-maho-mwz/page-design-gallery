'use client';

import { LeftIcons } from '@/app/normal-header/main/left-icons';
import { MainContents } from '@/app/normal-header/main/main-contents';
import { RightSidePanel } from '@/app/normal-header/main/right-side-panel';
import { useState } from 'react';
import styles from './styles.module.css';

export const Main = () => {
  const [activeSection, setActiveSection] = useState('');

  return (
    <main className={styles.root}>
      <LeftIcons />
      <RightSidePanel activeSection={activeSection} />
      <MainContents setActiveSection={setActiveSection} />
    </main>
  );
};
