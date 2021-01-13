import React from 'react';
import EventBtn from '../eventBtn/eventBtn';
import ImageUploader from '../imageUploader/imageUploader';
import styles from './cardEditor.module.css';

const CardEditor = ({ card, createOrUpdateCards, deleteCard, imageService }) => {
  const { name, company, title, email, location, theme, message } = card;

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    const updated = {
      ...card,
      [name]: value,
    };
    createOrUpdateCards(updated);
  };

  const handleDelete = () => {
    deleteCard(card);
  };

  const imgUpload = data => {
    const updated = {
      ...card,
      imgURL: data,
    };
    createOrUpdateCards(updated);
  };

  return (
    <li className={styles.container}>
      <input className={styles.input} type="text" name="name" value={name} onChange={handleChange}/>
      <input className={styles.input} type="text" name="company" value={company} onChange={handleChange}/>
      <input className={styles.input} type="text" name="title" value={title} onChange={handleChange}/>
      <input className={styles.input} type="text" name="email" value={email} onChange={handleChange}/>
      <input className={styles.input} type="text" name="location" value={location} onChange={handleChange}/>
      <select className={styles.select} name="theme" value={theme} onChange={handleChange}>
        <option value="dark">dark</option>
        <option value="light">light</option>
        <option value="colorful">colorful</option>
      </select>
      <textarea className={styles.textarea} name="message" value={message} onChange={handleChange}></textarea>
      <ImageUploader imageService={imageService} imgUpload={imgUpload}/>
      <EventBtn value="Delete" onClick={handleDelete} />     
    </li>
  )
};

export default CardEditor;