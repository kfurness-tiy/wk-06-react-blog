'use strict';

import React from 'react';

export class Post extends React.Component {
  render() {
    return (
      <div>
        <h2>Blog Name</h2>
        <time> Date & Time </time>
        <p>Content</p>
      </div>
    );
  }
}
