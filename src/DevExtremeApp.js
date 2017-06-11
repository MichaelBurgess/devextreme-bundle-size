import React, { Component } from "react";
import $ from "jquery";
import "devextreme/ui/data_grid";

class DevExtremeApp extends Component {
  componentDidMount() {
    $(this.gridDiv).dxDataGrid({
      dataSource: [
        {
          name: 'David',
          age: 25
        },
        {
          name: 'Peter',
          age: 48
        }
      ],
      columns: ['name', 'age']
    })
  }

  render() {
    return <div ref={gridDiv => this.gridDiv = gridDiv}></div>;
  }
}

export default DevExtremeApp;
