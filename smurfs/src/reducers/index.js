/*
  Be sure to import in all of the action types from `../actions`
*/
import { GET_SMURFS, ADD_SMURF, UPDATE_SMURF, DELETE_SMURF, SUCCESS, FAILURE } from '../actions'; 

// /*
//  Your initial/default state for this project could *Although does not have to* look a lot like this
 
const initialState =
{
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null,
 };

 const reducer = (state = initialState, action) => {

switch (action.type) {
  case GET_SMURFS: 
    return {
      ...state, 
      smurfs: [],
      fetchingSmurfs: true,
      error: ''
    }
    case SUCCESS: 
      return {
        ...state, 
        smurfs: action.payload,
        fetchingSmurfs: false,
        error: ''
      }
    case FAILURE:
    return {
      ...state, 
      smurfs: [],
      fetchingSmurfs: false,
      error: action.payload
    }
    default: 
      return state;
}
};

export default reducer;

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
