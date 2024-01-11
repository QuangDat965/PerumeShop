import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Page/header/Header";
import Footer from "./Page/footer/footer";
import Login from "./Page/login/login";
import Register from "./Page/register/register";
import "./App.css";
import { Navbar } from "./Page/navbar/Navbar";
import { Category } from "./Page/Category/Category";
import { ProductDetails } from "./Page/product/ProductDetails";

function App() {
  const [isLogin, setIslogin] = useState(false);
  const LoginState = (check) => {
    setIslogin(check);
  };
  useEffect(() => { // ham khoi tao cua 1 component 
    const status = localStorage.getItem("islogin");
    console.log(status);
    if (status != null && status == "true") {
      setIslogin(true);
      console.log("set");
    }
  });

  return (
    <Router>
      <div className="App">
        <Header isLogin={isLogin}  LoginState={LoginState} />

        <Switch>
          <Route path="/" exact component={Category} />
          <Route
            path="/login"
            render={() => <Login LoginState={LoginState} />}
          />
          <Route path="/register" component={Register} />
          <Route path="/product" component={ProductDetails} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
