'use strict';

import React from "react";

export class HeaderTop extends React.Component {
  render () {
    return (
      <div className="header headerTop col-sm-12">
        <img src="./app/img/herekittykitty.png" />
        <nav>
          <ul>
            <a href="#"><li>Home</li></a>
            <a href="#"><li>About</li></a>
          </ul>
        </nav>
      </div>
    );
  }
}
