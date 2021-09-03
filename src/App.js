import React, { Component } from 'react';
import './App.css';
import ResultScreen from './components/ResultScreen';
import KeyPad from './components/KeyPad';

class App extends Component{
  constructor() {
    super();
    this.state = { result: "" };
  }

  calculate = () => {
    console.log("calculate");
  }

  onClick = button => {
    if (button==="=") {
      this.setState({ result: eval(this.state.result)});
    } else if (button==="C") {
      this.setState({ result: "" });
    } else if (button==="CE") {
      this.setState({ result: this.state.result.slice(0, -1)})
    } else {
      this.setState({ result: this.state.result + button });
    }
  }

  render() {
    return(<div>
            <ResultScreen result={this.state.result} />
            <KeyPad onClick={this.onClick} />
          </div>);
  }
}

export default App;
