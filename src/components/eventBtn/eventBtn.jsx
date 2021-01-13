import React, { memo } from 'react';
import styles from './eventBtn.module.css';

const EventBtn = memo(({ value, onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {value}
    </button>
  )
});

export default EventBtn;