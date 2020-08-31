import React from 'react';
import { Link } from 'gatsby';


function about(props) {
  return (
    <div>
      <h1>This is the about page</h1>
      <p>the autocomplete (whose proper name I've forgetten) is pretty shitty</p>
      {/* <a href="/about">About</a> | <a href="/">Home</a>  */}
      <Link to="/about">About</Link>  <Link to="/">Home</Link>
    </div>
  );
}

export default about;

