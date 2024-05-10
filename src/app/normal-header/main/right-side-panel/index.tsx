import { BannerAdArea } from '@/app/normal-header/main/right-side-panel/banner-ad-area';
import { ContentsNav } from '@/app/normal-header/main/right-side-panel/contents-nav';
import styles from './styles.module.css';

export const RightSidePanel = () => {
  return (
    <div className={styles.root}>
      <BannerAdArea />
      <BannerAdArea />
      <ContentsNav />
    </div>
  );
};
