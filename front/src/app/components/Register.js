import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import UserService from "../services/user.service";
import { register } from "../slices/auth";
import { clearMessage } from "../slices/message";

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
        lien:"http://20.207.87.14:8081/EmailVerification/" + res._id,
         //"http://20.207.87.14:8081/EmailVerification/"
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
<div className="container mt-3">

<div className="page-wraper">
<div className="browse-job login-style3">
<div className="login-form style-2">
<div className="bg-img-fix overflow-hidden" style={{backgroundImage: 'url(images/background/bg6.jpg)', height: '100vh', backgroundRepeat:'no-repeat'}}>

        <div className="row gx-0">
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12 vh-100 bg-white ">
            <div id="mCSB_1" className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside" style={{ maxHeight: '653px' }} tabIndex={0}>

                <div id="mCSB_1_container" className="mCSB_container" style={{ position: 'relative', top: 0, left: 0 }} dir="ltr">
               
                <div className="card-body">
                                <div className="logo-header">
                                  <center>
                                <img src="4.png" alt="Admin" className="rounded-circle" width={100} /></center>
                                </div>
                            
                                <hr/>
                                    <div className="nav nav-tabs border-bottom-0" id="nav-tab" role="tablist">
                                        
                                <div className="tab-content w-100" id="nav-tabContent">
                                  <div className="tab-pane fade show active" id="nav-personal" role="tabpanel" aria-labelledby="nav-personal-tab">
                                    <center>
                                  <h3 className="form-title m-t0">   Let's Get Started DevHack</h3>
                                  <h5>Sign up your account</h5>
                                  </center>
                             <hr/>
              
 </div> 
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
      )}                <div className="card-footer">
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
                </div></div>
</>
  
  );
};

export default Register;
