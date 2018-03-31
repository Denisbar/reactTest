import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent.js';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  myCallBack(dataFromChildren) {
    this.setState({value: dataFromChildren});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">
          {this.state.value}
        </p>
        <MyComponent callBackFromParent={this.myCallBack} />
      </div>
    );
  }
}

export default App;
