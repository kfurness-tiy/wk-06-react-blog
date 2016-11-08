"use strict";

import React from 'react';

export default class PostDate extends React.Component {
  render () {
    return (
      <div>
        <h4>
        {
          this.props.dateData.month + " " + this.props.dateData.day + ", " + this.props.dateData.year
        }
        </h4>
      </div>
    )
  }
}
