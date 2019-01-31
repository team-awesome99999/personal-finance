const initialState={
  userid: '',
  firstname: '',
  accountBalance: {},
  accountDates: {}
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

export function getAccount({ balances, entrydate }) {
  return {
    type: GET_ACCOUNT,
    payload: {
      balances,
      entrydate
    }
  }
}

//REDUCER
function reducer(state=initialState,action){
   switch(action.type){
      case GET_CURRENT_USER:
        return { ...state, userid: action.payload}
      case GET_ACCOUNT:
        return { ...state, accountBalance: this.payload.balances, accountDates: this.payload.entrydate };
      default: return state
   }
}

export default reducer;