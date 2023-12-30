import React from 'react';

function Footer() {
  return (
    <footer className="mt-4 p-3 text-center bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Thông tin liên hệ</h5>
            <p>123 Đường ABC, Quận XYZ, Thành phố ABC</p>
            <p>Email: info@shopnuochoa.com</p>
            <p>Số điện thoại: 0123 456 789</p>
          </div>
          <div className="col-md-6">
            <h5>Liên kết hữu ích</h5>
            <ul className="list-unstyled">
              <li><a href="#">Điều khoản sử dụng</a></li>
              <li><a href="#">Chính sách bảo mật</a></li>
              <li><a href="#">Hỗ trợ</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <p>Shop Nước Hoa &copy; 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
