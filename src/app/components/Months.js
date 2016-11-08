'use strict';

import React from 'react';

export default class Months extends React.Component {
  handleClick(e){
    var pizza = "pizza"
    this.props.clickadoodle(pizza);
  }

  render () {
    var data = this.props.blogData
    var monthsArr = [];
    for (let i = 0; i < data.length; i++) {
      if (monthsArr.includes(data[i].date.month) !== true){
        monthsArr.push(data[i].date.month);
      }
        }

    return (
      <ul>
        {monthsArr.map((c,i,a) => <li key={c + i}><a onClick={this.handleClick.bind(this)} href="#"> {c} </a></li> )}
      </ul>
    );
  }
}
