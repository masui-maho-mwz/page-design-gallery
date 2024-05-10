import styles from './styles.module.css';

export const ContentsNav = () => {
  return (
    <div className={styles.root}>
      <div className={styles.lists}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <a href="" className={styles.link}>
              セクション１
            </a>
          </li>
          <li className={styles.item}>
            <a href="" className={styles.link}>
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
            <a href="" className={styles.link}>
              セクション３
            </a>
          </li>
          <li className={styles.item}>
            <a href="" className={styles.link}>
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
            <a href="" className={styles.link}>
              セクション５
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
