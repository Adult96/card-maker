import React, { memo } from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import { firebaseApp } from './service/firebase';
import Cloudinary from './service/Cloudinary';
import ImageFileInput from './components/image_file_input/image_file_input';
import UserDatabase from './service/user_database';

const authService = new AuthService(firebaseApp);
const cardData = new UserDatabase(firebaseApp);
const cloudinary = new Cloudinary();
const FileInput = memo((props) => (
  <ImageFileInput {...props} imageUploader={cloudinary} />
));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} cardData={cardData} />
  </React.StrictMode>
);
