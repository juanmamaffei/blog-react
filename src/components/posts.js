import React, {Component} from 'react';

class Posts extends Component{
    render(){
        return <div>{ this.props.posts.map((e)=> 
            <div key={e.id}><h2>{e.title}</h2>
              <strong>Id: {e.id}</strong>
              <p>{e.body}</p>
            </div>
            ) }</div>
    }
}

export default Posts;