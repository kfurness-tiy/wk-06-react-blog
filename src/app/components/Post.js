'use strict';

import React from 'react';
import PostParagraphs from "./PostParagraphs";

export default class Post extends React.Component {
  render () {
    return (
      <section>
        {this.props.blogData.map(function(c,i,a) {
          return (
            <div key={"article", i} className="col-sm-6">
              <h2 key={"title", i}>{a[i].title}</h2>
              <h4><time>{a[i].posted} </time></h4>
              <PostParagraphs pData={a[i].article} />
            </div>
            );
          })
        }
      </section>
    );
  }
}
