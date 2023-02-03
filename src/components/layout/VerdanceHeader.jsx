import * as React from 'react';
import * as styles from './VerdanceHeader.module.scss';

function VerdanceHeader({ logo, pixelatedLogo }) {
  return (
    <h1 className={styles.mainLogo}>
      <img
        className={`${styles.logo} ${styles.regularLogo}`}
        src={logo}
        alt="Verdance"
      />
      <img
        className={`${styles.logo} ${styles.pixelatedLogo}`}
        src={pixelatedLogo}
        alt="Verdance"
      />
    </h1>
  );
}

export default VerdanceHeader;
