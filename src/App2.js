import React, { Component } from "react";

import "./App.css";
import Counter from "./components/Counter";
import Items from "./components/Items";

export default class App2 extends Component {
  state = {
    list:[]
  };

  AddItem=(x)=>{
      this.setState({list:this.state.list.concat(x)})
  }

  
  render() {
    return (
      <div className="App">
        <Counter AddItem={this.AddItem} />
        <Items list={this.state.list} />
      </div>
    );
  }
}
