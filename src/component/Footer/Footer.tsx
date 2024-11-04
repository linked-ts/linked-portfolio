import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.copyright}>All rights reserved</p>
        <div className={styles.links}>
          <a href="#" className={styles.link}>Telegram</a>
          <span className={styles.separator}>·</span>
          <a href="#" className={styles.link}>Discord</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
