import React, { memo } from 'react';
import styles from './footer.module.css';

const Footer = memo(() => {
  return (
    <footer className={styles.footer}>
      <span className={styles.content}>
        Have a Nice Day 🌈
      </span>
    </footer>
  )
});

export default Footer;