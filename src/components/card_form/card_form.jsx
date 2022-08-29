import React from 'react';
import { useRef } from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_form.module.css';

const CardForm = ({ information }) => {
  // const nameRef = useRef(information.name);
  // const companyRef = useRef(information.company);
  // const positionRef = useRef(information.position);
  // const emailRef = useRef(information.email);
  // const messageRef = useRef(information.message);
  const { name, company, theme, position, email, message, fileName, fileURL } =
    information;

  const onSumit = () => {};

  return (
    <form className={styles.form}>
      <input
        // ref={nameRef}
        className={styles.input}
        type='text'
        value={name}
        placeholder='Name'
      />
      <input
        // // ref={companyRef}
        className={styles.input}
        type='text'
        value={company}
        placeholder='Company'
      />
      <select className={styles.select} type='text'>
        <option value='light'>light</option>
        <option value='dark'>dark</option>
        <option value='colorful'>colorful</option>
      </select>
      <input
        // // ref={positionRef}
        className={styles.input}
        type='text'
        value={position}
        placeholder='Position'
      />
      <input
        // // ref={emailRef}
        className={styles.input}
        type='text'
        value={email}
        placeholder='Email'
      />
      <textarea
        // ref={messageRef}
        className={styles.textarea}
        type='text'
        value={message}
        placeholder='Message'
      />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name={'Delet'} onclick={onSumit} />
    </form>
  );
};

export default CardForm;
