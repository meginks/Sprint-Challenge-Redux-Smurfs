/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHING, ADD_SMURF, ADDING_SMURF, UPDATE_SMURF, DELETE_SMURF, SUCCESS, FAILURE } from '../actions'; 

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
  // Cases for getting smurfs 
  case FETCHING: 
    return {
      ...state, 
      smurfs: [],
      fetchingSmurfs: true,
      deletingSmurf: false,
      addingSmurf: false,
      updatingSmurf: false,
      error: ''
    }
    case SUCCESS: 
      return {
        ...state, 
        smurfs: action.payload,
        fetchingSmurfs: false,
        addingSmurf: false,
        deletingSmurf: false,
        updatingSmurf: false,
        error: ''
      }
    case FAILURE:
    return {
      ...state, 
      smurfs: [],
      fetchingSmurfs: false,
      addingSmurf: false,
      deletingSmurf: false,
      updatingSmurf: false,
      error: action.payload
    }
    // Adding smurf 
    case ADDING_SMURF: 
      return {
        ...state, 
        addingSmurf: true
      }

    case ADD_SMURF: 
    const newSmurf = action.payload
    return {
      ...state, 
      smurfs: [...state.smurfs, newSmurf],
      addingSmurf: false
    }

    // // Updating smurfs 
    case UPDATE_SMURF: 
    return {
      ...state
    }

    // Deleting Smurf
    case DELETE_SMURF: 
    return {
      ...state, 
      smurfs: [state.smurfs.filter(smurf => smurf.id !== action.payload)]
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
