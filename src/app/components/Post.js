'use strict';

import React from 'react';
import PostParagraphs from "./PostParagraphs";
import PostDate from "./PostDate";
import PostTags from "./PostTags";

export default class Post extends React.Component {
  render () {
    return (
      <section>
        {this.props.blogData.map(function(c,i,a) {
          return (
            <div key={"article", i} className="post col-sm-6">
              <h2 key={"title", i}>{a[i].title}</h2>
              <PostDate dateData={a[i].date} />
              <PostParagraphs pData={a[i].article} />
              <PostTags tagData={a[i].tags} />
            </div>
            );
          })
        }
      </section>
    );
  }
}
