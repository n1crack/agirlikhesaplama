import React from "react";
import Unit from "./Unit";

type UnitProps = {
  label: string;
  value: number;
  placeholder: string;
  factor: number;
  onChange: any;
};

type UnitStates = {
  label: string;
  placeholder: string;
  value: number;
  factor: number;
};

export default class Dimension extends React.Component<UnitProps, UnitStates> {
  constructor(props: UnitProps) {
    super(props);
    this.state = {
      label: this.props.label,
      placeholder: this.props.placeholder,
      value: this.props.value,
      factor: this.props.factor,
    };
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidUpdate() {
    this.handleStatusChange();
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    return nextProps.onChange === this.props.onChange;
  }

  handleStatusChange() {
    return this.props.onChange(this.state);
  }

  setFactor(value: number) {
    this.setState({
      value:
        (Number(this.state.value) * Number(value)) / Number(this.state.factor),
    });
    this.setState({ factor: Number(value) });
  }

  render() {
    return (
      <div>
        <input
          className="input"
          type="number"
          min={0}
          placeholder={this.props.placeholder}
          onChange={(e) => this.setState({ value: Number(e.target.value) })}
          value={this.state.value || ""}
        />
        <Unit onUnitSelect={(factor: number) => this.setFactor(factor)} />
      </div>
    );
  }
}