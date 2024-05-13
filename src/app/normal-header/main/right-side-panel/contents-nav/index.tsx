import styles from './styles.module.css';

type Props = {
  activeSection: string;
};

export const ContentsNav = ({ activeSection }: Props) => {
  const isActive = (sectionName: string) => activeSection === sectionName;

  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href')?.replace('#', '');
    const targetElement = document.getElementById(targetId!);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.lists}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <a
              href="#section1"
              className={`${styles.link} ${isActive('section1') ? styles.active : ''}`}
              onClick={handleSmoothScroll}
            >
              セクション１
            </a>
          </li>
          <li className={styles.item}>
            <a
              href="#section2"
              className={`${styles.link} ${isActive('section2') ? styles.active : ''}`}
              onClick={handleSmoothScroll}
            >
              セクション２
            </a>
            <ul className={styles.index}>
              <li className={styles.item}>
                <a href="" className={styles.link}>
                  サブセクション2-1
                </a>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <a
              href="#section3"
              className={`${styles.link} ${isActive('section3') ? styles.active : ''}`}
              onClick={handleSmoothScroll}
            >
              セクション３
            </a>
          </li>
          <li className={styles.item}>
            <a
              href="#section4"
              className={`${styles.link} ${isActive('section4') ? styles.active : ''}`}
              onClick={handleSmoothScroll}
            >
              セクション４
            </a>
            <ul className={styles.index}>
              <li className={styles.item}>
                <a href="" className={styles.link}>
                  サブセクション4-1
                </a>
              </li>
              <li className={styles.item}>
                <a href="" className={styles.link}>
                  サブセクション4-2
                </a>
              </li>
              <li className={styles.item}>
                <a href="" className={styles.link}>
                  サブセクション4-3
                </a>
              </li>
              <li className={styles.item}>
                <a href="" className={styles.link}>
                  サブセクション4-4
                </a>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <a
              href="#section5"
              className={`${styles.link} ${isActive('section5') ? styles.active : ''}`}
              onClick={handleSmoothScroll}
            >
              セクション５
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
