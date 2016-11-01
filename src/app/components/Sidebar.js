'use strict';

import React from 'react';
import {Months} from './Months'
import {Tags} from './Tags'

export class Sidebar extends React.Component {
  render () {
    return (
      <div>
        <Months />
        <Tags />
      </div>
    );
  }
}
