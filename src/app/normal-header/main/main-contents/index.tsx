import { Article } from '@/app/normal-header/main/main-contents/article';
import { Info } from '@/app/normal-header/main/main-contents/info';
import styles from './styles.module.css';

type Props = {
  setActiveSection: (section: string) => void;
};

export const MainContents = ({ setActiveSection }: Props) => {
  return (
    <div className={styles.root}>
      <Article setActiveSection={setActiveSection} />
      <Info />
    </div>
  );
};
