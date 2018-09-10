import React from 'react';

class Posts extends React.Component{
    constructor(){
        super();

        this.state= {
            data: []
        }
    }

    componentWillMount(){
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => this.setState({data}));
    }

    render(){
        return(
            <article>
                <h2>{this.state.data.title}</h2>
                <p>{this.state.data.body}</p>
            </article>
        );
    }
}

export default Posts;