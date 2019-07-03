import React, { useReducer } from 'react';
import axios from 'axios';
import gitHubContext from './githubContext';
import githubReducer from './githubReducer';
import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING
} from '../types';

const GithubState = props => {
  const initalState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(githubReducer, initalState);

  //Search Users
  const searchUsers = async text => {
    //Loading
    setLoading();
    //Get Users by search
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    //Send users to state
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
  };

  //Get User
  const getUser = async username => {
    //Loading
    setLoading();
    //Get Users by search
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    //Send users to state
    dispatch({ type: GET_USER, payload: res.data });
  };

  //Get User Repos
  const getUserRepos = async username => {
    //Loading
    setLoading();
    //Get Users by search
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    //Send users to state
    dispatch({ type: GET_REPOS, payload: res.data });
  };

  //Clear Users
  const clearUsers = e => {
    //e.preventDefault();
    dispatch({
      type: CLEAR_USERS
    });
  };

  //Set Loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <gitHubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
      }}
    >
      {props.children}
    </gitHubContext.Provider>
  );
};

export default GithubState;
