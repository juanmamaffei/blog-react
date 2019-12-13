import React from 'react';

import './App.css';

import posts from './objetos/posts.json';
import Posts from './components/posts';

class App extends React.Component{
  
  state = {
    posts: posts
  }


  render(){
      return <div>
        
        <Posts posts={this.state.posts}></Posts>
      
      </div>
  }

}



export default App;
