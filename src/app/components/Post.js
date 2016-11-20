'use strict';

import React from 'react';
import PostParagraphs from "./PostParagraphs";
import PostDate from "./PostDate";
import PostTags from "./PostTags";

export default class Post extends React.Component {
  render () {
    console.log('pizza',this.props.blogData);
    return (
      <section>
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


// <p>{oreo.on('value', (snapshot) => {
//     //displays entire object
//     JSON.stringify(snapshot.val(), null, 3);
//   })}</p>
//   {this.props.blogData.on('child_added', (snapshot) => {
//     <div className="post col-sm-6">
//       <h2>{dataSet.child('title')}</h2>
//       <PostDate dateData={dataSet.child('date')} />
//       <PostParagraphs pData={dataSet.child('article')} />
//       <PostTags tagData={dataSet.child('tags')} />
//     </div>
//   })}


// bundle.js:9023 Uncaught Error: Objects are not valid as a React child (found: https://wk-06-react-blog.firebaseio.com/title). If you meant to render a collection of children, use an array instead or wrap the object using createFragment(object) from the React add-ons. Check the render method of `Post`.(…)

//http://stackoverflow.com/questions/33726179/reactfire-get-objects-are-not-valid-as-a-react-child-when-binding-firebase-t
//https://www.npmjs.com/package/react-addons-create-fragment
