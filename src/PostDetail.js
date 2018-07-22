import React, { Component } from 'react';

class PostDetail extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}')
        .then((response) =>{
            return response.json();
        }).then((data)=>{
            console.log(data);
            this.setState({...data});
        })
    }
    render(){
        const{id, title} = this.state;
        return (
            <div>
            Post Detail
            {title}
            </div>
        )
    }
}

export default PostDetail;