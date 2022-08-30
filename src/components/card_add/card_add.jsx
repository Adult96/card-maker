import React from 'react';
import { useRef } from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_add.module.css';

const CardAdd = ({ addCard }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const positionRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSumit = (e) => {
    e.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      position: positionRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: 'sungin',
      fileURL: null,
    };
    formRef.current.reset();
    addCard(card);
  };
  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type='text'
        placeholder='Name'
      />
      <input
        ref={companyRef}
        className={styles.input}
        type='text'
        placeholder='Company'
      />
      <select ref={themeRef} className={styles.select} type='text'>
        <option value='light'>light</option>
        <option value='dark'>dark</option>
        <option value='colorful'>colorful</option>
      </select>
      <input
        ref={positionRef}
        className={styles.input}
        type='text'
        placeholder='Position'
      />
      <input
        ref={emailRef}
        className={styles.input}
        type='text'
        placeholder='Email'
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        type='text'
        placeholder='Message'
      />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name={'Add'} onClick={onSumit} />
    </form>
  );
};

export default CardAdd;
