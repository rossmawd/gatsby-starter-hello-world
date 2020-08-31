import React from 'react';
import { Link } from 'gatsby';

export default () => {
  return (
    <div>
      Not found!
      {/* <a href="/about">About</a> | <a href="/">Home</a>  */}
      <Link to="/about">About</Link>  <Link to="/">Home</Link>

    </div>
  );
}

