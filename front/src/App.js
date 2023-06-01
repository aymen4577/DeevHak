import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import QuizList from "./app/components/QuizList";
import CreateQuiz from "./app/components/CreateQuiz";
import Viewhackathon from "./app/components/viewhackathon"
import Login from "./app/components/Login";
import Register from "./app/components/Register";
import Home from "./app/components/Home";
import Profile from "./app/components/Profile";
import BoardUser from "./app/components/BoardUser";
import BoardModerator from "./app/components/BoardModerator";
import BoardAdmin from "./app/components/BoardAdmin";
import Hackathone from "./app/components/hackathons-update";
import HackathonsList from "./app/components/hackathons-list";
import AddHackathone from "./app/components/add-hackathone";
import Hackathons from "./app/components/hackathons";
import { logout } from "./app/slices/auth";

import EventBus from "./app/common/EventBus";
import EditProfile from "./app/components/EditProfile";

import ListeAdmin from "./app/components/listeAdmin";
import Email from "./app/components/Email";
import ViewAdmin from "./app/components/ViewAdmin";
import Formulair from "./app/components/formulair";
import EmailVerification from "./app/components/EmailVerification";
function App() {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [showUserBoard, setShowUserBoard] = useState(false);
  
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
//useeffect appel userService.get(currenetUser.id) setProfil(res.data)
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
      setShowUserBoard(currentUser.roles.includes("ROLE_USER"))
    } else {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
      setShowUserBoard(false);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  return (
   
    <Router>
      <div id="preloader">
		<div className="lds-ripple">
			<div></div>
			<div></div>
		</div>
    </div>
    <div id="main-wrapper">
    
      <div className="header">
                       <div className="header-content">
                         <nav className="navbar navbar-expand">
                           <div className="collapse navbar-collapse justify-content-between">
                             <div className="header-left">
                               
                             </div>
                             <ul className="navbar-nav header-right">
                               {currentUser ? (
                               <li className="nav-item ps-3">
                                 <div className="dropdown header-profile2">
                                   <a className="nav-link" href=";" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                     <div className="header-info2 d-flex align-items-center">
                                       <div className="header-media">
                                         <img src="aymen.jpg" alt="" />
                                       </div>
                                       <div className="header-info">
                                         <h6>{currentUser.username}</h6>
                                       </div>
                                     </div>
                                   </a>
                                   <div className="dropdown-menu dropdown-menu-end" >
                                     <div className="card border-0 mb-0">
                                       <div className="card-header py-2">
                                         <div className="products">
                                           <img src="aymen.jpg" className="avatar avatar-md" alt="" />
                                           <div>
                                             <h5>{currentUser.username}</h5>
                                             <span>{currentUser.mail}</span>	
                                           </div>
                                         </div>
                                       </div>         
                                                      <div className="card-footer px-0 py-2">
                                      
                                       <li className="nav-item">
                <a href="/login" className="nav-link" >
                  <button onClick={logOut} className="btn btn-outline-info" size="10px" >logOut</button>
          
                </a>
              </li>
												                
                                  </div>
									
										</div>
									</div>
								</div>
							</li>
               ) : (
              <li className="nav-item ps-3">
                                 <div className="dropdown header-profile2">
                                   <a className="nav-link" href=";" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                     <div className="header-info2 d-flex align-items-center">
                                       
                                       <div className="header-info">
                                      
                                       <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
                                       </div>
                                     </div>
                                   </a>
                                   <div className="dropdown-menu dropdown-menu-end" >
                                     <div className="card border-0 mb-0">
                                    
                                       
                                       
                                      
                                            <div className="card-footer px-0 py-2">
                                                    <Link to={"/Login"}  className="dropdown-item ai-icon">
													
													                             <span className="ms-2">Login </span>
												                                </Link>
                                                        </div>
                                                        <div className="card-footer px-0 py-2">
                                              <Link to={"/Register"}  className="dropdown-item ai-icon">
													
													                      <span className="ms-2">Register</span>
                         
												                       </Link>
                                            </div>
                                                 
									
										</div>
									</div>
								</div>
							</li>
                )}
                        </ul>
                        
                    </div>
				</nav>  
      
			</div>
		</div>
    
    {showUserBoard &&( 
 <BoardUser/>
 )}
{ showAdminBoard &&(
<BoardAdmin/>
)}
{
  showModeratorBoard &&(
    <BoardModerator/>
  )
}


  
      <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user" element={<BoardUser />} />
            <Route path="/mod" element={<BoardModerator />} />
            <Route path="/admin" element={<BoardAdmin />} />
            <Route path="/" element={<hackathonsList/>} />
            <Route path="/hackathonesList" element={<HackathonsList/>} />
            <Route path="/add" element={<AddHackathone/>} />
            <Route path="/hackathone/:id" element={<Hackathone/>} />
            <Route path="/EditProfile" element={<EditProfile/>} />
            <Route path="/hackathons" element={<Hackathons/>} />
            <Route path="/ViewAdmin" element={<ViewAdmin/>} />
            <Route path="/listeAdmin" element={<ListeAdmin/>} />
            <Route path="/Email" element={<Email/>} />
            <Route path="/formulair" element={<Formulair/>} />
            <Route path="/QuizList" element={<QuizList/>} />
           <Route path="/create" element={<CreateQuiz/>} />
           <Route path="/EmailVerification/:id" element={<EmailVerification/>}/>
           <Route path="/viewhackathon" element={<Viewhackathon/>}/>
            
            </Routes>
            </div>
      </Router>

  );
}

export default App;
