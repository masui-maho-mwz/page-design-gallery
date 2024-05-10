import { Article } from '@/app/normal-header/main/main-contents/article';
import { Info } from '@/app/normal-header/main/main-contents/info';
import styles from './styles.module.css';

export const MainContents = () => {
  return (
    <div className={styles.root}>
      <Article />
      <Info />
    </div>
  );
};
