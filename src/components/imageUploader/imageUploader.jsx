import React, { useCallback, useRef, useState } from 'react';
import styles from './imageUploader.module.css';

const ImageUploader = ({ imageService, imgUpload }) => {
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  const handleBtnClick = useCallback(event => {
      event.preventDefault();
      inputRef.current.click();
    });

  const handleImgUpload = async () => {
    setLoading(true);
    const file = inputRef.current.files[0];
    const imgURL = await imageService.upload(file);
    imgUpload(imgURL);
    setLoading(false);
  }

  return (
    <div className={styles.container}>
      <input 
        className={styles.imgInput} 
        type="file" 
        name="file" 
        ref={inputRef}
        onChange={handleImgUpload}
      />
      {
        loading ?
        <div className={styles.loadingSpinner}></div> :
        <button className={styles.imgBtn} onClick={handleBtnClick}>Image</button>
      }
    </div>
  );
};

export default ImageUploader;