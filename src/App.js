import React, { Component } from "react";
import { Flex } from "reflexbox";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <Flex align="center" justify="center" style={{ height: "800px" }}>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </Flex>
    );
  }
}

export default App;
