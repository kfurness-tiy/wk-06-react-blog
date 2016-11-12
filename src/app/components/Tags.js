'use strict'

import React from 'react';


export default class Tags extends React.Component {
  handleClick(e){
    this.props.setSearch(e.target.name, e.target.id);
  };

  render () {
    return (
      <ul>
        {this.props.tagConst.map((c,i,a) => <li key={c + i}><a id={c} name="tag" onClick={this.handleClick.bind(this)}> {c} </a></li> )}
      </ul>
    );
  }
}
