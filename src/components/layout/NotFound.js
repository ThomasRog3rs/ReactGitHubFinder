import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = props => {
  return (
    <div>
      <Link to={`/`} className="btn btn-dark btn-lg my-1">
        Go Home
      </Link>
      <h1>404: Page not found</h1>
      <p className="lead">
        The page you are looking for could not be found! :/
      </p>
    </div>
  );
};

export default NotFound;
