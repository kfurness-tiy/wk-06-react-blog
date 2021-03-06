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
          monthConst={this.props.monthConst}
          type={this.props.type}
          id={this.props.id}  />
        <h4>Tags </h4>
        <Tags
          setSearch={this.props.setSearch}
          blogData={this.props.blogData}
          tagConst={this.props.tagConst}
          type={this.props.type}
          id={this.props.id}  />
      </div>
    );
  }
}
