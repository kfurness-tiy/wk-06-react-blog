'use strict';

import React from 'react';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar'
import Footer from './Footer';
import appSass from './app.sass'

import blogData from './blog-posts.json';


export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      blogData: blogData
    }
  };

  clickadoodle(pizza) {
    console.log(pizza);
  }

  render () {
    return (
      <div className="parentContainer">
        <Header />
        <main className="center-block">
          <Main blogData={this.state.blogData} />
          <Sidebar clickadoodle={this.clickadoodle.bind(this)} blogData={this.state.blogData}  />
        </main>
        <Footer />
      </div>
    );
  }
}

//WIP Sidebar Make Tags section
//WIP Tags, list out the array of tags
//WIP Sidebar Make Months section
//WIP Months, list out the array of months
