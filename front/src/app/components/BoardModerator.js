import React from "react";
import { Link } from "react-router-dom";
const BoardModerator = () => {

  return (
    <>
    
    <div className="nav-header">
      <div className="nav-control">
        <div className="hamburger">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </div>
   <div className="deznav">
<div className="deznav-scroll">
    <ul className="metismenu" id="menu">
        <li className="menu-title">DevHack</li>
        <li> <Link to={"/home"} className="nav-link">
            <div className="menu-icon">
            <svg width="20px" height="20px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 7.49999L10 1.66666L17.5 7.49999V16.6667C17.5 17.1087 17.3244 17.5326 17.0118 17.8452C16.6993 18.1577 16.2754 18.3333 15.8333 18.3333H4.16667C3.72464 18.3333 3.30072 18.1577 2.98816 17.8452C2.67559 17.5326 2.5 17.1087 2.5 16.6667V7.49999Z" stroke="#888888" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 18.3333V10H12.5V18.3333" stroke="#888888" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>	
            <span className="nav-text">Dashboard</span>
            </Link>
        </li>
        <li>
            <Link to={";"} className="nav-link">
            
        
            <div className="menu-icon">
            <svg width="22px" height="22px" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.986 14.0673C7.4407 14.0673 4.41309 14.6034 4.41309 16.7501C4.41309 18.8969 7.4215 19.4521 10.986 19.4521C14.5313 19.4521 17.5581 18.9152 17.5581 16.7693C17.5581 14.6234 14.5505 14.0673 10.986 14.0673Z" stroke="#888888" strokeLinecap="round" strokeLinejoin="round"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.986 11.0054C13.3126 11.0054 15.1983 9.11881 15.1983 6.79223C15.1983 4.46564 13.3126 2.57993 10.986 2.57993C8.65944 2.57993 6.77285 4.46564 6.77285 6.79223C6.76499 9.11096 8.63849 10.9975 10.9563 11.0054H10.986Z" stroke="#888888" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <span className="nav-text">Account</span>
        </Link>
        <ul >
                <li><Link to={"/Profile"} className="nav-link">Profile</Link></li>
                <li><Link to={"/EditProfile"} className="nav-link">Edit Profile</Link></li>
            </ul>
        </li>
        <li><Link to={"/add"} className="nav-link">
            
        
            <div className="menu-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
            </div>
            <span className="nav-text">Add Hackathons</span>
        </Link>
        </li>
        
<li><Link to={"/hackathonesList"} className="nav-link">

            <div className="menu-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
            </div>
            <span className="nav-text">Liste Hackathons</span>
        </Link>
        </li> <li><Link to={";"} className="nav-link">
            
        
            <div className="menu-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" className="bi bi-question-circle" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
</svg>
            </div>
            <span className="nav-text">Quiz</span>
        </Link>
        <ul >
                <li><Link to={"/create"} className="nav-link">Create Quiz</Link></li>
                <li><Link to={"/QuizList"} className="nav-link">Liste Quiz</Link></li>
                <li><Link to={"/Quiz"} className="nav-link">Response</Link></li>
                <li><Link to={"/viewhackathon"} className="nav-link">View</Link></li>
            </ul>
        </li>
    </ul>
</div>
</div>

    </>
  );
};

export default BoardModerator;
