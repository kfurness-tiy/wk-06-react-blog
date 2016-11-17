'use strict';

import React from 'react';
import {render} from 'react-dom';
import App from './components/App';

var config = {
   apiKey: "AIzaSyDZsopeGTmpwtwidj2kpTSk1t6r_vF0_fo",
   authDomain: "wk-06-react-blog.firebaseapp.com",
   databaseURL: "https://wk-06-react-blog.firebaseio.com",
   storageBucket: "wk-06-react-blog.appspot.com",
   messagingSenderId: "684579050010"
 };
 firebase.initializeApp(config);

const app = document.getElementById('app');

render(<App />, app);
