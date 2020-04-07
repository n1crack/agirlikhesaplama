import React from "react";

type UnitProps = {
  onUnitSelect: any;
};
type UnitStates = {
  factor: any;
};

export default class Unit extends React.Component<UnitProps, UnitStates> {
  constructor(props: UnitProps) {
    super(props);
    this.state = {
      factor: 10,
    };
    this.setUnit = this.setUnit.bind(this);
    this.props.onUnitSelect(10);
  }

  setUnit(e: any) {
    this.setState({ factor: e.target.value });
    this.props.onUnitSelect(e.target.value);
  }

  render() {
    return (
      <div className="select">
        <select value={this.state.factor} onChange={this.setUnit}>
          <option value="10">mm</option>
          <option value="1">cm</option>
          <option value="0.01">m</option>
          <option value="0.032808399">ft</option>
          <option value="0.393700787">inch</option>
        </select>
      </div>
    );
  }
}
