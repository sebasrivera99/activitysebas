import React, {Component} from "react";

//conectar a estilos
import './ListarTareas.css'

class ListaTareas extends Component {
    constructor(props){
        super(props);

        this.state = {
            userName: "Sebastian",
            tdoItems: [{
                accion: "Endulzar con 5mil pesos",
                done: false,
            },
            {
                accion: "Comprar almuerzo",
                done: true,
            }],
            newItemText: "",
        }
    }

    UpdateNewTextValue = (event) => {
        this.setState({newItemText: event.target.value});
    }
    CreateNewTodo = () => {
        if (!this.state.tdoItems
            .find(item => item.accion === this.state.newItemText)) {
                this.setState({
                    tdoItems: [...this.state.tdoItems,
                    {
                        accion: this.state.newItemText,
                        done: false
                    }],
                });
            }
    }

    toggleTodo =  (todo) => this.setState({tdoItems:
    this.state.tdoItems.map(item => item.accion === todo.accion
        ? { ...item, done: !item.done} : item)});

    TodoTableRows = () => this.state.tdoItems.map(item =>
        <tr key={ item.accion}>
            <td>{ item.accion}</td>
            <td>
                <input type="checkbox" checked={ item.done }
                onChange={ () => this.toggleTodo(item)}></input>
            </td>
        </tr>)
    render(){
      
        return(
            
                <center>
            <div className="general">
                <h4 className="bg-primary text-white text-center p-2">Lista de Tareas de { this.state.userName} <span></span> - {this.state.tdoItems.filter(t => !t.done).length } Cosa(s) por hacer</h4>
                <div className="container-fluid">
                    <div className="my-1">
                        <input className="form-control" value={ this.state.newItemText}
                        onChange={ this.UpdateNewTextValue} placeholder="Digite sus Tareas..."></input>
                        <button className="btn btn-primary mt-1" onClick={ this.CreateNewTodo}>Add</button>
                    </div>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr><th>Descripcion</th></tr>
                        </thead>
                        <tbody>{ this.TodoTableRows()}</tbody>
                    </table>
                </div>
            </div>
            </center>
           
        );
        
    }
}
export default ListaTareas;