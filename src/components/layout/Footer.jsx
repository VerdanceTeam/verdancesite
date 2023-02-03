import * as React from 'react';
import * as styles from './Footer.module.scss';

function Footer({ children }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>{children}</div>
    </footer>
  );
}

export default Footer;
