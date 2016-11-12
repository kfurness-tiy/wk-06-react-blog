'use strict';

import React from "react";
import { Link } from 'react-router';


export default class HeaderTop extends React.Component {
  testing(e) {
    this.setState({
      id: "",
      type: ""
    })
  }

  render () {
    return (
      <div className="header headerTop col-sm-12">
        <Link to='/' onClick={this.testing.bind(this)}>
          <img src="./app/img/herekittykitty.png" />
        </Link>
        <nav>
          <ul>
            <li><Link to='/' onClick={this.testing.bind(this)}>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}
