import React, { Component } from "react";

class SelectTypes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      selectedItem: props.selectedItem
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e) {
    const selectedType = e.target.value;

    console.log(selectedType);
    this.props.onItemSelect(selectedType);
  }
  render() {
    return (
      <React.Fragment>
        <select
          name="filterType"
          onChange={this.handleSelect}
          className="filter-types center"
        >
          <option value="all">Filter by Type</option>
          {this.state.items.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
      </React.Fragment>
    );
  }
}

export default SelectTypes;
