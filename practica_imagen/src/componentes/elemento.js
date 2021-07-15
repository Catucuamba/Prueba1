import React from 'react';

class Elemento extends React.Component{
    
    eliminarElemento=()=>{
        this.props.eliminarPersona(this.props.elem.id);
    }

    render(){
        const {elem}= this.props;
        return(
        <tr>
            <td>
                {elem.id}
            </td>
            <td>
                {elem.nombre}
            </td>
            <td>
                {elem.apellido}
            </td>
            <td>
                {elem.edad}
            </td>
            <td>
                <button onClick={this.eliminarElemento}>
                    Eliminar
                </button>
            </td>
        </tr>
        ) 
    }
}

export default Elemento;