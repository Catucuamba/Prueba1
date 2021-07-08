import React from 'react';

class MiForm extends React.Component{

    state = {
        color:"",
        nombre:""
    }


    myOnSubmit=(evn)=>{
        console.log(evn)
        evn.preventDefault();
    }

    myOnChange=(env)=>{
        console.log("En el evento OnChange", env.target.value);
        this.setState({
            color:env.target.value
        })
    }
    render(){
        return (
            <form onSubmit={this.myOnSubmit} >
                <input type="text" 
                placeholder="ingrese un color" 
                onChange={this.myOnChange} 
                value={this.state.color} />
                <br />
                <br />
                <input type="text" 
                placeholder="ingrese un nombre de imagen" 
                onChange={this.myOnChange} 
                value={this.state.nombre} />
                <br />
                <br />
                <input type="submit" />
            </form>
        )
    }
}

export default MiForm