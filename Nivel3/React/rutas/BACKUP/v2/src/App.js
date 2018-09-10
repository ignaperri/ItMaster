import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">          
          <h1 className="App-title">Titulo del Mundo</h1>
        </header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">Acerca de</a></li>
          </ul>
        </nav>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/bZ4J-OE7hfI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
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