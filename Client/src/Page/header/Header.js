import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Header.scss";

const Header = (props) => {
  const handleLogout = () => {
    localStorage.removeItem("islogin");
    props.LoginState(false);
  };


  return (
    <div className="headerc">
      <div className="p-3 text-center bg-white border-bottom headercus">
        <div className="container">
          <div className="row">
            <div className="col-md-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
              <Link to="/" className="ms-md-2">
                <img
                  src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
                  height={35}
                />
              </Link>
            </div>
            <div className="col-md-4">
              <div className="title">Perfume Shop</div>
            </div>
            <div className="col-md-4 d-flex justify-content-center justify-content-md-end align-items-center">
              <div className="d-flex">
                {/* Cart */}
                <Link to='/cart' className="text-reset me-3" href="#">
                  <span>
                    <i className="fas fa-shopping-cart" />
                  </span>
                  <span className="badge rounded-pill badge-notification bg-danger">
                   {props.CartNum}
                  </span>
                </Link>
                {/* Notification */}
                <div className="dropdown togglech ">
                  <a
                    className="text-reset me-3 dropdown-toggle hidden-arrow"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fas fa-bell" />
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end togglec "
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Some news
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another news
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                {props.isLogin === true ? (
                  <div className="dropdown togglech">
                    <a
                      className=" text-reset dropdown-toggle d-flex align-items-center hidden-arrow "
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="https://mdbootstrap.com/img/new/avatars/5.jpg"
                        className="rounded-circle"
                        height={22}
                        alt
                        loading="lazy"
                      />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end  togglec">
                      <li>
                        <a className="dropdown-item" href="#">
                          My profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={handleLogout}
                          className="dropdown-item"
                          href="#"
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <>
                    <div className="dropdown ">
                      <Link className="textc" to="/login">
                        Login
                      </Link>
                    </div>
                    <div className="dropdown ">
                      <Link className="textc" to="/register">
                        Register
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
