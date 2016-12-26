import React, {Component} from 'react';

class DropdownList extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      selected: []
    }
  }

  handleChange(e) {
    const {options} = e.target;
    const selected = Object.keys(options)
                .filter(i => options[i].selected === true)
                .map(i => options[i].value);
    this.setState({
      selected
    });
  }

  render() {
    debugger;
    var listItems = this.props.items.map(function(item) {
      return (
        <option value={item.key}>{item.value}</option>
      );
    });

    return (
      <select onChange={this.handleChange}>
        {listItems}
      </select>
    );
  }
}

export default DropdownList;
