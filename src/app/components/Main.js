'use strict';

import React from 'react';

import Content from './Content';
import Sidebar from './Sidebar'
import Footer from './Footer';
import appSass from './app.sass';

import blogData from './blog-posts.json';

import * as firebase from 'firebase';

const config = {
   apiKey: "AIzaSyDZsopeGTmpwtwidj2kpTSk1t6r_vF0_fo",
   authDomain: "wk-06-react-blog.firebaseapp.com",
   databaseURL: "https://wk-06-react-blog.firebaseio.com",
   storageBucket: "wk-06-react-blog.appspot.com",
   messagingSenderId: "684579050010"
 };
 firebase.initializeApp(config);

const fbRef = firebase.database().ref();
const tester = fbRef.child('0');
const anotherTest = tester.child('title');
anotherTest.on('value', (snapshot) => {
  //displays entire object
  console.log(JSON.stringify(snapshot.val(), null, 3));
});
// fbRef.child().on('value', (snapshot) => {
//   //displays entire object
//   console.log(JSON.stringify(snapshot.val(), null, 3));
// });


const monthConst = function() {
  let monthsArr = [];
  blogData.map((c,i,a) => {
    if (monthsArr.includes(c.date.month) !== true) {
      monthsArr.push(c.date.month)
    }
  });
  return monthsArr;
};

const tagConst = function() {
  let tagArr = [];
  blogData.map((c,i,a) => {
    blogData[i].tags.map(function (c,i,a) {
      if (tagArr.indexOf(c) === -1) {
        tagArr.push(c);
        tagArr.sort();
      }
    })
  });
  return tagArr;
};

export default class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      blogData: fbRef,
      type: "",
      id: "",
      monthConst: monthConst(),
      tagConst: tagConst()
    }
  };

  setSearch(type, id) {
    this.setState({
      type: type,
      id: id,
      blogData: this.setSearchResults(type, id)
    });
  }

  setSearchResults(type, id) {
    let arr = [];
    if (type === "month") {
      blogData.map((c,i,a) => {
        if (c.date.month === id) {
        arr.push(c);
        }
      } )
    }
    else if (type === "tag") {
      blogData.map((c,i,a) => {
        if (c.tags.includes(id)) {
        arr.push(c);
        }
      })
    }
    console.log('arr: ', arr)
    return arr
  }

  render () {
    return (
      <div className="parentContainer">
        <main className="center-block">
          <Content
            blogData={this.state.blogData}
            type={this.state.type}
            id={this.state.id} />
          <Sidebar
            setSearch={this.setSearch.bind(this)} blogData={this.state.blogData}
            monthConst={this.state.monthConst}
            tagConst={this.state.tagConst}
            type={this.state.type}
            id={this.state.id}  />
        </main>
      </div>
    );
  }
}

//WIP Sidebar Make Tags section
//WIP Tags, list out the array of tags
//WIP Sidebar Make Months section
//WIP Months, list out the array of months
