import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Monger extends Component {
  render() {
    console.log(this.props)
    return <h2>{this.props.saludo} {this.props.literal}</h2>
  }
}

class Paragraph extends Component {
  render() {
    return <p>{this.props.print}</p>
  }
}

class App extends Component {
  render() {
    const saludo = 'yuuuhuuu!!'
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>WQuiero ser un monki core monki</h2>
        </div>
        <Monger saludo={saludo} literal='pipo' gender='neutral'/>
        <Monger saludo={saludo} literal='pipa' gender='neutral'/>
        <Monger saludo='yumyum' literal='yuli' age={33}/>

        <Paragraph print='Lorem ipsum monki trolling'/>
      </div>
    );
  }
}

export default App;
