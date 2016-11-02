'use strict';

import React from 'react';
import sidebar from './_Sidebar.sass';
import {Months} from './Months';
import {Tags} from './Tags';

export class Sidebar extends React.Component {
  render () {
    return (
      <div className="sidebar col-sm-3">
        <h3>Archives</h3>
        <Months />
        <Tags />
      </div>
    );
  }
}
