import React from "react";
import Menu from "devextreme-react/menu";
import axios from "axios";
import CustomStore from "devextreme/data/custom_store";

const menudata = new CustomStore({
  key: "id",
  loadMode: "raw",
  load: function () {
    return axios
      .get(
        "https://testdinamikoto.yuceyazilim.com.tr/api/Products/GetTopNavBar"
      )
      .then((response) => {
        return response.data;
      })
      .catch((err) => console.log(err));
  },
});

class MenuExample extends React.Component {
  render() {
    return (
      <Menu
        dataSource={menudata}
        displayExpr="title"
        orientation="horizontal"
        onItemClick={this.itemClick}
      />
    );
  }
}
export default MenuExample;
