import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './maker.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import { useState } from 'react';

const Maker = ({ FileInput, authService }) => {
  const [information, setInformation] = useState({
    1: {
      id: '1',
      name: 'Sungin',
      company: 'google',
      theme: 'light',
      position: 'google',
      email: 'google',
      message: 'hi',
      fileName: null,
      fileURL: null,
    },
    2: {
      id: '2',
      name: 'Sungin',
      company: 'google',
      theme: 'colorful',
      position: 'google',
      email: 'google',
      message: 'hi',
      fileName: null,
      fileURL: null,
    },
  });

  const navigate = useNavigate();
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

  const deleteCard = (id) => {
    setInformation((information) => {
      const deleted = { ...information };
      delete deleted[id];
      return deleted;
    });
  };

  const CreateOrUpdateCard = (card) => {
    setInformation((information) => {
      const updated = { ...information };
      updated[card.id] = card;
      return updated;
    });
  };
  return (
    <section className={styles.maker}>
      <Header onLogOut={onLogOut} />
      <section className={styles.container}>
        <Editor
          FileInput={FileInput}
          information={information}
          addCard={CreateOrUpdateCard}
          deleteCard={deleteCard}
          updateCard={CreateOrUpdateCard}
        />
        <Preview information={information} />
      </section>
      <Footer />
    </section>
  );
};

export default Maker;
