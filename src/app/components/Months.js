'use strict';

import React from 'react';

export default class Months extends React.Component {
  handleClick(e){
    this.props.setSearch(e.target.name, e.target.id);
  };

  render () {
    return (
      <ul>
        {this.props.monthConst.map((c,i,a) => <li key={c + i}><a id={c} name="month" onClick={this.handleClick.bind(this)}  href="#"> {c} </a></li> )}
      </ul>
    );
  }
}
