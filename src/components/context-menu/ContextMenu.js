import React from 'react';

import ContextMenu from 'devextreme-react/context-menu';
import notify from 'devextreme/ui/notify';

import { contextMenuItems as items } from './data.js';
function itemClick(e) {
  if (!e.itemData.items) {
    notify(`"${ e.itemData.text }" tıklandı`, 'success', 1500);
  }
}

class ContextMenuExample extends React.Component {

  render() {
    return (
      <React.Fragment>
        <h1 id="target">Sağa Tıkla</h1>
        <ContextMenu
          dataSource={items}
          width={200}
          target="#target"
          onItemClick={itemClick} />
          <ContextMenu
          dataSource={items}
          width={200}
          target="#table"
          onItemClick={itemClick} />
      </React.Fragment>
    );
  }
}

export default ContextMenuExample;