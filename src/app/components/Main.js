'use strict';

import React from 'react';

import Content from './Content';
import Sidebar from './Sidebar'
import Footer from './Footer';
import appSass from './app.sass'

import blogData from './blog-posts.json';

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
      blogData: blogData,
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
