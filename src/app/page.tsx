import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.main}>main</div>
      <div className={styles.side}>side</div>
    </div>
  );
}
