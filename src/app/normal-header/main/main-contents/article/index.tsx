import { Title } from '@/app/normal-header/main/main-contents/article/title';
import styles from './styles.module.css';

export const Article = () => {
  return (
    <div className={styles.root}>
      <Title />
      <section className={styles.section}>
        セクション１
        <div className={styles.text}>wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</div>
      </section>
      <section className={styles.section}>
        セクション２
        <div className={styles.text}>wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</div>
        <div className={styles.sub}>
          サブセクション2-1
          <div className={styles.text}>wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</div>
        </div>
      </section>
      <section className={styles.section}>
        セクション３
        <div className={styles.text}>wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</div>
      </section>
      <section className={styles.section}>
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
      <section className={styles.section}>セクション５</section>
    </div>
  );
};
