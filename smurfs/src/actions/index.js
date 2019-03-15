import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
const ADD_SMURF = 'ADD_SMURF';
const GET_SMURFS = 'GET_SMURFS';
const UPDATE_SMURF = 'UPDATE_SMURF';
const DELETE_SMURF = 'DELETE_SMURF';

const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

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

export const getSmurf = () = dispatch => {
  dispatch({ GET_SMURFS }) 
  axios 
  .get('http://localhost:3333/smurfs/')
  .then(res => {
    console.log("res",res);
    dispatch({ 
      type: SUCCESS, 
      payload: res.data.smurfs
    })
  })
  .catch(err => {
    dispatch({
      type: FAILURE, 
      payload: err.response.data.error.message
    })
  })
}; 