import React, { useState } from "react";

import hackathoneDataService from "../services/hackathone.service";


const AddHackathone = ()=>  {
  const [file, setFile] = useState();
 
const intialHack= {
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
    const [hack, setHack] = useState(intialHack)
    const newTutorial=()=> {
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
 const onChangeImage = (e) =>{
    setFile(e.target.files[0]);
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setHack({ ...hack, [name]: value });
    console.log(hack);
  };
  const saveHackathon = () => {
    // console.log(hack)
    const formData = new FormData()

    formData.append("file", file)
    formData.append("title", hack.title)
    formData.append("description", hack.description)
    formData.append("Rules", hack.Rules)
    formData.append("Date_début", hack.Date_début)
    formData.append("Date_fin", hack.Date_fin)
    formData.append("NomEntriprise", hack.NomEntriprise)
    formData.append("Numbre_Equipe", hack.Numbre_Equipe)
    for (var key of formData.entries()) {
      console.log(key[0] + ', ' + key[1]);
  }
  
    try{  
       hackathoneDataService.create(formData).then((data) => {
    
     setHack({
        id: data.id,
        title: data.title,
        description: data.description,
        Rules: data.Rules,
        Date_début: data.Date_début,
        Date_fin: data.Date_fin,
        NomEntriprise:data.NomEntriprise,
        Numbre_Equipe:data.Numbre_Equipe,
        image: data.image,
        published: data.published,
        submitted: true,
      });
      console.log(data);
      
    })
    .catch((e) => {
      console.log(e);
    })} catch(err){console.log(err)}
 
  }
 

  
 
    return (
      <div className="container mt-3">      
      <div className="content-body">
  
                        <div className="card">
        {hack.submitted ? (
          <div>
            <center>
            <h4>projet ajouté avec succès</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
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
                value={hack.NomEntriprise}
                onChange={handleInputChange}
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
                value={hack.title}
                onChange={handleInputChange}
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
                value={hack.Numbre_Equipe}
                onChange={handleInputChange}
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
                value={hack.description}
                onChange={handleInputChange}
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
                value={hack.Date_début}
                onChange={handleInputChange}
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
                value={hack.Date_fin}
                onChange={handleInputChange}
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
                value={hack.Rules}
                onChange={handleInputChange}
                name="Rules"
              />
            </div>
            <div className="form-group col-md-6">
            <label htmlFor="description">Image</label>
     <input type="file" class="form-control"  name='image'  onChange={onChangeImage} accept='image/x-png, image/gif, image.jpeg, image/jpg' required/> 

  </div>
            </div>

            <button onClick={saveHackathon} className="btn btn-primary ">
              Submit
            </button>
          </div></div></div>
        )}
      </div></div></div>
    );
  
}

export default AddHackathone;
