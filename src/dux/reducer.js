const initialState={
  userid: ''
}

// ACTION CONSTANTS
const GET_CURRENT_USER = 'GET_CURRENT_USER';


// ACTION CREATORS
export function getCurrentUser({ userid }) {
  return {
    type: GET_CURRENT_USER,
    payload: userid
  }
}

//REDUCER
function reducer(state=initialState,action){
   switch(action.type){
      case GET_CURRENT_USER:
        return { ...state, userid: action.payload}
      default: return state
   }
}

export default reducer;