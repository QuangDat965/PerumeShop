import React, { useEffect, useState } from 'react'
import './Category.scss'
import { Product } from './Product'

export const Category = () => {

  const products = [{
    imgSrc: 'https://golmart.com.vn/wp-content/uploads/2020/02/nuoc-hoa-13-2048x1492.jpg',
    title: 'Nước hoa xịn',
    desc: 'hàng tàu',
    vote: 0,
    price: 1000

  },
  {
    imgSrc: 'https://golmart.com.vn/wp-content/uploads/2020/02/nuoc-hoa-13-2048x1492.jpg',
    title: 'Nước hoa xịn',
    desc: 'hàng tàu',
    vote: 0,
    price: 1000

  },
  {
    imgSrc: 'https://golmart.com.vn/wp-content/uploads/2020/02/nuoc-hoa-13-2048x1492.jpg',
    title: 'Nước hoa xịn',
    desc: 'hàng tàu',
    vote: 0,
    price: 1000

  }
    , {
    imgSrc: 'https://golmart.com.vn/wp-content/uploads/2020/02/nuoc-hoa-13-2048x1492.jpg',
    title: 'Nước hoa xịn',
    desc: 'hàng tàu',
    vote: 0,
    price: 1000

  },
  {
    imgSrc: 'https://golmart.com.vn/wp-content/uploads/2020/02/nuoc-hoa-13-2048x1492.jpg',
    title: 'Nước hoa xịn',
    desc: 'hàng tàu',
    vote: 0,
    price: 1000

  },
  {
    imgSrc: 'https://golmart.com.vn/wp-content/uploads/2020/02/nuoc-hoa-13-2048x1492.jpg',
    title: 'Nước hoa xịn',
    desc: 'hàng tàu',
    vote: 0,
    price: 1000

  }
  ,
  {
    imgSrc: 'https://golmart.com.vn/wp-content/uploads/2020/02/nuoc-hoa-13-2048x1492.jpg',
    title: 'Nước hoa xịn',
    desc: 'hàng tàu',
    vote: 0,
    price: 1000

  }
  ,
  {
    imgSrc: 'https://golmart.com.vn/wp-content/uploads/2020/02/nuoc-hoa-13-2048x1492.jpg',
    title: 'Nước hoa xịn',
    desc: 'hàng tàu',
    vote: 0,
    price: 1000

  }];
  return (
    <div className='categoryc'>

      <nav className="navbar navbar-expand-sm navbar-light bg-white border-bottom">
        <a className="navbar-brand ml-2 font-weight-bold" href="#"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor" aria-controls="navbarColor" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarColor">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="#">Women's</a> </li>
            <li className="nav-item"><a className="nav-link" href="#">Men's</a> </li>
            <li className="nav-item "><a className="nav-link" href="#">Home</a> </li>
            <li className="nav-item "><a className="nav-link" href="#">Sale</a> </li>
          </ul>
        </div>
      </nav>
      <div className="filter">
        <button className="btn btn-default" type="button" data-toggle="collapse" data-target="#mobile-filter" aria-expanded="false" aria-controls="mobile-filter">Filters<span className="fa fa-filter pl-1" /></button>
      </div>

      <section id="sidebar">
        <div>
          <h6 className="p-1  border-bottom border-3 border-secondary">Danh Mục</h6>
          <ul>
            <li><a href="#"></a></li>
            <li><a href="#">Nước hoa nam</a></li>
            <li><a href="#">Nước hoa nữ</a></li>
            <li><a href="#">Nước hoa chiết</a></li>
            <li><a href="#">Nước hoa unisex</a></li>
          </ul>
        </div>
       
        <div>
          <h6 className="p-1 border-bottom border-3 border-secondary">Filter By</h6>
          <p className="mb-2">Color</p>
          <ul className="list-group">
            <li className="list-group-item list-group-item-action mb-2 rounded"><a href="#">
              <span className="fa fa-circle pr-1" id="red" />Red
            </a></li>
            <li className="list-group-item list-group-item-action mb-2 rounded"><a href="#">
              <span className="fa fa-circle pr-1" id="teal" />Teal
            </a></li>
            <li className="list-group-item list-group-item-action mb-2 rounded"><a href="#">
              <span className="fa fa-circle pr-1" id="blue" />Blue
            </a></li>
          </ul>
        </div>
        <div>
          <h6>Type</h6>
          <form className="ml-md-2">
            <div className="form-inline border rounded p-sm-2 my-2">
              <input type="radio" name="type" id="boring" />
              <label htmlFor="boring" className="pl-1 pt-sm-0 pt-1">Boring</label>
            </div>
            <div className="form-inline border rounded p-sm-2 my-2">
              <input type="radio" name="type" id="ugly" />
              <label htmlFor="ugly" className="pl-1 pt-sm-0 pt-1">Ugly</label>
            </div>
            <div className="form-inline border rounded p-md-2 p-sm-1">
              <input type="radio" name="type" id="notugly" />
              <label htmlFor="notugly" className="pl-1 pt-sm-0 pt-1">Not Ugly</label>
            </div>
          </form>
        </div>
      </section>
      <section id="products">
        <div className="container mt-3 border p-4">
          <div className="row">
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0"><i className="fas fa-search" /></span>
                <input type="text" className="form-control border-start-0 rounded-0" placeholder="Search" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group">
                <select className="form-select" id="inputGroupSelect04">
                  <option selected>Sort by</option>
                  <option value={1}>Name</option>
                  <option value={2}>Date</option>
                  <option value={3}>Price</option>
                </select>
                <button className="btn btn-outline-secondary" type="button">Sort</button>
              </div>
            </div>
          </div>
        </div>


        <Product products={products}></Product>
      </section>



    </div>


  )
}
