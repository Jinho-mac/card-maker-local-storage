import React from 'react';
import CardItem from '../cardItem/cardItem';
import styles from './preview.module.css';

const Preview = ({ cards }) => {
  return (
    <div className={styles.preview}>
      <h1 className={styles.title}>Preview</h1>
      <ul className={styles.cardList}>
        {
          Object.keys(cards).map(key => {
            return <CardItem key={key} card={cards[key]} />
          })
        }
      </ul>
    </div>
  );
};

export default Preview;