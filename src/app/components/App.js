'use strict';

import React from 'react';
import {Header} from './Header';
import {Main} from './Main';
import {Footer} from './Footer';
import {Sidebar} from './Sidebar'
import appSass from './app.sass'

export default class App extends React.Component{
  render () {
    return (
      <div className="parentContainer">
        <Header />
        <main className="center-block">
          <Main />
          <Sidebar />
        </main>
        <Footer />
      </div>
    );
  }
}
