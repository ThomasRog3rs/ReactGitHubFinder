import React, { Fragment, Component } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired
  };
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
      company
    } = this.props.user;

    const { loading } = this.props;
    if (loading === true) {
      return <Spinner />;
    }
    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          <i className="fas fa-home" /> &nbsp; Home
        </Link>
        Hireable:{' '}
        {hireable ? (
          <i className="fas fa-check text-success" />
        ) : (
          <i className="fas fa-times text-danger" />
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              className="round-img"
              alt="avatar"
              style={{ width: '150px' }}
            />
            <h1>Name: {name}</h1>
            <p>
              Location:{' '}
              {location != null ? <Fragment>{location}</Fragment> : 'Unknown'}
            </p>
          </div>
          <div>
            {bio != null ? (
              <Fragment>
                <h3>Bio:</h3>
                <p>{bio}</p>
              </Fragment>
            ) : (
              <p className="text-danger">This user has no bio</p>
            )}
            <a
              href={html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark btn-block my-1 text-center"
            >
              View Profile
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username: </strong>
                    {login}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Website: </strong>
                    {blog}
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company: </strong>
                    {company}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers: {followers}</div>
          <div className="badge badge-success">Following: {following}</div>
          <div className="badge badge-light">Repos: {public_repos}</div>
          <div className="badge badge-dark">Gists: {public_gists}</div>
        </div>
      </Fragment>
    );
  }
}

export default User;
