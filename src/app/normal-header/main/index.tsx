import { LeftIcons } from '@/app/normal-header/main/left-icons';
import { MainContents } from '@/app/normal-header/main/main-contents';
import { RightSidePanel } from '@/app/normal-header/main/right-side-panel';
import styles from './styles.module.css';

export const Main = () => {
  return (
    <main className={styles.root}>
      <LeftIcons />
      <RightSidePanel />
      <MainContents />
    </main>
  );
};
