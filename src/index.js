import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import AuthService from './service/auth_service';
import ImageService from './service/image_service';

const authService = new AuthService();
const imageService = new ImageService();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} imageService={imageService}/>
  </React.StrictMode>,
  document.getElementById('root')
);

