import React, { useCallback, useRef, useState } from 'react';
import EventBtn from '../eventBtn/eventBtn';
import ImageUploader from '../imageUploader/imageUploader';
import styles from './cardAddForm.module.css';

const CardAddForm = ({ createOrUpdateCards, imageService }) => {
  const [img, setImg] = useState();

  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const locationRef = useRef();
  const themeRef = useRef();
  const messageRef = useRef();

  const handleSubmit = event => {
    event.preventDefault();
    const id = Math.random();
    const name = nameRef.current.value || "name";
    const company = companyRef.current.value || "company";
    const title = titleRef.current.value || "title";
    const email = emailRef.current.value || "email";
    const location = locationRef.current.value || "location";
    const theme = themeRef.current.value || "theme";
    const message = messageRef.current.value || "message";
    const imgURL = img;
    const card = { id, name, company, title, email, location, theme, message, imgURL };
    createOrUpdateCards(card);
    formRef.current.reset();
    setImg(null);
  };

  const imgUpload = useCallback(data => {
    setImg(data);
  }, []);

  return (
    <form className={styles.container} ref={formRef}>
      <input className={styles.input} type="text" name="name" placeholder="name" ref={nameRef}/>
      <input className={styles.input} type="text" name="company" placeholder="company" ref={companyRef}/>
      <input className={styles.input} type="text" name="title" placeholder="title" ref={titleRef}/>
      <input className={styles.input} type="text" name="email" placeholder="email" ref={emailRef}/>
      <input className={styles.input} type="text" name="location" placeholder="location" ref={locationRef}/>
      <select className={styles.select} name="theme" ref={themeRef}>
        <option disabled>=Theme=</option>
        <option value="dark">dark</option>
        <option value="light">light</option>
        <option value="colorful">colorful</option>
      </select>
      <textarea className={styles.textarea} name="message" placeholder="message" ref={messageRef}></textarea>
      <ImageUploader imageService={imageService} imgUpload={imgUpload}/>
      <EventBtn value="Add" onClick={handleSubmit} />     
    </form>
  )
};

export default CardAddForm;