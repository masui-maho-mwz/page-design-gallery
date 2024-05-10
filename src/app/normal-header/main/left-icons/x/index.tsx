import styles from './styles.module.css';

export const X = () => {
  return (
    <button aria-label="X(Twitter)でシェア" title="ポスト" type="button" className={styles.root}>
      <svg viewBox="0 0 20 20" className={styles.svg}>
        <path d="m11.68 8.62 6.55-7.62h-1.55l-5.69 6.62-4.55-6.62h-5.25l6.88 10.01-6.88 7.99h1.55l6.01-6.99 4.8 6.99h5.24l-7.13-10.38zm-2.13 2.47-.7-1-5.54-7.92h2.39l4.47 6.4.7 1 5.82 8.32h-2.39l-4.75-6.79z"></path>
      </svg>
    </button>
  );
};
