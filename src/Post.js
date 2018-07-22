import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Post extends Component{
    constructor(props) {
        super(props);
        this.state = {lists: [],title: "", url: ""};
        console.log(this.props.location.search)
        if (this.props.location.search !== null){
            this.state.url=this.props.location.search;
        }
       fetch('https://jsonplaceholder.typicode.com/posts'+this.state.url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            this.setState({lists:json});

        })
    }

    handleChange = (e) =>{
        this.setState({title:e.target.value});
    }

    submit = (e) =>{
        e.preventDefault();
        this.setState({url: '?title='+this.state.title});
        fetch('https://jsonplaceholder.typicode.com/posts?title='+this.state.title)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            this.setState({lists:json});
        })
    }
    
    render() {

         return (
           <div>
            <form onSubmit={this.submit}>
                <h2>React Style</h2>
                <input name="title" type ="text" value={this.state.title}  onChange={this.handleChange} />
                <button type="submit">search</button>
                <Link to={this.state.url}>search</Link>
            </form>
            <ul>
                {this.state.lists.map((list) => (
                    <li key={list.id}> 
                    <h2>{list.userId}</h2>
                    <h2>{list.id}</h2>
                    <h1>{list.title}</h1>
                    <p>{list.body}</p>
                    </li>
                ))}
            </ul>
           </div>
         )
    }
}

export default Post;