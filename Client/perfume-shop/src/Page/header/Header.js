import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Header.scss'

const Header = (props) => {
  console.log(props);

  return (
    <div className='headerc'>
      <div className="p-3 text-center bg-white border-bottom headercus">
          <div className="container">
            <div className="row">
              <div className="col-md-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
                <Link to="/" className="ms-md-2">
                  <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height={35} />
                </Link>
              </div>
              <div className="col-md-4">
                <form className="d-flex input-group w-auto my-auto mb-3 mb-md-0">
                  <input autoComplete="off" type="search" className="form-control rounded" placeholder="Search" />
                  <span className="input-group-text border-0 d-none d-lg-flex"><i className="fas fa-search" /></span>
                </form>
              </div>
              <div className="col-md-4 d-flex justify-content-center justify-content-md-end align-items-center">
                <div className="d-flex">
                  {/* Cart */}
                  <a className="text-reset me-3" href="#">
                    <span><i className="fas fa-shopping-cart" /></span>
                    <span className="badge rounded-pill badge-notification bg-danger">1</span>
                  </a>
                  {/* Notification */}
                  <div className="dropdown">
                    <a className="text-reset me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                      <i className="fas fa-bell" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="navbarDropdownMenuLink">
                      <li><a className="dropdown-item" href="#">Some news</a></li>
                      <li><a className="dropdown-item" href="#">Another news</a></li>
                      <li>
                        <a className="dropdown-item" href="#">Something else here</a>
                      </li>
                    </ul>
                  </div>
        
                  {/* User */}
                  <div className="dropdown ">
                    <a className="text-reset dropdown-toggle d-flex align-items-center hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                      <img src="https://mdbootstrap.com/img/new/avatars/5.jpg" className="rounded-circle" height={22} alt loading="lazy" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end " >
                      <li><a className="dropdown-item" href="#">My profile</a></li>
                      <li><a className="dropdown-item" href="#">Settings</a></li>
                      <li><a className="dropdown-item" href="#">Logout</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Header;
