import { Footer } from '@/app/normal-header/footer';
import { Header } from '@/app/normal-header/header';
import { Main } from '@/app/normal-header/main';
import { Navigation } from '@/app/normal-header/navigation';
import styles from './styles.module.css';

export default function NomalHeaderHome() {
  return (
    <div className={styles.root}>
      <Header />
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}
