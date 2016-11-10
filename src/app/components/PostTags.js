"use strict";

import React from 'react';

export default class PostTags extends React.Component {
  render () {
    return (
    <div>
      <h4>
        Tags: {this.props.tagData.join(", ")}
      </h4>
    </div>
  )
  }
}
