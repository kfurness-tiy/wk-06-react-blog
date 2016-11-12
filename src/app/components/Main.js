'use strict';

import React from 'react';

import Content from './Content';
import Sidebar from './Sidebar'
import Footer from './Footer';
import appSass from './app.sass'

import blogData from './blog-posts.json';

let monthsArr = [];
const monthConst = blogData.map((c,i,a) => {
  if (monthsArr.includes(c.date.month) !== true) {
    monthsArr.push(c.date.month)
  }
  return monthsArr;
})

export default class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      blogData: blogData,
      type: "",
      id: "",
      monthConst: monthsArr,

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
    console.log('test:',this.state.id);
    console.log('const', this.state.monthConst);
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
