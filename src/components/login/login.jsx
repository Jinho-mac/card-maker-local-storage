import React, { memo, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './login.module.css';

const Login = memo(({ authService }) => {
  const history = useHistory();

  const goToMaker = useCallback(id => {
    history.push("/maker", { id });
  }, [history]);

  const handleClick = useCallback(async event => {
    const siteName = event.target.innerText;
    const id = await authService.login(siteName);
    goToMaker(id);
  }, [authService]);

  useEffect(() => {
    authService.detectAuthStateChange(user => {
      user && goToMaker(user.uid);
    })
  }, [authService]);

  return (
    <div className={styles.login}>
      <button className={styles.btn} onClick={handleClick}>
        <img className={styles.icon} src="https://res.cloudinary.com/dlhxfrssh/image/upload/v1610465921/google-icon_islek4.png" alt="google"/>
        Google
      </button>
      <button className={styles.btn} onClick={handleClick}>
        <img className={styles.icon} src="https://res.cloudinary.com/dlhxfrssh/image/upload/v1610466290/iconfinder_github_1218140_skb1nj.png" alt="github"/>
        Github
      </button>
    </div>
  )
});

export default Login;