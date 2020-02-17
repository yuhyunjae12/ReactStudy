import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
   super(props);
   
   this.state ={
     articles:[
       {title : 'redux1', id: 1},
       {title : 'redux2', id: 2}
     ]
   }
  }

  render() {
    const { articles } = this.state;
    return (
      <ul>
        {
          articles.map(
            el => 
            <li key={el.id}>
              {el.title}
              </li>
              )
        }
      </ul>
    );
  }
}
