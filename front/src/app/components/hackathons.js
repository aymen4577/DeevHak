
import React, { Component } from "react";
import { connect } from "react-redux";

import {
  retrievehackathones,
  findhackathonesByTitle,
} from "../slices/hackathones";
import { Link } from "react-router-dom";


class Hackathons extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActivehackathone = this.setActivehackathone.bind(this);
    this.findByTitle = this.findByTitle.bind(this);


    this.state = {
      currentTutorial: null,
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
      currenthackathon: null,
      currentIndex: -1,
    });
  }

  setActivehackathone(hackathone, index) {
    this.setState({
      currenthackathone: hackathone,
      currentIndex: index,
    });
  }



  findByTitle() {
    this.refreshData();

    this.props.findhackathonesByTitle({ title: this.state.searchTitle });
  }

  render() {
   
    const { hackathons } = this.props;
    const { searchTitle } = this.state;
    return (
     
      <div className="content-body">
    
  

            <div className="container-fluid">  

            <div className="col-md-0">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-warning"
                type="button"
                onClick={this.findByTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
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
								<button  className="btn btn-primary"  >Ouvrir</button></Link>
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
})(Hackathons);
