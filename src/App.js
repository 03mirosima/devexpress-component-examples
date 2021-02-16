import React from "react";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import DataExpressTable from "./components/table/Table";
import NavBarExample from "./components/navbar/NavBarExample";
import ContextMenuExample from "./components/context-menu/ContextMenu";
import ItemTree from "./components/item-tree/ItemTree";
import TabExample from "./components/tabs/TabExample";
import MenuExample from "./components/menu/MenuExample";

class App extends React.Component {
  render() {
    /* const {} = this.state; */
    return (
      <div className="form">
        <h2>Menu</h2>
        <div>
         <MenuExample />
        </div>
        <br /> <br /> <br />
        <h2>Tabs</h2>
        <div>
          <TabExample />
        </div>
        <br /> <br /> <br />
        <h2>NavBar</h2>
        <NavBarExample />
        <br /> <br /> <br />
        <h2>Context Menu</h2>
        <div>
          <ContextMenuExample />
        </div>
        <br /> <br /> <br />
        <div>
        <h2>Tree List</h2>
        <ItemTree />
        </div>
        <br /> <br /> <br />
        <div>
          <h2>DataExpress Table</h2>
          <DataExpressTable />
        </div>
      </div>
    );
  }
}

export default App;
