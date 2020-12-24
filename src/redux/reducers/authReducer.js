import {
    Login,
    Logout,
  } from "../actions/actionConstant";
  
  const initialState = {
    credentials : {name: 'aaquib', password: '123'},
    loggedIn : false,
  };
  
  // Reducers
  const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
      case Login:
        return {
          ...state,
          loggedIn : true,
        };

        case Logout:
        return {
          ...state,
          loggedIn : false,
        };
  
      
      default:
        return state;
    }
  };
  
  export default AuthReducer;
  