import React, {Component} from 'react';

class KeyPad extends Component {
  render() {
    let vals = [
      '+', '-', 'CE',
      '*', '/', 'C',
      '7', '8', '9',
      '4', '5', '6',
      '1', '2', '3',
      '.', '0', '='
    ];
    let keys = [];

    for (let i in vals) {
      keys.push(<button name={vals[i]} onClick={x => this.props.onClick(x.target.name)}>{vals[i]}</button>);
      if (i%3 === 2) {
        keys.push(<br />);
      };
    };

    return (
    <div id="keyPad">
      {keys}
    </div>);
  }
}

export default KeyPad;
