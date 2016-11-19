'use strict';

import React from 'react';
import PostParagraphs from "./PostParagraphs";
import PostDate from "./PostDate";
import PostTags from "./PostTags";

export default class Post extends React.Component {
  render () {
    const testingRef = document.getElementById("poop");
    let dataSet = this.props.blogData;

    let title = this.props.blogData.child('2');
    const pizza = title.child('title');
    let cat = pizza.on('value', (snapshot) => {
      //displays entire object
      document.getElementById('poop').innerText =
    JSON.stringify(snapshot.val(), null, 3)
    });
    console.log(cat);
    // let pie = for (let i = 0; i < dataSet.length; i++){
    //   const li = document.createElement('li')
    //   dataSet.child('i').on('value', (snapshot) => {
    //     //displays entire object
    //     li.innerText = snapshot.val();
    //     li.id = snapshot.key;
    //     let munchies = JSON.stringify(snapshot.val(), null, 3);
    //     testingRef.appendChild(li);
    //   });
    // }

    return (
      <section>
        <ul id="poop">
          {cat}
        </ul>
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
