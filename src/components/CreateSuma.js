import React, { Component } from 'react'
import axios from 'axios'

export default class CreateSuma extends Component {

    state = {
        nombre: '',
        salario: []
    }


    



// ejecutar codigo cuando el componente se a montado
   async  componentDidMount(){
       const res = await  axios.get('http://localhost:4000/api/salarios');
        this.setState({sumas: res.data});
        console.log(this.state.sumas);
    }

    render() {
        
        return (
            <div>
                CREATE SUMA
            </div>
        )
    }
}
