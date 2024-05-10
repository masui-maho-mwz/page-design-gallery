import styles from './styles.module.css';

export const Info = () => {
  return (
    <div>
      <section className={styles.section}> 執筆者情報</section>
      <section className={styles.section}>広告</section>
      <section className={styles.section}>トレンド記事</section>
      <section className={styles.section}>リンク記事</section>
      <section className={styles.section}>コメント</section>
      <section className={styles.section}>キャンペーン情報</section>
    </div>
  );
};
