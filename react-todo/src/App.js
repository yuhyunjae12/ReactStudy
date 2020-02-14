import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Board from './components/Board/Board';
import ClickEvent from './components/ClickEvent/ClickEvent';
import ClickEvent2 from './components/ClickEvent/ClickEvent2';

 class App extends Component {

   handleClick = function (){

      ClickEvent();

   }

  handleClick2 = () => {

    alert(ClickEvent2());

  }

   render() {
     return (
       <div>
         <Header/>
         <hr/>
         <Board/>
         <div>
          <button onClick={this.handleClick}>클릭 이벤트1</button>
         </div>
         <div>
          <button onClick={this.handleClick2}>클릭 이벤트2</button>
         </div>
       </div>
     );
   }
 }

export default App;
