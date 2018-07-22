import React, { Component } from 'react';
class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {lists: [] , name: "", str:""};
        
      }
    handleClick = () =>{
        let lists=this.state.lists;
        lists.push(this.state.name);
        this.setState({lists});

    }

    handleName = (e) =>{
        this.setState({name:e.target.value});
    }

    render() {
        // return <p>Counter</p>
         return (
           <div>
            <ul>
                {this.state.lists.map((value,index) => (
                    <li key={index}>{
                        value}
                    </li>
                ))}
            </ul>
             <input type='text' value={this.state.name} onChange={this.handleName}/>
             <button type="button" onClick={this.handleClick}>Button</button>
           </div>
         )
    }
}
export default Todo;