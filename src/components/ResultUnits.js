import React, { Component } from "react";

class ResultUnits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      metric: 0.001,
    };
    this.setUnit = this.setUnit.bind(this);
  }

  setUnit(e) {
    this.setState({ metric: e.target.value });
    this.props.onUnitSelect(e.target.value);
  }

  render() {
    return (
      <div>
        <select value={this.state.metric} onChange={this.setUnit}>
          <option value="1">gr</option>
          <option value="0.001">kg</option>
          <option value="0.000001">ton</option>
          <option value="0.0022046226218">pound</option>
          <option value="0.03527396195">ounce</option>
        </select>
      </div>
    );
  }
}

export default ResultUnits;
