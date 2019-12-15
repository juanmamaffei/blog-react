import React from 'react';

import './App.css';

import posts from './objetos/posts.json';
import Posts from './components/posts';

class App extends React.Component{
  
  state = {
    posts: posts
  }

  componentDidMount(){
    //Obtener JSON con posts
    let prom = fetch('https://jsonplaceholder.typicode.com/posts');
    prom.then((response)=>{
        response.json().then((data)=>{
            
            this.setState({posts: data})
            console.log(this.state);
        })
    })
}
  render(){
      return <div>
        
        <Posts posts={this.state.posts}></Posts>
      
      </div>
  }

}



export default App;
