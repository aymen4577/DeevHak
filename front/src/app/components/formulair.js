import React, { Component } from "react";
import { connect } from "react-redux";
import {
  retrievehackathones,
  findhackathonesByTitle,
  deleteAllhackathones,
  deletehackathone,
} from "../slices/hackathones";
import { Link } from "react-router-dom";
import hackathoneDataService from "../services/hackathone.service";
class Formulair extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.refreshData = this.refreshData.bind(this);

    this.findByTitle = this.findByTitle.bind(this);
   
    this.removeAllhackathons = this.removeAllhackathons.bind(this);
   

    this.state = {
      currenthackathons: {
        id: null,
        title: "",
        description: "",
        Numbre_Equipe:"",
        NomEntriprise:"",
        Date_début:"",
        Date_fin:"",
        Rules:"",
        published: false,
      },
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrievehackathones();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle,
    });
  }

  refreshData() {
    this.setState({
      currenthackathons: null,
      currentIndex: -1,
    });
  }

  setActiveTutorial(Hackathon, index) {
    this.setState({
      currenthackathons: Hackathon,
      currentIndex: index,
    });
  }
  removeAllhackathons() {
    this.props
      .deleteAllhackathones()
      .then((response) => {
        console.log(response);
        this.refreshData();
      })
      .catch((e) => {
        console.log(e);
      });
  }
  removeHackathon(id) {
  
    hackathoneDataService.delete(id)
      .then(() => {
       window.location.reload()
      })
      .catch((e) => {
        console.log(e);
      });
  }
  findByTitle() {
    this.refreshData();

    this.props.findhackathonesByTitle({ title: this.state.searchTitle });
  }

  render() {
   
    const { hackathons } = this.props;

    return (
      <>
 <div className="content-body">
    <div className="container-fluid">
  
        <div className="row ">
            <div className="col-xl-15">
              
            <div className="card box-hover ">
                    <div className="card-body py-0">
                       <div className="row ">
                            
                            <div className="col-lg-10 col-xxl-9">
                                <div className="email-right-box">
                                {hackathons &&
              hackathons.map((Hackathon) => (
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="right-box-padding p-12">
                                                <div className="read-wapper dz-scroll" id="read-content">
                                                    <div className="read-content">
                                                        <div className="media pt-3 d-sm-flex d-block justify-content-between">
                                                            <div className="clearfix mb-3 d-flex">
                                                            <img className="me-3 rounded" width="70" height="70" alt="Company Logo" src="DH.png" />

                                                                <div className="media-body me-2">
                                                                    <h5 className="text-primary mb-0 mt-1">{Hackathon.NomEntriprise}</h5>
                                                                    <p className="mb-0">NomEntriprise</p>
                                                                </div>
                                                            </div>
                                                          
                                                        </div>
                                                        <hr/>
                                                        <div className="media mb-2 mt-3">
                                                            <div className="media-body"><span className="pull-end">Title de Projet</span>
                                                                <h5 className="my-1 text-primary">{Hackathon.title}</h5>
                                                                <hr/>        
                                                                <p className="text-end"><strong>Date de Projet :</strong></p>
                                                                <p className="text-end">
                                                                Date début : {Hackathon.Date_début}</p>
                                                                <p className="text-end">
                                                                Date Fin : {Hackathon.Date_fin}</p>
                                                            </div>
                                                        </div>
                                                        <hr/>
                                                        <div className="read-content-body">
                                                            
                                                            <p className="mb-2"><strong>Description de Projet :</strong> {Hackathon.description}</p>
                                                         <hr/>
                                                        </div>
                                                        <p className="mb-2"><strong>Membre de Projet :</strong> {Hackathon.Numbre_Equipe}</p>
                                                        <hr/>
                                                     
                                                    </div>
                                                    <div className="text-end">
                                                        <Link to={"/back"}>
                                                        <button className="btn btn-primary " type="button">Participer</button></Link>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
  ))}
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

}

const mapStateToProps = (state) => {
  return {
    hackathons: state.hackathons,
  };
};

export default connect(mapStateToProps, {
  retrievehackathones,
  findhackathonesByTitle,
  deleteAllhackathones,
  deletehackathone,
})(Formulair);
