'use strict';

import React from 'react';
import {HeaderTop} from './HeaderTop'
import headerStyle from './_Header.sass';

export class Header extends React.Component {
  render () {
    return (
      <div className="header container-fluid">
        <HeaderTop />
        <div className="coverPhoto col-sm-12">
          <img src="./app/img/maincat.jpg" />
          <h1>Life of a Cat</h1>
        </div>
      </div>
    );
  }
}
