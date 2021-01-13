import React, { memo } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import Login from '../login/login';
import styles from './home.module.css';

const Home = memo(({ authService }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <Login authService={authService} />
        <Footer />
      </div>
    </div>
  )
});

export default Home;