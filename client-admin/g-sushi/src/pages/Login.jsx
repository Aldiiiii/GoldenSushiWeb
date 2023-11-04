import { useState } from "react";
import { useDispatch } from 'react-redux'
import { getLoginStart } from "../stores/actions/actionCreators";
import {useNavigate} from "react-router-dom"


export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(getLoginStart({email: loginForm.email, password: loginForm.password}, navigate))
  }

  return (
    <>
      <div>
        <div className="container">
          <div
            className="row justify-content-center"
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  <div className="row">
                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                    <div className="col-lg-6">
                      <div className="p-5">
                        <div className="text-center">
                          <h1 className="h4 text-gray-900 mb-4">
                            Sign in to your account
                          </h1>
                        </div>
                        <form onSubmit={submitHandler} className="user">
                          <div className="form-group">
                            <input
                              name="email"
                              onChange={changeHandler}
                              autoComplete="username"
                              type="email"
                              className="form-control form-control-user"
                              aria-describedby="emailHelp"
                              placeholder="Enter Email Address..."
                            />
                          </div>
                          <div className="form-group">
                            <input
                              name="password"
                              // onChange={changeHandler}
                              onChange={changeHandler}

                              type="password"
                              className="form-control form-control-user"
                              placeholder="Password"
                              autoComplete="current-password"
                            />
                          </div>

                          <button
                            type="submit"
                            className="btn btn-primary btn-user btn-block"
                          >
                            Login
                          </button>
                          <hr />
                          {/* <a
                            href="index.html"
                            className="btn btn-google btn-user btn-block"
                          >
                            <i className="fab fa-google fa-fw"></i> Login with
                            Google
                          </a> */}
                        </form>
                        {/* <hr /> */}
                        {/* <div className="text-center">
                          <a className="small">Create an Account!</a>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
