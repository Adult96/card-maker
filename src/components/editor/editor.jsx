import React from 'react';
import CardAdd from '../card_add/card_add';
import CardForm from '../card_form/card_form';
import styles from './editor.module.css';
const Editor = ({ information, addCard }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>

      {information.map((item) => (
        <CardForm key={item.key} information={item} />
      ))}
      <CardAdd addCard={addCard} />
    </section>
  );
};

export default Editor;
