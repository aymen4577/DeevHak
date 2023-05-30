import React, { Component } from "react";
import { connect } from "react-redux";
import {
  retrievehackathones,
  findhackathonesByTitle,
  deleteAllhackathones,
} from "../slices/hackathones";

class ViewAdmin extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.findByTitle = this.findByTitle.bind(this);
    this.removeAllhackathons = this.removeAllhackathons.bind(this);

    this.state = {
      currenthackathons: null,
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

  setActiveTutorial(tutorial, index) {
    this.setState({
      currenthackathons: tutorial,
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

  findByTitle() {
    this.refreshData();

    this.props.findhackathonesByTitle({ title: this.state.searchTitle });
  }

  render() {
    const {currenthackathons, currentIndex } = this.state;
    const { hackathones } = this.props;

    return (
		<div className="container mt-3">
      <div className="content-body">
      <div className="list row">
     
        <div className="col-md-6">
          <h4>List de ajouter </h4>

          <ul className="list-group">
            {hackathones &&
              hackathones.map((tutorial, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveTutorial(tutorial, index)}
                  key={index}
                >
                  {tutorial.title}
                </li>
              ))}
          </ul>

         
        </div>
       <br/>
	   
        <div className="col-md-8">
          {currenthackathons ? (
           <div>
           <h4 >hackathons ajouter</h4>
           <div>
             <label>
               <strong>Nom de Entriprise :</strong>
             </label>{" "}
             {currenthackathons.NomEntriprise}
           </div>
           <div>
             <label>
               <strong> Title de Projet:</strong>
             </label>{" "}
             {currenthackathons.title}
           </div>
           <div>
             <label>
               <strong>Number de Equipe :</strong>
             </label>{" "}
             {currenthackathons.Numbre_Equipe}
           </div>

           <div>
             <label>
               <strong>Description de Projet:</strong>
             </label>{" "}
             {currenthackathons.description}
           </div>
       
           <div>
             <label>
               <strong>Date début :</strong>
             </label>{" "}
             {currenthackathons.Date_début}
           </div>
           <div>
             <label>
               <strong>Date fin :</strong>
             </label>{" "}
             {currenthackathons.Date_fin}
           </div>
           <div>
             <label>
               <strong>Rules :</strong>
             </label>{" "}
             {currenthackathons.Rules}
           </div>
         </div>
         
       ) : (
         <div>
           <br />
           <p>Please click on a Projet.</p>
         </div>
       )}
     </div></div>
   </div></div>
 );
}

}

const mapStateToProps = (state) => {
  return {
    hackathones: state.hackathones,
  };
};

export default connect(mapStateToProps, {
  retrievehackathones,
  findhackathonesByTitle,
  deleteAllhackathones,
})(ViewAdmin);
