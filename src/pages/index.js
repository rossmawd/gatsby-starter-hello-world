import React from "react"
import { Link } from 'gatsby';

export default function Home() {
  return (
  <div>
    <h1>This is the index page</h1>
<p>the autocomplete (whose proper name I've forgetten) is pretty shitty</p>    
{/* <a href="/about">About</a> | <a href="/">Home</a>  */}
<Link to="/about">About</Link>  <Link to="/">Home</Link>

    </div>)
}
