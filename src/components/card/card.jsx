import React from 'react';
import styles from './card.module.css';

const DEFAULT_IMAGE = '/images/default_logo.png';
const Card = ({ information }) => {
  const { name, company, theme, position, email, message, fileURL } =
    information;
  const url = fileURL || DEFAULT_IMAGE;
  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      <img className={styles.userImg} src={url} alt='userImg' />
      <div className={styles.information}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.company}>{company}</p>
        <p className={styles.position}>{position}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
};

function getStyles(theme) {
  switch (theme) {
    case 'dark':
      return styles.dark;
    case 'light':
      return styles.light;
    case 'colorful':
      return styles.colorful;

    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}

export default Card;
