import { Login, Logout } from "../actions/actionConstant";


const initialState = {
  credentials: { email: "aaquib@gmail.com", password: "123" },
  loggedIn: false,
};

// Reducers
const AuthReducer = (state = initialState, action) => {
    
  switch (action.type) {
    case Login:
      let log = false;
      if ( action.payload.email == state.credentials.email &&
        action.payload.password == state.credentials.password
      ) {
        log = true;
        
      } else {
        alert("wrong credentials");
      }
      return {
        ...state,
        loggedIn: log,
      };

    case Logout:
      return {
        ...state,
        loggedIn: false,
      };

    default:
      return state;
  }
};

export default AuthReducer;
