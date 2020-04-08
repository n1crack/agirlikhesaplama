import React, { Component } from "react";
import ResultUnits from "./ResultUnits";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      factor: 0.001,
    };
  }

  setUnit(value) {
    this.setState(value);
  }

  value() {
    let value = this.props.value * this.state.factor;
    return value.toLocaleString(undefined, {
      useGrouping: false,
      maximumFractionDigits: 5,
    });
  }

  render() {
    return (
      <div>
        <label>Toplam:</label>
        <input
          className="input is-success"
          type="text"
          value={this.value()}
          readOnly
        />
        <ResultUnits
          onUnitSelect={(value) => this.setUnit({ factor: value })}
        />
      </div>
    );
  }
}

export default Result;
