import React from 'react';
import { memo } from 'react';
import styles from './header.module.css';

const Header = memo(({ onLogOut }) => (
  <header className={styles.header}>
    {onLogOut && (
      <button className={styles.logout} onClick={onLogOut}>
        LogOut
      </button>
    )}
    <img className={styles.logo} src='images/logo.png' alt='logo' />
    <p className={styles.logoName}>Business Card Maker</p>
  </header>
));

export default Header;
