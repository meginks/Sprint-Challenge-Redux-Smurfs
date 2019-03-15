import axios from 'axios';
import { bindActionCreators } from 'redux';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const ADD_SMURF = 'ADD_SMURF';
export const GET_SMURFS = 'GET_SMURFS';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

const URL = 'http://localhost:3333/smurfs/';

export const getSmurf = () => dispatch => {
  dispatch({type: FETCHING})
 return axios 
  .get(URL)
  .then(res => {
    console.log("res",res);
    dispatch({ 
      type: SUCCESS, 
      payload: res.data
    })
  })
  .catch(err => {
    dispatch({
      type: FAILURE, 
      payload: err
    })
  })
}; 

export const addSmurf = (smurf) => {
  return {
  type: ADD_SMURF,
  payload: smurf
  }
}

export const deleteSmurf = (id) => {
  return {
    type: DELETE_SMURF,
    payload: id
  }
}

export const updateSmurf = (id) => {
  return {
    type: UPDATE_SMURF,
    payload: id
  }
}