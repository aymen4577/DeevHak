import React from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
const EditProfile  = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Navigate to="/Profile" />;
	
  }

  return (
    <>
<div className="content-body">
<div className="container-fluid">
        <div className="row">
        <div className="col-xl-9 col-lg-8">
						<div className="card profile-card card-bx m-b30">
							<div className="card-header">
								<h6 className="title"> Account </h6>
							</div>
							<form className="profile-form">
								<div className="card-body">
									<div className="row">
										<div className="col-sm-6 m-b30">
											<label className="form-label">Nom</label>
											<input type="text" className="form-control" value={currentUser.username}/>
										</div>
										<div className="col-sm-6 m-b30">
											<label className="form-label">Prenon</label>
											<input type="text" className="form-control" value={currentUser.username}/>
										</div>
										<div className="col-sm-6 m-b30">
											<label className="form-label">Sexe</label>
											<input type="text" className="form-control" value={currentUser.email} />
										</div>
									</div>
								</div>
								<div className="card-footer">
									<button className="btn btn-primary">Envoier</button>
								</div>
							</form>
						</div>
					</div>
        </div>
		</div>
	
      </div>
  
  
    </>
  )
}

export default EditProfile
