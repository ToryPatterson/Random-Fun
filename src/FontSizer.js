import React from "react";

class FontSizer extends React.Component {
  constructor() {
    super();

    this.state = {
      size: 20
    };
  }

  crement = amt => {
    this.setState({
      size: this.state.size + amt
    });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.crement(5)}>Grow</button>
        <button onClick={() => this.crement(-5)}>Shrink</button>
        <p style={{ fontSize: `${this.state.size}px` }}>{this.state.size}px</p>
      </div>
    );
  }
}

export default FontSizer;
