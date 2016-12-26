import React, {Component} from 'react';
import DropdownList from "../../components/dropdownList/dropdownList";

class CreateNewRepo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const repoTypes = [{key: "repo", value: "人像特征库"}, {"key": "bula", value: "人像bula库"}];
    return (
      <div>
        <form>
          <label>库名称</label><input type="text"/>
          <label>库类型</label>
          <DropdownList items={repoTypes}></DropdownList>
          <label>备注</label><input type="text"/>
          <label>创建时间</label><span></span>
        </form>
      </div>
    );
  }
}

export default CreateNewRepo;
