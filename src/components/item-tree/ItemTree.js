import React from 'react';
import TreeView from 'devextreme-react/tree-view';

import itemdata from './itemdata.js';

class ItemTree extends React.Component {
  constructor(props) {
    super(props);
    this.products = itemdata.getProducts();
    this.state = {
      currentItem: Object.assign({}, this.products[0])
    };
    this.selectItem = this.selectItem.bind(this);
  }

  render() {
    const { currentItem } = this.state;
    return (
      <div className="form"  style={{marginLeft: "20px"}}>
        <TreeView id="simple-treeview"
          items={this.products}
          width={300}
          onItemClick={this.selectItem} />
        {currentItem.id &&
        <div id="product-details">
          <div className="name"><p style={{color: "red", fontSize: "15px"}}>{currentItem.text}</p></div>
        </div>
        }
      </div>
    );
  }

  selectItem(e) {
    this.setState({
      currentItem: Object.assign({}, e.itemData)
    });
  }
}

export default ItemTree;
