/* Counter.js */
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {counter: 0,name: "Hello"};
  }
  handleClick = () => {
    let counter = this.state.counter + 1;
    this.setState({counter});
  }
  handleChange = (e) =>{
    let name = e.target.value;
    this.setState({name})
  }
  render() {
   // return <p>Counter</p>
    const {counter} = this.state;
    return (
      <div>
        Click: {counter}<br/>
        <button type="button" onClick={this.handleClick}>Button</button>
        <input type='text' value={this.state.name} onChange={this.handleChange}/>
      </div>
    )
  }
}

export default Counter;