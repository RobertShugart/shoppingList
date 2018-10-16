import React, { Component } from "react";
class ShoppingItems extends Component {
  createTasks(item) {
    return (
      <li draggable="true" key={item.key}>
        {item.text}
      </li>
    );
  }

  render() {
    var shoppingEntries = this.props.entries;
    var listItems = shoppingEntries.map(this.createTasks);

    return <ul className="theList">{listItems}</ul>;
  }
}

export default ShoppingItems;
