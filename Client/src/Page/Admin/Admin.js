import "./Admin.css"


import React from 'react';

const Admin = () => {
  // ... your component logic here ...

return(
    <div>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Admin Dashboard</title>
    <link rel="stylesheet" href="styles.css" />
    <div className="row">
        <div className="col-3">
        <ul className="admin-menu">
            <li className="menu-item">
            <a href="#">Trang chủ</a>
            </li>
            <li className="menu-item">
            Quản lý người dùng
            <ul>
                <li className="menu-item">
                <a href="#">Danh sách người dùng</a>
                </li>
                <li className="menu-item">
                <a href="#">Tạo tài khoản</a>
                </li>
            </ul>
            </li>
            <li className="menu-item">
            Quản lý sản phẩm
            <ul>
                <li className="menu-item">
                <a href="#">Danh sách sản phẩm</a>
                </li>
                <li className="menu-item">
                <a href="#">Tạo sản phẩm</a>
                </li>
            </ul>
            </li>
            <li className="menu-item">
            <a href="#">Quản lý đặt tour</a>
            </li>
        </ul>
        </div>
        <div className="col-9">
        <div className="admin-content">
            {/* Content will be rendered here */}
        </div>
        </div>
    </div>
    </div>
)}
export default Admin;
