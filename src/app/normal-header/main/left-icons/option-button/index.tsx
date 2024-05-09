import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import styles from './styles.module.css';

export const OptionButton = () => {
  return (
    <div className={styles.root}>
      <button type="button" aria-label="オプションを開く" className={styles.button}>
        <MoreHorizIcon></MoreHorizIcon>
      </button>
    </div>
  );
};
