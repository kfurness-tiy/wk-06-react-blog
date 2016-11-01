'use strict';

import React from 'react';
import headerStyle from './Header.sass';

export class Header extends React.Component {
  render () {
    return (
      <div className="header col-md-4">
        <img src="../img/catlogo.png" />
        <h1>Life of a Cat</h1>
      </div>
    );
  }
}
