import React from 'react';
import ReactDOM from 'react-dom';

class NumberPad extends React.Component{
  render() {
    let rows = [];
    let row = [];

    // bottom most number pad
    ['C', '0', '.'].forEach(key => row.push(<td key={`numberPad-cell${key}`}>{key}</td>))
    rows.push(<tr key={`numberPad-row0`}>{row}</tr>);
    row = [];

    // rest of number pad
    for (let i = 1; i < 10; i++) {
      let cellID = `numberPad-cell${i}`;
      row.push(<td key={cellID}>{i}</td>);
      if (i % 3 === 0) {
        let rowID = `numberPad-row${i/3 + 1}`;
        rows.push(<tr key={rowID}>{row}</tr>);
        row = [];
      }
    }
    return <table><tbody>{rows.reverse()}</tbody></table>;
  }
}

class OpPad extends React.Component {
  render() {
    let rows = [];
    let row = [];
    const ops = ['+', '-', 'x', '/', '%', '='];

    for (let i = 0; i < ops.length; i++) {
      row.push(<td key={`opPad-cell${ops[i]}`}>{ops[i]}</td>)
      if (i % 2 === 1) {
        rows.push(<tr key={`opPad-row${i/2}`}>{row}</tr>);
        row = [];
      }
    }

    return <table><tbody>{rows}</tbody></table>;
  }
}

class DisplayScreen extends React.Component {
  render() {
    return <p>0</p>
  }
}

ReactDOM.render( <NumberPad />, document.getElementById('numberPad') );
ReactDOM.render( <OpPad />, document.getElementById('opPad') );
ReactDOM.render( <DisplayScreen />, document.getElementById('displayScreen') );
