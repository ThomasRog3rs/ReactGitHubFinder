import React, { useReducer } from 'react';
import axios from 'axios';
import gitHubContext from './githubContext';
import githubReducer from './githubReducer';
import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT
} from '../types';
