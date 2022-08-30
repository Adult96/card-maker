import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import Button from '../button/button';
import styles from './card_add.module.css';

const CardAdd = ({ FileInput, addCard }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const positionRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

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
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };
    formRef.current.reset();
    addCard(card);
    setFile({ fileName: null, fileURL: null });
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
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </div>
      <Button name={'Add'} onClick={onSumit} />
    </form>
  );
};

export default CardAdd;
