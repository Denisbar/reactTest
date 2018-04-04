import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {store} from './index.js'
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="container">
        <button onClick={() => {
          this.props.setName("Denis")
        }}>Set Name</button>
        <p>
          {this.props.user.name}
        </p>
        <button onClick={() => {
          this.props.setResultValue(800)
        }}>Set Result</button>
        <p>
          {this.props.math.result}
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      user: state.user,
      math: state.math
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch({
                type: "SET_NAME",
                payload: name
            });
        },
        setResultValue: (value) => {
          dispatch({
            type: "ADD",
            payload: value
          })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

