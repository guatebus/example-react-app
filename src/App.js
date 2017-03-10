import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Monger extends Component {
  render() {
    console.log(this.props)
    return <h2>{this.props.saludo} {this.props.literal}</h2>
  }
}

class Article extends Component {
  render() {
    return (
      <div>
        <p>{this.props.print}</p>
        <p>Author name</p>
        <p>{this.props.author.name}</p>
        <p>Article date</p>
        <p>{this.props.author.date.toString()}</p>
        <p>Article length</p>
        <p>{this.props.author.length}</p>
        <p>Article content</p>
        <p>{this.props.children}</p>
      </div>
    )
  }
}

class App extends Component {

  constructor() {
    super()
    this.state = {
      user: { name:'', avatar:''},
      isSomething: true,
      posts: [],
      literal: 'initial state'
    }
    this.changeState = this.changeState.bind(this)
  }

  changeState() {
    console.log(this.state.literal)
    this.setState({
      literal: 'state changed!'
    })
    console.log(this.state.literal)
  }

  render() {
    const saludo = 'yuuuhuuu!!'
    const author = {name:'Carl Sagan', date:new Date('2017-03-09'), length:23}
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>WQuiero ser un monki core monki</h2>
        </div>
        <span>{this.state.literal}</span>
        <button onClick={this.changeState}>Change state</button>
        <Monger saludo={saludo} literal='pipo' gender='neutral'/>
        <Monger saludo={saludo} literal='pipa' gender='neutral'/>
        <Monger saludo='yumyum' literal='yuli' age={33}/>

        <Article print='Lorem ipsum monki trolling' author={author}>
          <span>HEllo world some stuff here to render as children prop</span>
        </Article>
      </div>
    );
  }
}

export default App;
