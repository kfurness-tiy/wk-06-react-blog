'use strict';

import React from "react";
import { Link } from 'react-router';

export default class HeaderTop extends React.Component {
  render () {
    return (
      <div className="header headerTop col-sm-12">
        <Link to='/'>
          <img src="./app/img/herekittykitty.png" />
        </Link>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}
