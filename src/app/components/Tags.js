'use strict'

import React from 'react';


export default class Tags extends React.Component {
  render () {
    var data = this.props.blogData
    var tagsArr = [];
    data.map(function(c,i,a) {
      data[i].tags.map(function (c,i,a) {
        if (tagsArr.indexOf(c) === -1) {
          tagsArr.push(c);
          tagsArr.sort();
        }
      })
    })
    console.log(tagsArr);
    return (
      <ul>
        {tagsArr.map((c,i,a) => <li key={c + i}> {c} </li> )}
      </ul>
    );
  }
}
