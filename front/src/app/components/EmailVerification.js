import React,{useEffect, useState} from "react";
import { useParams,navigate,useNavigate} from 'react-router-dom';
import UserService from "../services/user.service";
function EmailVerification() {
const params = useParams();
const [user, setUser] = useState({});
const [inputs, setInputs] = useState({});
let navigate = useNavigate();
const handleInputs = (event) =>{
  const {name, value} = event.target
  setInputs({...inputs, [name]: value})
  console.log(inputs)
}

useEffect(() => {
  UserService.get(params.id)
     .then((response) => {
      console.log(response.data)
       setUser(response.data);
     })
     .catch((error) => {
       console.log(error);
     });
 }, 
 [params.id]);
const mise= async ()=>{
  alert (params.id)
  const data = {
    state:"active"
  }
  await UserService.update(params.id , data).then((res)=>{
   //navigate 
   navigate("/Login"); 

  }).catch((error) => {
    console.log(error);
  });
}
 const verify = async (req, res) => {
  if (user.verificationCode === inputs.code) {
     alert('exact');
   await mise()
  } else {
    alert('noo');
  }
};


  return (
    <div className="container mt-3">
    <div className="content-body">
    <div className="card-body">
     
                                <div className="basic-form">
                                   <form onSubmit={verify}>
      <h3 className="form-title m-t0">Enter the verification code</h3>
      <div className="row">
                                            <div className="mb-3 col-md-6">
        <input  type="text" className="form-control" name="code" required  onChange={handleInputs}/>
        <button className="btn btn-success" >Verify</button>
      </div>
     
   </div> </form>
   </div>
    </div></div></div>
  
  
  );
}

export default EmailVerification;
