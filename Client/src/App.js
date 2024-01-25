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
import Cart from "./Page/Cart/Cart";
import Admin from "./Page/Admin/Admin"
import ConfirmedProduct from "./Page/Admin/Confirmed-product/Confirmed-product"

function App() {
  const [isLogin, setIslogin] = useState(false);
  const [CartNum, setCartNum] = useState(0);
  const [MyCart, setMyCart] = useState([]);
  const [Refresh, setRefresh] = useState(true);
  const LoginState = (check) => {
    setIslogin(check);
  };
  useEffect(() => { // ham khoi tao cua 1 component 
    //#region checklogin

    const status = localStorage.getItem("islogin");
    console.log(status);
    if (status != null && status == "true") {
      setIslogin(true);
      console.log("set");
    }
    //#endregion

    //#region checkCart
    const myCart = localStorage.getItem('mycart');
    if(myCart) {
      const myCartObj = JSON.parse(myCart);
      const countcart = myCartObj.length;
      setCartNum(countcart);
      setMyCart(myCartObj);
    }
    //#endregion
  },[]);

  const addCart = (newobj)=> {
    const temp = MyCart;
    newobj.quantity = 1 
    let check = false
    //kiem tra xem da co san pham nay chua
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].Id === newobj.Id) {
        // Nếu tìm thấy, tăng giá trị quantity lên 1
        temp[i].quantity += 1;
        check = true
        break; // Kết thúc vòng lặp sau khi tìm thấy đối tượng
      }
    }
    // nếu k thấy thì add product mới
    if (check = false){
      temp.push(newobj);
    }
    //temp.push(newobj);
    setMyCart(temp);
    setCartNum(temp.length)
    localStorage.setItem('mycart',JSON.stringify(temp));
   }
   const RefreshPage = () => {
    if(Refresh) {
      setRefresh(false);
    }
    else {
      setRefresh(true);
    }
   }
const TestC = () => {
  console.log(MyCart);
}
  return (
    <Router>
      <div className="App">
        <Header isLogin={isLogin} CartNum = {CartNum}  LoginState={LoginState} />
      <button onClick={TestC}>Check Cart</button>
        <Switch>
          <Route path="/" exact
           render={() => <Category setCartNum={addCart} />}  />
          <Route
            path="/login"
            render={() => <Login LoginState={LoginState} />}
          />
          <Route path="/register" component={Register} />
          <Route path="/admin" component={Admin}/>
          <Route path="confirmed-product" exact component={ConfirmedProduct}/>
          <Route path="/cart" component={Cart} />
          <Route path="/product" component={ProductDetails} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
