import React, { useEffect, createContext, useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (username, password) => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = (props) => {
  // const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const login = (username, password) => {
    //alert("user name submitted: " + username);
    //*** Here you can call your API to authenticate the user  *** */
    if (username === "jafar@gmail.com" && password === "admin123") {
      localStorage.setItem("isLoggedIn", "1");
      setIsLoggedIn(true);
      //navigate("/");
      // alert("Login success : " + username);
    } else {
      alert(
        "Login Failed. Enter - User name: jafar@gmail.com; Password: admin123"
      );
      setIsLoggedIn(false);
    }
  };

  const logout = () => {
    // Here you can call your API to log the user out
    // If log out is successful, set isLoggedIn to false
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    // alert("let's logout");
  };

  // const contextValue = {
  //   token: token,
  //   isLoggedIn: isLoggedIn,
  //   login: login,
  //   logout: logout,
  // };

  return (
    <AuthContext.Provider value={{ token, isLoggedIn, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
