import React from 'react';
import { DEFAULT_IMG } from '../../data/default_img';
import styles from './cardItem.module.css';

const CardItem = ({ card }) => {

  const { name, company, title , email, location, theme, message, imgURL } = card;

  return (
    <li className={`${styles.cardContainer} ${getTheme(theme)}`}>
      <img className={styles.img} src={ imgURL || DEFAULT_IMG } alt={name} />
      <ul className={styles.metaData}>
        <li className={styles.name}>{name}</li>
        <li className={styles.company}>{company}</li>
        <li>{title}</li>
        <li>{email}</li>
        <li>{location}</li>
        <li>{message}</li>
      </ul>
    </li>
  )
}

function getTheme(theme) {
  switch (theme) {
    case "dark":
      return styles.dark;
    case "light":
      return styles.light;
    case "colorful":
      return styles.colorful;
    default:
      return;
  }
}

export default CardItem;