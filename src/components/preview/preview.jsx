import React from 'react';
import Card from '../card/card';
import styles from './preview.module.css';

const Preview = ({ information }) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.cards}>
        {Object.keys(information).map((key) => (
          <Card key={key} information={information[key]} />
        ))}
      </ul>
    </section>
  );
};

export default Preview;
