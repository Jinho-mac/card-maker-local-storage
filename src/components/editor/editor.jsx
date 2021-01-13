import React from 'react';
import CardEditForm from '../cardEditForm/cardEditForm';
import CardAddForm from '../cardAddForm/cardAddForm';
import styles from './editor.module.css';

const Editor = ({ cards, createOrUpdateCards, deleteCard, imageService }) => {
  return (
    <div className={styles.editor}>
      <h1 className={styles.title}>Editor</h1>
      <section>
        <CardEditForm 
        cards={cards} 
        createOrUpdateCards={createOrUpdateCards}
        deleteCard={deleteCard}
        imageService={imageService}
        />
        <CardAddForm 
        createOrUpdateCards={createOrUpdateCards}
        imageService={imageService}
        />
      </section>
    </div>
  );
};

export default Editor;