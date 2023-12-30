import React from 'react';

function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    // Xử lý logic đăng nhập
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h2>Đăng nhập</h2>
              <button type="button" className="btn-close" aria-label="Close"></button>
            </div>
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Tên đăng nhập</label>
                  <input type="text" className="form-control" id="username" placeholder="Nhập tên đăng nhập" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Mật khẩu</label>
                  <input type="password" className="form-control" id="password" placeholder="Nhập mật khẩu" />
                </div>
                <button type="submit" className="btn btn-primary">Đăng nhập</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
