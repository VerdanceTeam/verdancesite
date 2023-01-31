import * as React from 'react';
import * as styles from './Header.module.scss';

function Header({ children }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>{children}</div>
    </header>
  );
}

export default Header;
