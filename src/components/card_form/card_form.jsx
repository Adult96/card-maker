import React from 'react';
import { useRef } from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_form.module.css';

const CardForm = ({ information, deleteCard, updateCard }) => {
  const {
    id,
    name,
    company,
    theme,
    position,
    email,
    message,
    fileName,
    fileURL,
  } = information;

  const onSumit = (e) => {
    e.preventDefault();
    deleteCard(id);
  };

  const onChange = (e) => {
    if (e.currentTarget === null) {
      return;
    }
    e.preventDefault();
    updateCard({
      ...information,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type='text'
        name='name'
        value={name}
        placeholder='Name'
        onChange={onChange}
      />
      <input
        className={styles.input}
        type='text'
        name='company'
        value={company}
        placeholder='Company'
        onChange={onChange}
      />
      <select
        className={styles.select}
        type='text'
        name='theme'
        value={theme}
        onChange={onChange}
      >
        <option value='light'>light</option>
        <option value='dark'>dark</option>
        <option value='colorful'>colorful</option>
      </select>
      <input
        className={styles.input}
        type='text'
        name='position'
        value={position}
        placeholder='Position'
        onChange={onChange}
      />
      <input
        className={styles.input}
        type='text'
        name='email'
        value={email}
        placeholder='Email'
        onChange={onChange}
      />
      <textarea
        className={styles.textarea}
        type='text'
        name='message'
        value={message}
        placeholder='Message'
        onChange={onChange}
      />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name={'Delet'} onClick={onSumit} />
    </form>
  );
};

export default CardForm;
