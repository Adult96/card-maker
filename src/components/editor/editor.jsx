import React from 'react';
import CardForm from '../card_form/card_form';
import styles from './editor.module.css';
const Editor = ({ information }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>

      {information.map((item) => (
        <CardForm key={item.key} information={item} />
      ))}
    </section>
  );
};

export default Editor;
