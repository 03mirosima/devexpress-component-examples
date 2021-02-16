import React from "react";
import axios from "axios";
import CustomStore from "devextreme/data/custom_store";
import TabPanel from 'devextreme-react/tab-panel';

const tabdata = new CustomStore({
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

class TabExample extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="tabs">
          <TabPanel dataSource={tabdata} />
        </div>
      </React.Fragment>
    );
  }
}

export default TabExample;
