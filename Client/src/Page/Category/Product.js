//import React from "react";
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './Product.scss'

//Component tạo sao
const Star = ({ isHighlighted }) => (
  <i className={`fa fa-star star ${isHighlighted ? 'highlight' : ''}`} />
);

const determineHighlightedStars = (rate) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(i <= rate);
  }
  return stars;
};

// Component tạo sản phẩm
export const Product = (props) => {
  

  const handleAddToCart = (e) => {
    props.setCartNum(e);
  }
  
  return (
    <div className="container">
      <div className="row">
        {props.products.map((e, i) => {
          //
          return (
            <div key={i} className="col-sm-2 mb-3">
              <div className="card ">
                <div className="card-body">
                  <div className="card-img-actions">
                    <img
                      src="https://xxivstore.com/wp-content/uploads/2020/05/Nuoc-hoa-Dior-Sauvage-EDT.png"
                      //src={e.ImageSr}
                      className="card-img img-fluid"
                      width={96}
                      height={350}
                      alt
                    />
                  </div>
                </div>
                <div className="card-body bg-light text-center">
                  <div className="mb-2">
                    <h6 className="font-weight-semibold mb-2">
                      <a
                        href="#"
                        className="text-default mb-2"
                        data-abc="true"
                      >
                        {e.Name}
                      </a>
                    </h6>
                    <a href="#" className="text-muted r-linec" data-abc="true">
                      {e.Description}
                    </a>
                  </div>
                  <h3 className="mb-0 font-weight-semibold product-price">{e.Price}</h3>
                  <div>
                  <div className="star-rating">
                  {determineHighlightedStars(e.Rates).map((isHighlighted, starIndex) => (
                      <Star
                        key={starIndex}
                        isHighlighted={isHighlighted}
                      />
                    ))} 
                    <div className="rating-number">{e.Rates}</div>
                  </div>
                  </div>
                  <div className="right">
                    <Link
                      to="/product"
                      className="btn btn-sm btn-outline-primary me-1"
                    >
                      <i className="fas fa-eye"></i>
                    </Link>
                    <button onClick={()=> handleAddToCart(e)} className="btn btn-sm btn-outline-success">
                      <i className="fas fa-cart-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
