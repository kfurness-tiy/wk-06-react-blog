'use strict';

import React from 'react';
import PostParagraphs from "./PostParagraphs";
import PostDate from "./PostDate";
import PostTags from "./PostTags";

export default class Post extends React.Component {
  render () {
    let dataSet = this.props.blogData;
    this.props.blogData.on('child_added', (snapshot) => {
  console.log('pizza',snapshot.val());
});
    const blabla = this.props.blogData.child('0');
    blabla.on('value', (snapshot) => {
      //displays entire object
      console.log(JSON.stringify(snapshot.val(), null, 3));
    });
    let oreo = dataSet.child('title')

    console.log('yo yo yo',blabla);
    return (
      <section>
          <p>{oreo.on('value', (snapshot) => {
              //displays entire object
              JSON.stringify(snapshot.val(), null, 3);
            })}</p>
            {this.props.blogData.on('child_added', (snapshot) => {
              <div className="post col-sm-6">
                <h2>{dataSet.child('title')}</h2>
                <PostDate dateData={dataSet.child('date')} />
                <PostParagraphs pData={dataSet.child('article')} />
                <PostTags tagData={dataSet.child('tags')} />
              </div>
            })}
      </section>
    );
  }
}


// bundle.js:9023 Uncaught Error: Objects are not valid as a React child (found: https://wk-06-react-blog.firebaseio.com/title). If you meant to render a collection of children, use an array instead or wrap the object using createFragment(object) from the React add-ons. Check the render method of `Post`.(…)

//http://stackoverflow.com/questions/33726179/reactfire-get-objects-are-not-valid-as-a-react-child-when-binding-firebase-t
//https://www.npmjs.com/package/react-addons-create-fragment
