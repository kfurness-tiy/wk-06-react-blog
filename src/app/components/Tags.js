'use strict'

import React from 'react';


export default class Tags extends React.Component {
  render () {
    // var data = this.props.blogData
    // var tagsArr = [];
    // data.map(function(c,i,a) {
    //   data.tags.map(function (c,i,a) {
    //     if (tagsArr.indexOf(c) === -1) {
    //       tagsArr.push(c);
    //     }
    //   }
    // })

    return (
      <ul>
        {this.props.blogData.tags.map(function(c,i,a){
          return <li>{c}</li>
        })}
      </ul>
    );
  }
}
