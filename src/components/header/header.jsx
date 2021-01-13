import React, { memo } from 'react';
import styles from './header.module.css';

const Header = memo(({ logout }) => {
  return (
    <div className={styles.header}>
      <span className={styles.title}>
        Business Card Maker
      </span>
      {
        logout && <button className={styles.logout} onClick={logout}>
          LogOut
        </button>
      }
    </div>
  )
});

export default Header;