import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate,Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import '../../../src/background.css';
import { login } from "../slices/auth";
import { clearMessage } from "../slices/message";

const Login = () => {
  let navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });

  const handleLogin = (formValue) => {
    const { username, password } = formValue;
    setLoading(true);

    dispatch(login({ username, password }))
      .unwrap()
      .then(() => {
        navigate("/profile");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }

  return (
 <>
<div className="background"></div>

<div className="hama mt-3">
  <div className="register">
  <div className="row vh-100 d-flex justify-content-center">
      <div className="col-12 align-self-center">
          <div className="row">
              <div className="col-lg-5 mx-auto">
                  <div className="card">
                  <div className="card-body p-0 auth-header-box">
                          <div className="text-center p-3">
                              <a href="index.html" className="logo logo-admin">
                                  <img src="4.png" height="50" alt="logo" className="auth-logo"/>
                              </a>
                              <h4 className="text-muted  mb-0">Let's Get Started Dastone
</h4>   
                              <p className="text-muted  mb-0">Sign in to continue to DevHack.</p>  
                          </div>
                          </div>
                      <div className="card-body p-0">
                          <div className="tab-content">
                          
                              <div className="tab-pane active px-3 pt-3" id="Register_Tab" role="tabpanel">
                                  <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
              {({ errors, touched }) => (
                                  <Form>
                                    <center>
                                            <h2 className="form-title m-t0">Login</h2>
                                            </center>
                                            <hr/>    
                                            <div className="dz-separator-outer m-b5">
                                                <div className="dz-separator bg-primary style-liner"></div>
                                            </div>
                                           
                                            <div className="form-group mb-3">
                <label htmlFor="username">Username</label>
                <Field
                  name="username"
                  type="text"
                  className={
                    "form-control" +
                    (errors.username && touched.username ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <Field
                  name="password"
                  type="password"
                  className={
                    "form-control" +
                    (errors.password && touched.password ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
                                        
                                            <div className="form-group text-left mb-5 forget-main">
                                              
                <button
                  type="submit"
                  className="btn btn-primary "
                  disabled={loading}
                >
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Login   <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
  <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg> </span>
                </button>
                  
                            </div>                        
              </Form>
              )}
              </Formik>
              
                                        <div className="text-center bottom"> 
                                        <Link to={"/Register"}>
                                            <button className="btn btn-primary button-md btn-block" id="nav-sign-tab" data-bs-toggle="tab" data-bs-target="#nav-sign" type="button" role="tab" aria-controls="nav-sign" aria-selected="false">Create an account</button> 
                                            </Link>
                                        </div>
                                  </div>
                                </div>
                                </div>
                       
                            {message && (
        <div className="form-group">
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        </div>
      )}
     <br/>
										 
      <div className="card-footer">
                                    <div className=" bottom-footer clearfix m-t10 m-b20 row text-center">
                                    <div className="col-lg-12 text-center">
                                        <span> © Copyright by  <span className="heart"></span>
                                        <a href="/home"> DevHack </a>  All rights reserved.</span> 
                                    </div>
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
};

export default Login;
