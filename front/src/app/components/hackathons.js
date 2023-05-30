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

class ListeAdmin extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActivHackathon = this.setActivHackathon.bind(this);
    this.findByTitle = this.findByTitle.bind(this);
    this.removeHackathon = this.removeHackathon.bind(this);
    this.removeAllHackathones = this.removeAllHackathones.bind(this);
   

    this.state = {
      currentHackathon: {
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
      currentHackathon: null,
      currentIndex: -1,
    });
  }

  setActivHackathon(Hackathon, index) {
    this.setState({
      currentHackathon: Hackathon,
      currentIndex: index,
    });
  }
  removeAllHackathones() {
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
    const { searchTitle } = this.state;
    const { hackathons } = this.props;

    return (
    
      <div className="content-body">
    
  
      <div className="container-fluid">  
  <div className="row ">
  
  {hackathons &&
        hackathons.map((Hackathon) => (
  <div className="col-xl-3 col-sm-6">
      <div className="card box-hover ">
        <div className="card-header">
        <span>Title de Projet</span>	
        <h5 className="text-primary mb-0 mt-1 text-end" >{Hackathon.title}</h5>
        </div>
        <div className="card-body">
        
          
              <span className="mb-2">NomEntriprise:</span>	
              <h6 className="text-end">{Hackathon.NomEntriprise}</h6>
        
          
        </div>
        <div className="card-footer d-flex justify-content-between flex-wrap">
          <Link to={"/formulair"}>
          <button className="btn btn-primary"  >Ouvrir</button></Link>
        </div>
      </div>
    </div>
      ))}
      
  </div></div></div>


      
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
})(ListeAdmin);
