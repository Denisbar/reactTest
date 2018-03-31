import React, { Component } from 'react';

class MyComponent extends Component {

  someFunc() {
    let myData = 'data from MyComponent';

    this.props.callBackFromParent(myData);
  
  }
  render() {

    return (
      <div>
        hello from my component
      </div>
    );
  }
}

export default MyComponent;
