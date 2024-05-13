import styles from './styles.module.css';

export const Navigation = () => {
  return (
    <div className={styles.items}>
      <a href="" className={styles.item}>
        トレンド
      </a>
      <a href="" className={styles.item}>
        質問
      </a>
      <a href="" className={styles.item}>
        公式イベント
      </a>
      <a href="" className={styles.item}>
        公式コラム
      </a>
      <a href="" className={styles.item}>
        キャリア・転職
        <span className={styles.chip}>NEW</span>
      </a>
      <a href="" className={styles.item}>
        Organization
      </a>
    </div>
  );
};
