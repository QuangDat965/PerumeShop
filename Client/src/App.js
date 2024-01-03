import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Page/header/Header';
import Footer from './Page/footer/footer';
import Login from './Page/login/login';
import Register from './Page/register/register';
import './App.css'
import { Navbar } from './Page/navbar/Navbar';
import { Category } from './Page/Category/Category';
import { ProductDetails } from './Page/product/ProductDetails';


function App() {




  return (

       <Router>
      <div className="App">
        <Header  />

        <Switch>
        
          <Route path="/" exact component={Category} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} /> 
          <Route path="/product" component={ProductDetails} /> 
        
        </Switch>
        <Footer />
      </div>
    </Router>
  

   
  );
}

export default App;

