import React, { Component } from "react";

export default class Counter extends Component {
    state={
        count:0, 
        input:""
    }

    increment=()=>{
        this.setState({count: this.state.count + 1 })
    }
    decrement=()=>{
        this.setState({count: this.state.count - 1 })
    }

    handelChange=(e)=>{
        this.setState({input: e.target.value})
    }


  render() {
    return (
      <div className="App">
        <button onClick={this.increment}>+</button>
        <h2>{this.state.count}</h2>
        <button onClick={this.decrement}>-</button>
        <br/>
        <input type="text" onChange={this.handelChange}></input>
        <button onClick={()=>this.props.AddItem(this.state.input)}>ADD</button>
      </div>
    );
  }
}
