import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { createhackathone  } from "../slices/hackathones";

class AddHackathone extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeRules = this.onChangeRules.bind(this);
    this.onChangeDate_début = this.onChangeDate_début.bind(this);
    this.onChangeDate_fin = this.onChangeDate_fin.bind(this);
    this.onChangeNomEntriprise = this.onChangeNomEntriprise.bind(this);
    this.onChangeNumbre_Equipe = this.onChangeNumbre_Equipe.bind(this);
    this.saveHackathon = this.saveHackathon.bind(this);
    this.newHackathon = this.newHackathon.bind(this);
   
this.state = {
      id: null,
      title: "",
      description: "",
      Rules: "",
      NomEntriprise:"",
      Numbre_Equipe:"",
      Date_début: "",
      Date_fin:"",
      published: false,
      submitted: false,
    };
  }
  

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }
  onChangeRules(e) {
    this.setState({
      Rules : e.target.value,
    });
  }
  onChangeNomEntriprise(e){
    this.setState({
      NomEntriprise :e.target.value,
    });
  }
  onChangeNumbre_Equipe(e){
    this.setState({
     Numbre_Equipe: e.target.value, 
    });
  }
  onChangeDate_début(e) {
    this.setState({
      Date_début: e.target.value,
    });
  }
  onChangeDate_fin(e) {
    this.setState({
      Date_fin: e.target.value,
    });
  }
  saveHackathon() {
    const { title, description,Rules,Date_début,Date_fin,NomEntriprise,Numbre_Equipe,image } = this.state;

    this.props
      .createhackathone({title, description,Rules,Date_début,Date_fin,NomEntriprise,Numbre_Equipe})
      .unwrap()
      .then((data) => {
        this.setState({
          id: data.id,
          title: data.title,
          description: data.description,
          Rules: data.Rules,
          Date_début: data.Date_début,
          Date_fin: data.Date_fin,
          NomEntriprise:data.NomEntriprise,
          Numbre_Equipe:data.Numbre_Equipe,
          published: data.published,
          submitted: true,
        });
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newHackathon() {
    this.setState({
      id: null,
      title: "",
      description: "",
      Rules: "",
      Date_début: "",
      Date_fin:"",
      Numbre_Equipe:"",
      NomEntriprise:"",
      published: false,
      submitted: false,
    });
  }

  
  render() {
    return (
      <div className="container mt-3">      
      <div className="content-body">
  
                        <div className="card">
        {this.state.submitted ? (
          <div>
            <center>
            <h4>projet ajouté avec succès</h4>
            <button className="btn btn-success" onClick={this.newHackathon}>
              Add
            </button>
            </center>
          </div>
        ) : (

                        <div className="card">
                            <div className="card-header">
                         
                                <h1 className="mb-4">Create Hackathons</h1>
                            </div>
          <div className="card-body">
                                <div className="basic-form">
                
           
                <div className="row">
                                            <div className="mb-3 col-md-6">
              <label htmlFor="NomEntriprise">l'Entriprise </label>
              <input
                type="text"
                className="form-control"
                id="NomEntriprise"
                required
                value={this.state.NomEntriprise}
                onChange={this.onChangeNomEntriprise}
                name="NomEntriprise"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="title">Title de Projet </label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>
   </div>
   <div className="row">
                                            <div className="mb-3 col-md-6">
              <label htmlFor="Numbre_Equipe">Numbre_Equipe </label>
              <input
                type="text"
                className="form-control"
                id="Numbre_Equipe"
                required
                value={this.state.Numbre_Equipe}
                onChange={this.onChangeNumbre_Equipe}
                name="Numbre_Equipe"
              />
            </div>
   
            
            <div className="form-group col-md-6">
              <label htmlFor="description">Description de Projet</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>
            </div>
            <div className="row">
                                            <div className="mb-3 col-md-6">
            
               <label htmlFor="description">Date_début</label>
              <input
                type="Date"
                className="form-control"
                id="Date_début"
                required
                value={this.state.Date_début}
                onChange={this.onChangeDate_début}
                name="Date_début"
              />
            </div>
            <div className="form-group col-md-6">
            <label htmlFor="description">Date_fin</label>
              <input
                type="Date"
                className="form-control"
                id="Date_fin"
                required
                value={this.state.Date_fin}
                onChange={this.onChangeDate_fin}
                name="Date_fin"
              />
            </div>
            </div>
            <div className="row">
              <div className="mb-3 col-md-6">
             
               <label htmlFor="description">Rules</label>
              <input
                type="text"
                className="form-control"
                id="rules"
                required
                value={this.state.Rules}
                onChange={this.onChangeRules}
                name="rules"
              />
            </div>
            <div className="form-group col-md-6">
            <label htmlFor="description">Image</label>
    <input type="file" class="form-control" aria-label="file example" required/>

  </div>
            </div>

            <button onClick={this.saveHackathon} className="btn btn-primary ">
              Submit
            </button>
          </div></div></div>
        )}
      </div></div></div>
    );
  }
}

export default connect(null, { createhackathone  })(AddHackathone);
