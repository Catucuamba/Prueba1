import React from 'react';
import './App.css';
import personas from './datos/personas.json';
import Elementos from './componentes/elementos';
import MyForm2 from './componentes/MyForm2';

class App extends React.Component{

  state ={
    personas:personas
  }

  añadirPersona=( nombre, apellido,edad )=>{
    const newPersona  = {
      id : this.state.personas.slice(-1)[0].id+1,
      nombre: nombre,
      apellido:apellido,
      edad:edad
    }
    this.setState({
      personas: [...this.state.personas, newPersona]//this.state.practica1.push(newElement)
    })
  }

  eliminarPersona=(id)=>{
    
    const newState = this.state.personas.reduce((newArr,obj) =>{
      if(obj.id !== id){
        return newArr.concat(obj);
      }
      return newArr
    },[]);
    
    this.setState({
      personas: newState
    })
  }


  render(){
    return<div>
      <MyForm2 añadirPersona={this.añadirPersona} />
      <br />
      <Elementos personas={this.state.personas} eliminarPersona={this.eliminarPersona}   />
    </div>
  }
}


export default App;
