'use strict';

import React from 'react';

export default class Post extends React.Component {
  render() {
    return (
      <section>
        <div className="col-sm-6">
          <h2>{this.props.blogData[0].title}</h2>
          <h4><time>{this.props.blogData[0].posted} </time></h4>
          <p>{this.props.blogData[0].article}</p>
        </div>

        <div className="col-sm-6">
          <h2>{this.props.blogData[1].title}</h2>
          <h4><time>{this.props.blogData[1].posted} </time></h4>
          <p>{this.props.blogData[1].article}</p>
        </div>

        <div className="col-sm-6">
          <h2>{this.props.blogData[2].title}</h2>
          <h4><time>{this.props.blogData[2].posted} </time></h4>
          <p>{this.props.blogData[2].article}</p>
        </div>
      </section>
    );
  }
}

//WIP Paragraph breaks in json
// break apart post
