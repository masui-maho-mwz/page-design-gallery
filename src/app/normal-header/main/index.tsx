import { LeftIcons } from '@/app/normal-header/main/left-icons';
import styles from './styles.module.css';

export const Main = () => {
  return (
    <main className={styles.root}>
      <LeftIcons />
      <div className={styles.side}>side</div>
      <div className={styles.article}>
        <section className={styles.section}>Section 1</section>
        <section className={styles.section}>Section 2</section>
        <section className={styles.section}>Section 3</section>
        <section className={styles.section}>Section 4</section>
      </div>
    </main>
  );
};
