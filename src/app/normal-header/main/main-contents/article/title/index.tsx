import styles from './styles.module.css';

export const Title = () => {
  return (
    <div className={styles.root}>
      <div className={styles.name}>執筆者名</div>
      <h1 className={styles.title}>記事タイトル</h1>
      <ul className={styles.relation}>
        <li>
          <a href="" className={styles.link}>
            JavaScript
          </a>
        </li>
        <li>
          <a href="" className={styles.link}>
            Node.js
          </a>
        </li>
      </ul>
      <div className={styles.date}>
        <span>最終更新日 2023年05月23日</span>
        <span>投稿日 2020年10月15日</span>
      </div>
    </div>
  );
};
