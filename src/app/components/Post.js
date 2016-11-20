'use strict';

import React from 'react';
import PostParagraphs from "./PostParagraphs";
import PostDate from "./PostDate";
import PostTags from "./PostTags";

export default class Post extends React.Component {
  render () {
    return (
      <section className="content col-sm-9">
        {this.props.blogData.map((c,i,a) => {
         return (
           <div key={"article", i} className="post col-sm-6">
             <h2 key={"title", i}> {c.title} </h2>
             <PostDate dateData={c.date} />
             <PostParagraphs pData={c.article} />
             <PostTags tagData={c.tags} />
           </div>
           );
         })
       }
      </section>
    );
  }
}
