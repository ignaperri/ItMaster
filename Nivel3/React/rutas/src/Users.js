import React from 'react';

class Users extends React.Component{
    constructor(){
        super();

        this.state= {
            usuarios: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(res => {
            let usuarios = res.map(obj => obj);
            this.setState({ usuarios });
            console.log(usuarios);
          });
    
    }

    render(){
        return (
            this.state.usuarios.map(function (data) {
              return <div key={data.id}>
                <h1>{data.name}</h1>
                <p>Email: {data.email}</p>
                <p>Empresa: {data.company.name}</p>
                <p>Ciudad: {data.address.city}</p>
                <hr />
              </div>
            })
      
          );
        }
    }


export default Users;