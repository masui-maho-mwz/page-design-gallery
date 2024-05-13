import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { AbstractLogo } from '@/app/components/elements/logos/tech-quest-logo';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ListIcon from '@mui/icons-material/List';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SearchIcon from '@mui/icons-material/Search';
import styles from './styles.module.css';

export const Header = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>
        <a href="" className={styles.logo}>
          <AbstractLogo />
        </a>
        <a href="" className={styles.text}>
          よく生きる
        </a>
      </h1>
      {/* TODO: <nav>クリック後に開くサービス一覧</nav> */}
      <ul className={styles.items}>
        <li>
          <a href="" className={styles.item}>
            グループについて
          </a>
        </li>
        <li>
          <a href="" className={styles.item}>
            ホールディングス
          </a>
        </li>
        <li>
          <a href="" className={styles.item}>
            <ListIcon className={styles.icon} />
            サービス一覧
            <KeyboardArrowDownIcon />
          </a>
        </li>
        <li>
          <a href="" className={styles.item}>
            <LocalPhoneIcon className={styles.icon} />
            お問い合わせ
          </a>
        </li>
        <li>
          <a href="" className={styles.item}>
            <CardGiftcardIcon className={styles.icon} />
            キャンペーン
          </a>
        </li>
        <li className={styles.item}>
          <SearchIcon className={styles.search} />
        </li>
      </ul>
      {/* TODO: <ul>虫眼鏡ホバーで表示される検索窓的なやつ</ul> */}
    </div>
  );
};
