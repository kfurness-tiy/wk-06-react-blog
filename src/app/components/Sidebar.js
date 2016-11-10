'use strict';

import React from 'react';
import sidebar from './_Sidebar.sass';
import Months from './Months';
import Tags from './Tags';

export default class Sidebar extends React.Component {
  render () {
    return (
      <div className="sidebar col-sm-3">
        <h3>Archives</h3>
        <h4>Dates</h4>
        <Months
          setSearch={this.props.setSearch}
          blogData={this.props.blogData}
          searchType={this.props.searchType}
          searchValue={this.props.searchValue}  />
        <h4>Tags </h4>
        <Tags blogData={this.props.blogData} />
      </div>
    );
  }
}
