import React, { Component } from 'react';

// class App extends Component {
//   handleClick = () => {
//     notify();
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>Click Me</button>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   handleClick = () => {
//     import ('./notify').then(({ default:notify}) =>{ 
      
//       notify();
    
//     });
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>Click Me</button>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   state ={
//     SplitTest: null
//   };
//   handleClick = () => {
//     import ('./SplitTest').then(({ default:SplitTest}) =>{ 
//       this.setState({
//         SplitTest
//       });
//     });
//   };
//   render() {
//     const { SplitTest } = this.state;
//     return (
//       <div>
//         <button onClick={this.handleClick}>Click Me</button>
//         {SplitTest && <SplitTest />}
//       </div>
//     );
//   }
// }

import sharedSplitting from './sharedSplitting';

const SplitTest = sharedSplitting(() => import('./SplitTest'));

class App extends Component {
  state = {
    visible: false
  };
  handleClick = () => {
    this.setState({
      visible: true
    });
  };
  render() {
    const { visible } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        {visible && <SplitTest />}
      </div>
    );
  }
}

export default App;