import React from 'react';
import styles from './loginPage.module.css';
import AuthService from '../../src/service/auth_service';

const loginPage = (props) => {
  const auth = new AuthService().login('google');
  return (
    <div className={styles.login}>
      <header className={styles.title}>
        <img className={styles.logo} src='images/logo.png' alt='logo' />
        <p className={styles.logoName}>Business Card Maker</p>
      </header>
      <main className={styles.selectLogin}>
        <p className={styles.LoginTitle}>Login</p>
        <button className={styles.google} onClick={() => auth}>
          Google
        </button>
        <button className={styles.github}>Github</button>
      </main>
      <footer className={styles.sign}>Code your deram</footer>
    </div>
  );
};

export default loginPage;
