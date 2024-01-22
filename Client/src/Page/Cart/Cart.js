//import React, { useState } from 'react';
import React, { useState, useEffect } from "react";

import './Cart.scss'


const Cart = () => {
  const [Products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);

    useEffect(() => {
    const products = localStorage.getItem('mycart');
    if (products){
      setProducts(JSON.parse(products));
    }
    }, []);
  
  const handleDecrease = () => {
      if (quantity > 1){
        setQuantity(quantity - 1);
        // sau khi set quantity thì set lai var số lượng trong local

      }
  };
  // XỬ lý event ấn  +
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
    



  return (
   <div className='cartc'>

  <div className="card">
  <div className="row">
    <div className="col-md-8 cart">
      
      <div className="title">
        <div className="row">
          <div className="col"><h4><b>Shopping Cart</b></h4></div>
          <div className="col align-self-center text-right text-muted">3 items</div>
        </div>
      </div> 
      <div className="row">
        {Products.map((e,i) => {
          return (
          <div key={i} className="row main align-items-center">
            <div className="col-2"><img className="img-fluid" src="https://xxivstore.com/wp-content/uploads/2020/05/Nuoc-hoa-Dior-Sauvage-EDT.png" /></div>
            <div className="col">
              <div className="row mb-2 "> {e.Name} </div>
              <div className="row text-default product-price">{e.Description}</div>
            </div>
            <div className="col quantity-container">
            <div className="col product-price">{e.Price}</div>
              <a href="#" className="quantity-btn" onClick={handleDecrease}>-</a>
              <a href="#" className="border quantity-display">{quantity}</a>
              <a href="#" className="quantity-btn" onClick={handleIncrease}>+</a>
            </div>
            <div className="col text-default product-price">{e.Price * quantity}</div>
          </div>
          )
        })};
      </div>
      <div className="back-to-shop"><a href="#">←</a><span className="text-muted">Back to shop</span></div>
    </div>

    <div className="col-md-4 summary">
      <div><h5><b>Summary</b></h5></div>
      <hr />
      <div className="row">
        <div className="col" style={{paddingLeft: 0}}>ITEMS 3</div>
        <div className="col text-right">€ 132.00</div>
      </div>
      <form>
        <p>SHIPPING</p>
        <select><option className="text-muted">Standard-Delivery- €5.00</option></select>
        <p>GIVE CODE</p>
        <input id="code" placeholder="Enter your code" />
      </form>
      <div className="row" style={{borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0'}}>
        <div className="col">TOTAL PRICE</div>
        <div className="col text-right">€ 137.00</div>
      </div>
      <button className="btn">CHECKOUT</button>
    </div>
  </div>
</div>

   </div>
  );
};

export default Cart;
