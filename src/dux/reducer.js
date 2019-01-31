const initialState={
  userAccount:{},
  userid: ''
}

// ACTION CONSTANTS
const GET_CURRENT_USER = 'GET_CURRENT_USER';
const GET_ACCOUNT = 'GET ACCOUNT';

// ACTION CREATORS
export function getCurrentUser({ userid }) {
  return {
    type: GET_CURRENT_USER,
    payload: userid
  }
}

export function getAccount(userInfo) {
  return {
    type: GET_ACCOUNT,
    payload: userInfo
  }
}

//REDUCER
function reducer(state=initialState,action){
   switch(action.type){
      case GET_CURRENT_USER:
        return { ...state, userid: action.payload}
      case GET_ACCOUNT:
        return { ...state, userAccount: action.payload };
      default: return state
   }
}

export default reducer;