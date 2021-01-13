import React from 'react';
import CardEditor from '../cardEditor/cardEditor';

const CardEditForm = ({ cards, createOrUpdateCards, deleteCard, imageService }) => {
return (
    <ul>
      {
        Object.keys(cards).map(key => {
          return <CardEditor 
            key={key} 
            card={cards[key]} 
            createOrUpdateCards={createOrUpdateCards}
            deleteCard={deleteCard}
            imageService={imageService}
            />
        })
      }
    </ul>
  )
};

export default CardEditForm;