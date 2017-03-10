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
      literal: 'initial state',
      clickCount: 0
    }
  }

  changeClickCount(x) {
    return () => {
      this.setState({
        literal: 'state changed!',
        clickCount: this.state.clickCount + x
      })
    }
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
        <p>Click count is: {this.state.clickCount}</p>
        <button onClick={this.changeClickCount(1)}>Increase count</button>
        <button onClick={this.changeClickCount(-1)}>Decrease count</button>
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
