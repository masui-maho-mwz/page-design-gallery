import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  const links = [
    { href: './normal-header', label: 'NormalHeader' },
    { href: './mega-menu-header', label: 'MegaMenuHeader' },
    { href: './dashboard-menu', label: 'DashboardMenu' },
  ];

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>PageDesignGallery</h2>
      <ol className={styles.lists}>
        {links.map((link) => (
          <li key={link.href} className={styles.list}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
