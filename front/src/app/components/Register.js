import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import UserService from "../services/user.service";
import { register } from "../slices/auth";
import { clearMessage } from "../slices/message";
import '../../../src/background.css';
const Register = () => {
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: "",
    email: "",
    password: "",
    profil: "",
    verificationCode: "", 
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .test(
        "len",
        "The username must be between 3 and 20 characters.",
        (val) =>
          val && val.toString().length >= 3 && val.toString().length <= 20
      )
      .required("This field is required!"),
    email: Yup.string()
      .email("This is not a valid email.")
      .required("This field is required!"),
    password: Yup.string()
      .test(
        "len",
        "The password must be between 6 and 40 characters.",
        (val) =>
          val && val.toString().length >= 6 && val.toString().length <= 40
      )
      .required("This field is required!"),
  });

  const handleRegister = (formValue) => {
    const { username, email, password,profil } = formValue;
const roles = [profil]
const verificationCode = Date.now()
    setSuccessful(false);

    dispatch(register({ username, email, password,roles,verificationCode }))
      .unwrap()
      .then((res) => {
        console.log(res._id)
        //mail (to, text "ujnkhhgjk ")
       const dataemail={  
      name: username,
        email:email,
        code:verificationCode,
        lien:"http:///20.207.87.14:8081/EmailVerification/" + res._id,
         //"http://20.207.87.14:8081/EmailVerificationlesd/"
        }
        UserService.verfieremail(dataemail).then(
          (res)=>{
           
           setSuccessful(true);
          }
        ).catch(
          ()=>{
            setSuccessful(false);
          }
        )
       
      })
      .catch(() => {
        setSuccessful(false);
      });
  };

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
           onSubmit={(values) => handleRegister(values)}
        >
          {({ errors, touched }) => (
            <Form>
              {!successful && (
                <div>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <Field
                      name="username"
                      type="text"
                      className={
                        "form-control" +
                        (errors.username && touched.username
                          ? " is-invalid"
                          : "")
                      }
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field
                      name="email"
                      type="email"
                      className={
                        "form-control" +
                        (errors.email && touched.email ? " is-invalid" : "")
                      }
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>

                  <div >
                    <label htmlFor="password">Password</label>
                    <Field
                      name="password"
                      type="password"
                      className={
                        "form-control" +
                        (errors.password && touched.password
                          ? " is-invalid"
                          : "")
                      }
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div>
                    <label htmlFor="Profil">Profil</label>
                    <Field as="select" name="profil" className="form-select">
                    <option selected>choisir un Roles</option>
                    <option value="moderator">Enterprise</option>
                    <option value="user">Participant</option>
           
           </Field>
                    <ErrorMessage
                      name="profil"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <br/>
                  <br/>
                  <center>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                      Sign Up  

                    </button>
                  </div>
                  </center>
                </div>
              )}
            </Form>
          )}
        </Formik>

      {message && (
        <div className="form-group">
          <div
            className={
              successful ? "alert alert-success" : "alert alert-danger"
            }
            role="alert"
          >
            {message}
          </div>
        </div>
      )}              
      <br/>  <div className="card-footer">
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
</div>
</div>
</div>
                
</>
  
  );
};

export default Register;
