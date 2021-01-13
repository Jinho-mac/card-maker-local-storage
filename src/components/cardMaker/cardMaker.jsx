import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import initialData from '../../data/initialData';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './cardMaker.module.css';

const CardMaker = ({ authService, imageService }) => {
  const history = useHistory();
  const [cards, setCards] = useState(initialData);

  const createOrUpdateCards = card => {
    const updated = {...cards};
    const id = card.id;
    updated[id] = card;
    setCards(updated);
  };

  const deleteCard = card => {
    const deleted = {...cards};
    const id = card.id;
    delete deleted[id];
    setCards(deleted);
  };

  const handleLogOut = useCallback(() => {
    authService.logout();
  }, [authService]);

  useEffect(() => {
    authService.detectAuthStateChange(user => {
      user || history.push("/");
    })
  }, [authService]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header logout={handleLogOut} />
        <section className={styles.editorAndPreview}>
          <Editor 
          cards={cards} 
          createOrUpdateCards={createOrUpdateCards}
          deleteCard={deleteCard}
          imageService={imageService}
          />
          <Preview cards={cards}/>
        </section>
        <Footer />
      </div>
    </div>
  )
};

export default CardMaker;