import { createContext, useReducer, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

// Function to decode JWT and get expiration time
function getJwtExpiration(token) {
  const decodedToken = jwtDecode(token);
  return decodedToken.exp * 1000; // Convert to milliseconds
}

// Function to set a timer to remove the JWT when it expires
function setJwtExpiryTimer(token, dispatch) {
  const expirationTime = getJwtExpiration(token);
  const currentTime = Date.now();
  const timeUntilExpiration = expirationTime - currentTime;

  if (timeUntilExpiration > 0) {
    setTimeout(() => {
      localStorage.removeItem("user");
      localStorage.removeItem("role");
      dispatch({ type: "LOGOUT" });
      console.log("JWT has expired and has been removed from local storage");
    }, timeUntilExpiration);
  } else {
    // If the token is already expired, remove it immediately
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    dispatch({ type: "LOGOUT" });
  }
}

// Function to save the JWT and set up the timer
function saveJwt(token, dispatch) {
  //localStorage.setItem('jwt', token);
  setJwtExpiryTimer(token, dispatch);
}

// Example usage:
//const token = 'your.jwt.token';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  // State for the auth context.
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("user", user);
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
      saveJwt(user.token, dispatch);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
