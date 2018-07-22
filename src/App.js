import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'
//import Counter from './Counter'
import Todo from './Todo'
import {Link, Switch, Route} from 'react-router-dom';
import Post from './Post';
import PostDetail from "./PostDetail"
//const message ='Hello World'
// function Welcome(props){
//   return <h1>Hello, {props.name}</h1>
// }
// const Welcome = (props) => (
// <div>
//   <h1>Hello, {props.name.charAt(0)}</h1>
//   {props.count+1}
// </div>
// )

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to='/'>Home</Link>,
        <Link to='/welcome'>Welcome</Link>,
        <Link to='/todo'>Todo</Link>,
        <Link to='/post'>Post</Link>,
        <Link to="gallary">Gallary</Link>,
        <Link to="/post/:id">PostDetail</Link>
        <Switch>
          <Route exact path="/todo" component={Todo}/>
          <Route path="/welcome" component={Welcome}/>
          <Route exact path="/todo/welcome" component={Welcome}/>
          <Route path="/post" component={Post}></Route>
          <Route path="/post/:id" component={PostDetail}/>
        </Switch>

      </div>
    );
  }
}

export default App;
