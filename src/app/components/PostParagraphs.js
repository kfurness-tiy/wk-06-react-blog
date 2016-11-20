'use strict';

import React from "react";

export default class PostParagraphs extends React.Component {
  render () {
    return (
      <div>
      {this.props.pData.map(function (c,i) {
        return <p key={"p", i}> {c} </p>
      })}
      </div>
    )
  }
}
