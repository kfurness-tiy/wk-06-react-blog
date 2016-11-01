'use strict';

import React from 'react';

import blogData from './blog-posts.json';

export class Post extends React.Component {
  render() {
    return (
      <section className="col-sm-12">
        <div className="col-sm-4">
          <h2>{blogData[0].title}</h2>
          <h4><time>{blogData[0].posted} </time></h4>
          <p>{blogData[0].article}</p>
        </div>

        <div className="col-sm-4">
          <h2>{blogData[1].title}</h2>
          <h4><time>{blogData[1].posted} </time></h4>
          <p>{blogData[1].article}</p>
        </div>

        <div className="col-sm-4">
          <h2>{blogData[2].title}</h2>
          <h4><time>{blogData[2].posted} </time></h4>
          <p>{blogData[2].article}</p>
        </div>
      </section>
    );
  }
}
