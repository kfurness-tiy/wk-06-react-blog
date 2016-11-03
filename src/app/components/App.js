'use strict';

import React from 'react';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar'
import Footer from './Footer';
import appSass from './app.sass'

import blogData from './blog-posts.json';


export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      blogData: blogData
    }
  }
  render () {
    return (
      <div className="parentContainer">
        <Header />
        <main className="center-block">
          <Main blogData={this.state.blogData} />
          <Sidebar />
        </main>
        <Footer />
      </div>
    );
  }
}
