import React from 'react';

class Users extends React.Component{
    constructor(){
        super();

        this.state= {
            data: {}
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(data => this.setState({data}));
    }

    render(){
        console.log(this.state.data.address)
        return(
            <article>
                <h2>{this.state.data.name}</h2>
                <p>{this.state.data.username}</p>
                <p>{this.state.data.email}</p>
            </article>
        );
    }
}

export default Users;