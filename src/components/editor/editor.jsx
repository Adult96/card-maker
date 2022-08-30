import React from 'react';
import CardAdd from '../card_add/card_add';
import CardForm from '../card_form/card_form';
import styles from './editor.module.css';
const Editor = ({
  FileInput,
  information,
  addCard,
  deleteCard,
  updateCard,
}) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>

      {Object.keys(information).map((key) => (
        <CardForm
          key={key}
          FileInput={FileInput}
          information={information[key]}
          deleteCard={deleteCard}
          updateCard={updateCard}
        />
      ))}
      <CardAdd FileInput={FileInput} addCard={addCard} />
    </section>
  );
};

export default Editor;
