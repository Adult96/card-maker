import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './maker.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import { useState } from 'react';

const Maker = ({ FileInput, authService, cardData }) => {
  const loactionState = useLocation().state;
  const [information, setInformation] = useState({});
  const [userId, setuserId] = useState(loactionState && loactionState.id);

  const navigate = useNavigate();
  const onLogOut = () => {
    authService.logOut();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setuserId(user.uid);
      } else {
        navigate('/');
      }
    });
  }, [userId, authService, navigate]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardData.syncData(userId, (cards) => {
      setInformation(cards);
    });
    return () => stopSync();
  }, [cardData, userId]);

  const deleteCard = (card) => {
    setInformation((information) => {
      const deleted = { ...information };
      delete deleted[card.id];
      return deleted;
    });
    cardData.removeData(userId, card);
  };

  const CreateOrUpdateCard = (card) => {
    setInformation((information) => {
      const updated = { ...information };
      updated[card.id] = card;
      return updated;
    });
    cardData.setData(userId, card);
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
