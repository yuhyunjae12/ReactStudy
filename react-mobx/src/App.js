import React, { Component} from 'react';
import { decorate, observable, action } from 'mobx';
import { observer } from 'mobx-react';

class Counter extends Component {
  number = 0;
  
  increase = () => {
    this.number++;
  }
  
  decrease = () => {
    this.number--;
  }
  
  render() {
    return (
      <div>
        <h1>{this.number}</h1>
        <button onClick={this.increase}>+1</button>
        <button onClick={this.decrease}>-1</button>
      </div>
    )
  }
}

// 해당 컴포넌트의 요소에 mobx 개념을 각각 적용할 수 있또록 해주는 함수.
// 첫번째 파라미터는 적용할 컴포넌트를 넣어 주었습니다.
// 두번째 파라미터에, Object방식으로 key를, mobx를 적용할 변수명 및 함수명, value 적용할 mobx 개념을 명시 합니다.
decorate(Counter ,{
  number: observable,
  increase: action,
  decrease: action
});

// obervable로 선언한 state 값이 변할 때, 컴포넌트 API인 forceUpdate()를 자동 호출하여 변경된 값이 화면에 반영된다.
export default observer(Counter);
