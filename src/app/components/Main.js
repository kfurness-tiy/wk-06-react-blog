'use strict';

import React from 'react';

import Content from './Content';
import Sidebar from './Sidebar'
import Footer from './Footer';
import appSass from './app.sass';

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

let blogData = [];
let tagConst = [];
let monthConst = [];

function updateBlog(val, id) {
  blogData.push(val);
  monthConst.push(val.date.month);
  val.tags.forEach((tag) => {
    tagConst.push(tag);
  });
}

const sidebarConst = (arr, content) => {
  let newArr = [];
  arr.map(function(c,i,a) {
    if (newArr.includes(c) !== true) {
      newArr.push(c);
    }
    if(content === 'tag') {
      newArr.sort();
    }
  });
  console.log(newArr);
  return newArr;
}
// const monthConst = function() {
//   let monthsArr = [];
//   blogData.map((c,i,a) => {
//     if (monthsArr.includes(c.date.month) !== true) {
//       monthsArr.push(c.date.month)
//     }
//   });
//   return monthsArr;
// };
//
// const tagConst = function() {
//   let tagArr = [];
//   blogData.map((c,i,a) => {
//     blogData[i].tags.map(function (c,i,a) {
//       if (tagArr.indexOf(c) === -1) {
//         tagArr.push(c);
//         tagArr.sort();
//       }
//     })
//   });
//   return tagArr;
// };

export default class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      blogData: blogData,
      tagConst: [],
      monthConst: [],
      type: "",
      id: "",
    }
  };

  componentWillMount() {
    fbRef.on("child_added", (snapshot) => {
      updateBlog(snapshot.val(), snapshot.key);
      this.setState({
        blogData: blogData,
        monthConst: monthConst,
        tagConst: tagConst
      });
    }).bind(this)
  }



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
    let monthConst = sidebarConst(this.state.monthConst, "month");
    let tagConst = sidebarConst(this.state.tagConst, "tag");
    return (
      <div className="parentContainer">
        <main className="center-block">
          <Content
            blogData={this.state.blogData}
            type={this.state.type}
            id={this.state.id} />
          <Sidebar
            setSearch = {this.setSearch.bind(this)}
            blogData={this.state.blogData}
            monthConst={monthConst}
            tagConst={tagConst}
            type={this.state.type}
            id={this.state.id}  />
        </main>
      </div>
    );
  }
}
