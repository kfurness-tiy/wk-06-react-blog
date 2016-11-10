'use strict';

import React from 'react';

import Content from './Content';
import Sidebar from './Sidebar'
import Footer from './Footer';
import appSass from './app.sass'

import blogData from './blog-posts.json';


export default class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      blogData: blogData,
      searchType: "",
      searchValue: "",
    }
  };

  setSearch(type, id) {
    this.setState({
      searchType: type,
      searchValue: id,
      blogDate: this.setBlogData(type, id)
    });
  }

  setBlogData(type, id) {
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
  }

  render () {
    return (
      <div className="parentContainer">
        <main className="center-block">
          <Content blogData={this.state.blogData} />
          <Sidebar
            setSearch={this.setSearch.bind(this)} blogData={this.state.blogData}
            searchType={this.state.searchType}
            searchValue={this.state.searchValue}  />
        </main>
      </div>
    );
  }
}

//WIP Sidebar Make Tags section
//WIP Tags, list out the array of tags
//WIP Sidebar Make Months section
//WIP Months, list out the array of months
