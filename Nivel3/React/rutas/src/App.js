import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import {NavLink} from 'react-router-dom'
import './App.css';
import Posts from './Posts'
import Users from './Users'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">          
          <h1 className="App-title">Titulo del Mundo</h1>
        </header>
        <nav>
          <ul>
            <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/about">Acerca de</NavLink></li>
            <li><NavLink to="/posts">Posts</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
          </ul>
        </nav>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/bZ4J-OE7hfI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/posts" component={Posts}/>
          <Route path="/users" component={Users}/>
        </Switch>        
      </div>
    );
  }
}


class Home extends Component {
  render() {
    return (
      <section>
        <h2>Esta es la parte principal de la Home</h2>
      </section>
    );
  }
}

class About extends Component {
  render() {
    return (
      <section>
        <h2>Esta es la parte principal de About</h2>
      </section>
    );
  }
}

export default App;