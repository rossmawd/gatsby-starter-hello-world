import React from 'react';
import { Link } from 'gatsby';
import styles from './404.module.scss'

export default () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.header} >Page not found</h1>
      <p className={styles.errorMessage}>the page you are looking for does not exist</p>
      {/* <a href="/about">About</a> | <a href="/">Home</a>  */}
      <Link to="/about">About</Link>  <Link to="/">Home</Link>

    </div>
  );
}

