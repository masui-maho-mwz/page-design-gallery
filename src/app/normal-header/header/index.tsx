import { AbstractLogo } from '@/app/components/elements/logos/tech-quest-logo';
import SearchIcon from '@mui/icons-material/Search';
import styles from './styles.module.css';

export const Header = () => {
  return (
    <header className={styles.root}>
      <div>
        <AbstractLogo />
      </div>
      <div className={styles.menu}>
        <form action="" aria-label="記事、質問を検索" className={styles.form}>
          <span className={styles.icon}>
            <SearchIcon />
          </span>
          <input type="search" placeholder="記事、質問を検索" className={styles.input}></input>
        </form>
        <a href="" className={styles.login}>
          ログイン
        </a>
        <a href="" className={styles.registrations}>
          新規登録
        </a>
      </div>
    </header>
  );
};
