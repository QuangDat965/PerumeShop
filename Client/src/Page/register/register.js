import React, { useState } from 'react';
import './register.scss'
import { get, post } from '../../Api/Api';
import { useHistory } from 'react-router-dom';
import { Alert } from 'bootstrap';
function Register() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const history = useHistory();
  const handleRegister = async (e) => {
      e.preventDefault();
      const register = await post('register',{
        "Username": Name,
        "Password":Password,
        "Email": Email,
        "RoleId": 2
      })
      
    // Xử lý logic đăng ký
  };

  return (
   <div className='registerc'>
    <section className="vh-100 bg-image" style={{backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")'}}>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius: 15}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>
              <form>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example1cg">Your Full Name</label>
                  <input type="text" id="form3Example1cg" value={Name} onChange={(e) => setName(e.target.value)} className="form-control form-control-lg" placeholder = "Enter a valid name" />
                </div>
                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                  <input type="email" id="form3Example3cg" value={Email} onChange={(e) => setEmail(e.target.value)} className="form-control form-control-lg" placeholder = "Enter a valid Email" />
                </div>
                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example4cg">Password</label>
                  <input type="password" id="form3Example4cg" value={Password} onChange={(e) => setPassword(e.target.value)} className="form-control form-control-lg" placeholder = "Enter a valid Password" />
                </div>
                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                  <input type="password" id="form3Example4cdg" className="form-control form-control-lg" />
                </div>
                <div className="form-check d-flex justify-content-center mb-5">
                  <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3cg" />
                  <label className="form-check-label" htmlFor="form2Example3cg">
                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <button onClick={handleRegister} type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>
                <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!" className="fw-bold text-body"><u>Login here</u></a></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

   </div>
  );
}

export default Register;
