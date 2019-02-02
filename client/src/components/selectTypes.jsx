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
        <div className="input-field">
          <select onChange={this.handleSelect} className="browser-default">
            <option value="all">Choose Assignment Type</option>
            {this.state.items.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </React.Fragment>
    );
  }
}

export default SelectTypes;
