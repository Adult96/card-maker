import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
  const onlogin = (e) => {
    authService.login(e.currentTarget.textContent);
  };
  return (
    <section className={styles.main}>
      <Header />
      <section className={styles.login}>
        <h1>Login</h1>
        <ul>
          <li>
            <button className={styles.google} onClick={onlogin}>
              Google
            </button>
          </li>
          <li>
            <button className={styles.github} onClick={onlogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
