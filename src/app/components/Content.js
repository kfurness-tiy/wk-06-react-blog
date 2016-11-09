'use strict';

import React from 'react';
import Post from './Post';


export default class Main extends React.Component {
  render () {
    return (
      <div className="col-sm-9">
        <Post blogData={this.props.blogData} />
      </div>
    );
  }
}
