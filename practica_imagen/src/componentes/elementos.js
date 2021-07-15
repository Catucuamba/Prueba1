import React from 'react';
import '../App.css';
import Elemento from './elemento';

class Elementos extends React.Component{

    render(){
        
        return( 
            <table className = "TableNames" align = "center">
                {this.props.personas.map((s)=>
                <Elemento 
                    key={s.id} 
                    elem = {s} 
                    eliminarPersona = {this.props.eliminarPersona}
                />
                )}
            </table>
        )
    }
}

export default Elementos;