import React from 'react';

class UserForm extends React.Component{

    constructor(){
        super();
        this.state = {
            userName:"",
            password:"",
            confirmPassword:""
        }
    }

    handlerUserNameChange = (event) => {
        var usuario = event.target.value;
        console.log(usuario);
        this.setState({userName: usuario});
    }
    handlerChange = (event, field) => {
       let newState = {};
       newState[field] = event.target.value;
       console.log(newState);
       this.setState(newState);
    }

    handlerClick = () =>{
        alert(JSON.stringify(this.state, null, 4));
    }


    render(){
        return(
            <div>
                <label style={{background:'yellow'}}>Formulario alta usuario</label>
                <br/>
                <label>Nombre de usuario </label>
                <input onChange={(event) => this.handlerChange(event, 'userName')}/>
                {this.state.userName.length < 5 && this.state.userName.length > 0 ? <label style={{color:'red'}}>Debe tener 5 o mas caracteres</label> : ""}
                <br/>
                <label>Contraseña </label>                
                <input onChange={(event) => this.handlerChange(event, 'password')}/>
                {this.state.password.length < 4 && this.state.password.length > 0 ? <label style={{color:'red'}}>Debe tener 4 o mas caracteres</label> : ""}
                <br/>
                <label>Confirmar Contraseña </label>                
                <input onChange={(event) => this.handlerChange(event, 'confirmPassword')}/>
                {this.state.confirmPassword.length > 0 && this.state.confirmPassword !== this.state.password ? <label style={{color:'red'}}>Las contraseñas deben ser iguales</label> : ""}
                <br/>
                <br/>
                <button onClick={this.handlerClick}>Crear!</button>
            </div>
        )
    }
}

export default UserForm;