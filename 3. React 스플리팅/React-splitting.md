## 코드 스플리팅

- 코드 스플리팅이란

  - javascript로 앱을 개발하게 되면, 하나의 파일에 모든 로직들이 들어가게됩니다.
  하나의 파일에 집중 되다 보니 js파일의 용량도 늘어나고, 용량이 커지면 그만큼 페이지 로딩속도도 느려질 수 밖에 없습니다.

  - 코드 스플리팅을 하게 되면, 지금 당장 필요한 코드가 아니면 따로 분리시켜 필요할 경우에 불러와서 사용할 수 있습니다.
  그만큼 페이지 로딩 속도를 개선 할 수 있습니다.

- 코드 스플리팅 함수 준비

  - src/notify.js 추가

  ```javascript

    function notify(){
      alert('알림');
    }

    export default notify;

  ```

  - src/App.js 수정

  ```javascript

    import React, { Component } from 'react';

     class App extends Component {
       handleClick = () => {
         notify();
       };
       render() {
         return (
           <div>
             <button onClick={this.handleClick}>Click Me</button>
           </div>
         );
       }
     }

    export default App;

  ```  

  - 이렇게 설정하고 클릭 버튼을 누르면 notify함수의 알림창이 뜨게 됩니다.
  이제 이부분을 스플리팅 해보겠습니다.

  - src/App.js 수정

  ```javascript

    import React, { Component } from 'react';

    class App extends Component {
      handleClick = () => {
        // notify import를 함수로 호출하는것으로 변경
        // default로 notify를 호출하겠다고 선언
        import ('./notify').then(({ default:notify}) =>{ 
          
          notify();
        
        });
      };
      render() {
        return (
          <div>
            <button onClick={this.handleClick}>Click Me</button>
          </div>
        );
      }
    }

    export default App;

  ``` 

  - import를 함수로 사용하면 Promise를 반환합니다.
  import() 함수는 표준은 아니지만 webpack에서 지원해주는 함수 이기에 별도의 설정없이 바로 사용 할 수 있습니다.
  이함수는 모듈을 비동기적으로 불러오기 때문에 따로 default를 명시해 주어야 합니다.
  이렇게 하고 나서 Chrome 개발자 도구에 NetWork탭을 확인 하게 되면 chunk.js 파일을 호출하게 되고 그안에 notify관련 코드를 확인할 수 있습니다.
  이렇게 분리된 파일을 청크 파일이라고 합니다.