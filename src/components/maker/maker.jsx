import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './maker.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Maker = ({ authService }) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);

  const onLogOut = () => {
    authService.logOut();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate('/');
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogOut={onLogOut} />
      <section className={styles.main}>sdfsd</section>
      <Footer />
    </section>
  );
};

export default Maker;
