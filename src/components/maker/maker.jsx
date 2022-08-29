import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './maker.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import { useState } from 'react';

const Maker = ({ authService }) => {
  const [information, setInformation] = useState([
    {
      key: 1,
      name: 'Sungin',
      company: 'google',
      theme: 'light',
      position: 'google',
      email: 'google',
      message: 'hi',
      fileName: 'singin',
      fileURL: null,
    },
    {
      key: 2,
      name: 'Sungin',
      company: 'google',
      theme: 'colorful',
      position: 'google',
      email: 'google',
      message: 'hi',
      fileName: 'singin',
      fileURL: null,
    },
  ]);

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
      <section className={styles.container}>
        <Editor information={information} />
        <Preview information={information} />
      </section>
      <Footer />
    </section>
  );
};

export default Maker;
