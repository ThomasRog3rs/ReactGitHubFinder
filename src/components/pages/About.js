import React, { Fragment } from 'react';

const About = props => {
  return (
    <Fragment>
      <h1>About...</h1>
      <p>
        This is an app to search GitHub Users. Inspired by{' '}
        <a
          href="http://www.traversymedia.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brad Traversy
        </a>
      </p>
      created by&nbsp;
      <a
        href="http://www.trwebdev.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        trwebdev
      </a>
    </Fragment>
  );
};

export default About;
