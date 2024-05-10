import { Facebook } from '@/app/normal-header/main/left-icons/facebook';
import { Good } from '@/app/normal-header/main/left-icons/good';
import { HatenaBookMark } from '@/app/normal-header/main/left-icons/hatena-bookmark';
import { OptionButton } from '@/app/normal-header/main/left-icons/option-button';
import { Stock } from '@/app/normal-header/main/left-icons/stock';
import { X } from '@/app/normal-header/main/left-icons/x';
import styles from './styles.module.css';

export const LeftIcons = () => {
  return (
    <div className={styles.root}>
      <Good />
      <Stock />
      <X />
      <Facebook />
      <HatenaBookMark />
      <OptionButton />
    </div>
  );
};
