
//importo la libreria de react
import React,{Component} from "react";

//conectar a estilos
import './productos.css'
//creo una lista de datos

const list = [
    {
        id: 1,
        nombre:'Avianca',
        costo: 120000,
    },
    {
        id: 2,
        nombre:'Wingo',
        costo: 150000,
    },
    {
        id: 3,
        nombre:'Aeromexico',
        costo: 500000,
    }
];
//creamos la clase
function buscar(nombreLibro){
    return function(item){
        return item.nombre.toLowerCase().includes(nombreLibro.toLowerCase())
    }
}

class Productos extends Component{
    constructor(props) {
        super(props);

        this.state = {
            list,
            nombreLibro:'',
        };

        this.eliminar =this.eliminar.bind(this);
        this.onSearchChange =this.onSearchChange.bind(this);
    }

    eliminar(id){
        const isNotId = item => item.id !== id;
        const listActualizada =
        this.state.list.filter(isNotId);
        this.setState({ list: listActualizada });
    }
    onSearchChange(event){
        this.setState({ nombreLibro: event.target.value})
    }

    render(){
        return(

            
            
            <center>
            <form>
                <input type="text" onChange={this.onSearchChange} placeholder="Digite Su Busqueda..."></input>
            </form>
                <table>
                    <div>
                        <th>Nombre</th>
                        <th>Costo</th>
                        <th>Eliminar</th>
                        
                {this.state.list.filter(buscar(this.state.nombreLibro)).map(item =>
                    <tbody key={item.id}>
                        <tr>
                           <td> {item.nombre}</td>
                       
                           <td> {item.costo}</td>
                        
                            <td>
                            <button class="btn" onClick={()=>this.eliminar(item.id)} type="button">
                            <img src="quitar-usuario.png" class="img"></img>

                            </button>
                            </td>
                        </tr>
                    </tbody>
                    )}
            </div>
            </table>
            </center>
        )
    }
}
//exporto la clase
export default Productos;

