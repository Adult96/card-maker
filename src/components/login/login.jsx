import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
  const navigate = useNavigate();
  const goToMaker = (userId) => {
    navigate('/maker', { state: { id: userId } });
  };
  const onlogin = (e) => {
    authService
      .logIn(e.currentTarget.textContent) //
      .then(({ user }) => user && goToMaker(user.uid));
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.uid);
    });
  });
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
