import React, { Component } from "react";
import ShoppingItems from "./ShoppingItems";
import "./ShoppingList.css";

class ShoppingList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
    }

    this._inputElement.value = "";

    console.log(this.state.items);

    e.preventDefault();
  }

  render() {
    return (
      <div className="shoppingListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              ref={a => (this._inputElement = a)}
              placeholder="enter shopping item"
            />
            <button type="submit">add</button>
          </form>
          <div className="needToBuy">
            <h1>Need To Buy</h1>
          </div>
        </div>
        <ShoppingItems entries={this.state.items} />
      </div>
    );
  }
}

export default ShoppingList;
