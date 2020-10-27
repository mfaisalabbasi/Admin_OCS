import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import "firebase/auth";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const firebaseConfig = {
    apiKey: "AIzaSyAfVRLKqj_hBKc9HSuji_ujl0NEW-opQVE",
    authDomain: "on-click-s.firebaseapp.com",
    databaseURL: "https://on-click-s.firebaseio.com",
    projectId: "on-click-s",
    storageBucket: "on-click-s.appspot.com",
    messagingSenderId: "793430247391",
    appId: "1:793430247391:web:b2a652b690c933c39ee66a",
    measurementId: "G-KECV3DK7EQ"
  };
 firebase.initializeApp(firebaseConfig)
 export const auth = firebase.auth();

 const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

ReactDOM.render(
  <React.StrictMode>
   <AlertProvider template={AlertTemplate} {...options}>
    <App />
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
