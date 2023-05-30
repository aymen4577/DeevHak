import React, { Component } from "react";


class Viewhackathon extends Component {
  constructor(props) {
    super(props);
    this.onChangeNom = this.onChangeNom.bind(this);
    this.onChangePrenom= this.onChangePrenom.bind(this);
    this.onChangeNumTel = this.onChangeNumTel.bind(this);
    this.onChangeGenre = this.onChangeGenre.bind(this);
    this.onChangeNationalite = this.onChangeNationalite.bind(this);
    this.savehackathon = this.savehackathon.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id:"",
      Nom: "",
      Prenom: "",
      NumTel:"",
      Genre: "",
      Nationalite: "",
    };
  
  }
  onChangeNom(e) {
    this.setState({
      Nom: e.target.value,
    });
  }
  onChangePrenom(e) {
    this.setState({
      Prenom: e.target.value,
    });
  }
  
  onChangeNumTel(e) {
    this.setState({
      NumTel: e.target.value,
    });
  }
  
  onChangeGenre(e) {
    this.setState({
      Genre: e.target.value,
    });
  }
  
  onChangeNationalite(e) {
    this.setState({
      Nationalite  : e.target.value,
    });
  }
  savehackathon() {
    const { Nom,Prenom,NumTel,Genre,Nationalite } = this.state;

    this.props
      .createhackathone({Nom,Prenom,NumTel,Genre,Nationalite})
      .unwrap()
      .then((data) => {
        this.setState({
          Nom: data.Nom,
          Prenom: data.Prenom,
          NumTel: data.NumTel,
          Genre: data.Genre,
          Nationalite: data.Nationalite,
        });
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      Nom: "",
      Prenom: "",
      NumTel:"",
      Genre: "",
      Nationalite: "",
    });
  }

  render() {
    return (
      <div className="container mt-3">      
      <div className="content-body">
        
        <form>
          <div className="card-header">
            <h4 className="card-title">Ajouter Hackathon</h4>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="mb-3 col-md-6">
                <label htmlFor="NomEntriprise">Nom </label>
                <input
                  type="text"
                  className="form-control"
                  id="Nom"
                  required
                  value={this.state.Nom}
                  onChange={this.onChangeNom}
                  name="Nom"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="title"> Prenom </label>
                <input
                  type="text"
                  className="form-control"
                  id="Prenom"
                  required
                  name="Prenom"
                  value={this.state.Prenom}
                  onChange={this.onChangePrenom}
                />
              </div>
            </div>
            <div className="row">
              <div className="mb-3 col-md-6">
                <label htmlFor="Numbre_Equipe"> NumTel </label>
                <input
                  type="Number"
                  className="form-control"
                  id="NumTel"
                  required
                  name="NumTel"
                  value={this.state.NumTel}
                  onChange={this.onChangeNumTel}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="Genre">Genre</label>
                <input
                  type="text"
                  className="form-control"
                  id="Genre"
                  required
                  name="Genre"
                  value={this.state.Genre}
                  onChange={this.onChangeGenre}
                />
              </div>
            </div>
            <div className="row">
              <div className="mb-3 col-md-6">
                <label htmlFor="description">Nationalite</label>
                <input
                  type="text"
                  className="form-control"
                  id="Nationalite"
                  required
                  name="Nationalite"
                  value={this.state.Nationalite}
                  onChange={this.onChangeNationalite}
                />
              </div>
            </div>
            <button className="btn btn-primary" onClick={this.savehackathon}>Submit</button>
          </div>
        </form>
      </div>
    </div>
    );
  }
}

export default (Viewhackathon);
