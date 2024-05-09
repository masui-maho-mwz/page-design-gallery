import styles from './styles.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <nav>
        <ul className={styles.menu}>
          <li>
            <button className={styles.login}>ログイン</button>
          </li>
          <li>
            <button className={styles.signup}>新規登録</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
