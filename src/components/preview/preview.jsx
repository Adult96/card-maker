import React from 'react';
import Card from '../card/card';
import styles from './preview.module.css';

const Preview = ({ information }) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.cards}>
        {information.map((item) => (
          <Card key={item.key} information={item} />
        ))}
      </ul>
    </section>
  );
};

export default Preview;
