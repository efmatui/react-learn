import React, { Component } from 'react';

class Welcome extends Component {
  constructor(props){
    super(props);

    this.state = {now: new Date()};
    
    setInterval(this.tick, 1000);
  }

  tick = () => {
    this.setState({
      now: new Date(),
    });
  }

  render() {
    const {now} = this.state;
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <p>Now is : {now.toLocaleString()}</p>
      </div>
    )
  }
}

export default Welcome;