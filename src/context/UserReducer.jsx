const UserReducer = (state, action) => {
  switch(action.type) {
    case 'UPDATE_USER' :
      return {
        ...state,
        user: action.payload
      }
    case 'UPDATE_VIEW': 
      return {
        ...state,
        actualView: action.payload
      }
    default:
      return state
  }
}

export { UserReducer }