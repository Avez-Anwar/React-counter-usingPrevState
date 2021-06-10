import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 4
    };
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  decrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  };

  render() {
    return (
      <div>
        {this.state.count}
        <br />
        <button onClick={this.incrementCount}>increment</button>
        <button onClick={this.decrementCount}>decrement</button>
      </div>
    );
  }
}

export default App;
