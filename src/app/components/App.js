'use strict';

import React from 'react';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';

import About from './About'
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import NotFound from './NotFound'

import appSass from './app.sass'

import blogData from './blog-posts.json';


export default class App extends React.Component {
  render () {
    return (
      <Router>
        <div className="container-fluid">
          <Header class="container-fluid" />
          <Match exactly pattern='/' component={Main}/>
          <Match pattern='/about' component={About}/>
          <Miss component={NotFound}/>
          <Footer />
        </div>
      </Router>

    );
  }
}
