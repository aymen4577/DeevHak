import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";
import hackathonservice from "../services/hackathone.service";
import quizService from "../services/quiz.service";
const Home = () => { 
  const [count, setCount] = useState(0);
  const [hackathons, sethackathons] = useState({});
  const [use, setUse] = useState(0);
  const [user, setUsers] = useState({});
  const [quizz, setQuizs] = useState({});
  const [quiz, setQuiz] = useState(0);

  useEffect(() => {
    hackathonservice.getAll()
      .then((res) => {
        console.log('--------------------------------')
        console.log(res.data.length)
        console.log('--------------------------------')
        sethackathons(res.data);
        console.log(res.data.length);
        setCount(res.data.length)
      }).catch((err) => {
        console.log(err)
      });
  }, []);

  useEffect(() => {
    quizService.getAll()
      .then((res) => {
        console.log('--------------------------------')
        console.log(res.data.length)
        console.log('--------------------------------')
        setQuizs(res.data);
        console.log(res.data.length);
        setQuiz(res.data.length)
      }).catch((err) => {
        console.log(err)
      });
  }, []);

  useEffect(() => {
    UserService.getPublicContent("/test/all")
      .then((res) => {
        console.log(res.data.length)
        setUsers(res.data);
        console.log(res.data.length);
        setUse(res.data.length)
      }).catch((err) => {
        console.log(err)
      });
  }, []);

  return (
    
    <div className="content-body">
    <div className="page-titles">
    <ol className="breadcrumb">
      <li className=""><a href=";">Home /</a></li>
      <li className="breadcrumb-item active"><a href=";">Projet</a></li>
    </ol>
          </div>

          <div className="container-fluid">
      <div className="row">
        <div className="col-xl-9 wid-100">
        <div className="row">
  <div className="col-xl-3 col-sm-6">
    <div className="card box-hover">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <div className="icon-box icon-box-lg bg-success-light rounded-circle">
            <svg width="46px" height="46px" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M22.9715 29.3168C15.7197 29.3168 9.52686 30.4132 9.52686 34.8043C9.52686 39.1953 15.6804 40.331 22.9715 40.331C30.2233 40.331 36.4144 39.2328 36.4144 34.8435C36.4144 30.4543 30.2626 29.3168 22.9715 29.3168Z" stroke="#3AC977" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M22.9714 23.0537C27.7304 23.0537 31.5875 19.1948 31.5875 14.4359C31.5875 9.67694 27.7304 5.81979 22.9714 5.81979C18.2125 5.81979 14.3536 9.67694 14.3536 14.4359C14.3375 19.1787 18.1696 23.0377 22.9107 23.0537H22.9714Z" stroke="#3AC977" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="total-projects ms-3">
            <h3 className="text-success count">{count}</h3> 
            <span>Total Projet</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-xl-3 col-sm-6">
    <div className="card box-hover">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <div className="icon-box icon-box-lg bg-primary-light rounded-circle">
            <svg width="46px" height="46px" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M32.8961 26.5849C34.1612 26.5849 35.223 27.629 35.0296 28.8783C33.8947 36.2283 27.6026 41.6855 20.0138 41.6855C11.6178 41.6855 4.8125 34.8803 4.8125 26.4862C4.8125 19.5704 10.0664 13.1283 15.9816 11.6717C17.2526 11.3579 18.5553 12.252 18.5553 13.5605C18.5553 22.4263 18.8533 24.7197 20.5368 25.9671C22.2204 27.2145 24.2 26.5849 32.8961 26.5849Z" stroke="var(--primary)" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M41.1733 19.2019C41.2739 13.5059 34.2772 4.32428 25.7509 4.48217C25.0877 4.49402 24.5568 5.04665 24.5272 5.70783C24.3121 10.3914 24.6022 16.4605 24.764 19.2118C24.8134 20.0684 25.4864 20.7414 26.341 20.7907C29.1693 20.9526 35.4594 21.1736 40.0759 20.4749C40.7035 20.3802 41.1634 19.8355 41.1733 19.2019Z" stroke="var(--primary)" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

          </div>
          <div className="total-projects ms-3">
            <h3 className="text-primary count">{use}</h3> 
            <span>Total Persones</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-xl-3 col-sm-6">
    <div className="card box-hover">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <div className="icon-box icon-box-lg bg-purple-light rounded-circle">
          <svg xmlns="http://www.w3.org/2000/svg" width="46px" height="46px" fill="currentColor" className="bi bi-question-circle" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
</svg>
          </div>
          <div className="total-projects ms-3">
            <h3 className="text-purple count">{quiz}</h3> 
            <span>Total Qiuz</span>
          </div>
        </div>
      </div>
    </div>
  </div>
     
</div>
            
<div class="col-xl-8">
								<div class="card overflow-hidden">
									<div class="card-header border-0 pb-0 flex-wrap">
										<h4 class="heading mb-0">Projects Overview</h4>
										<ul class="nav nav-pills mix-chart-tab" id="pills-tab" role="tablist">
										  <li class="nav-item" role="presentation">
											<button class="nav-link active" data-series="week" id="pills-week-tab" data-bs-toggle="pill" data-bs-target="#pills-week" type="button" role="tab"  aria-selected="true">Week</button>
										  </li>
										  <li class="nav-item" role="presentation">
											<button class="nav-link" data-series="month" id="pills-month-tab" data-bs-toggle="pill" data-bs-target="#pills-month" type="button" role="tab"  aria-selected="false">Month</button>
										  </li>
										  <li class="nav-item" role="presentation">
											<button class="nav-link" data-series="year" id="pills-year-tab" data-bs-toggle="pill" data-bs-target="#pills-year" type="button" role="tab"  aria-selected="false">Year</button>
										  </li>
										   <li class="nav-item" role="presentation">
											<button class="nav-link" data-series="all" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-selected="false">All</button>
										  </li>
										</ul>
									</div>
									<div class="card-body  p-0">
											<div id="overiewChart"></div>
										<div class="ttl-project">
											<div class="pr-data">
												<h5>{count}</h5>
												<span>Nombre de Projet</span>
											</div>
											<div class="pr-data">
												<h5 class="text-primary">{quiz}</h5>
												<span>Nombre de Quiz</span>
											</div>
											<div class="pr-data">
												<h5>{use}</h5>
												<span>Personne </span>
											</div>
										</div>
									</div>
								</div>
							</div>
          </div>
          <div class="col-xl-3 t-earn">
						<div class="card">
							<div class="card-header border-0 pb-0">
								<h4 class="heading mb-0">Total Projet</h4>
							</div>
							<div class="card-body px-0 overflow-hidden">
								<div class="total-earning">
									<h2>{count} Projets</h2>
									<ul class="nav nav-pills mb-3 earning-tab earning-chart" id="pills-tab1" role="tablist">
										  <li class="nav-item" role="presentation">
											<button class="nav-link active" data-series="day" id="pills-day-tab1" data-bs-toggle="pill" data-bs-target="#pills-day1" type="button" role="tab" aria-selected="true">Day</button>
										  </li>
										  <li class="nav-item" role="presentation">
											<button class="nav-link" id="pills-week-tab1" data-series="week" data-bs-toggle="pill" data-bs-target="#pills-week1" type="button" role="tab" aria-selected="false">Week</button>
										  </li>
										  <li class="nav-item" role="presentation">
											<button class="nav-link" id="pills-month-tab1" data-series="month" data-bs-toggle="pill" data-bs-target="#pills-month1" type="button" role="tab" aria-selected="false">Month</button>
										  </li>
										  <li class="nav-item" role="presentation">
											<button class="nav-link" id="pills-year-tab1" data-series="year" data-bs-toggle="pill" data-bs-target="#pills-year1" type="button" role="tab" aria-selected="false">Year</button>
										  </li>
									</ul>
									<div id="earningChart"></div>
								</div>	
							</div>
						</div>
					</div>
        
        </div>
       
    
        
        <div className="col-xl-5 bst-seller">
          {/* Ajoutez votre contenu ici */}
        </div>
        <div className="col-xl-3 col-md-6 up-shd">
          {/* Ajoutez votre contenu ici */}
        </div>
      
        <div className="col-xl-9 bst-seller">
          {/* Ajoutez votre contenu ici */}
        </div>
      </div>
    </div>



  );
};


      

export default Home
