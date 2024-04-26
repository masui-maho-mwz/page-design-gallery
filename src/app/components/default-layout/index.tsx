import styles from './styles.module.css';

type Props = {
  children: React.ReactNode;
};

export const DefaultLayout = ({ children }: Props) => {
  return (
    <div className={styles.root}>
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
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.copyright}>Copyright © All Rights Reserved.</div>
      </footer>
    </div>
  );
};
