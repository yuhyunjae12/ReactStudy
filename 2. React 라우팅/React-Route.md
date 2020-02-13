## React Route

- 라우트 프로젝트 생성

```javascript
    
    // 라우트 테스트 프로젝트 생성
    create-react-app react-route

```

- 라이브러리 설치

```javascript
    
    // 브라우저에서 사용되는 리액트 라우터 입니다.
    npm add react-router-dom

    // 프로젝트에서 NODE_PATH를 사용하여 절대 경로로 파일을 불러 오기위해
    // 환경변수를 공통적인 방법으로 설정 할 수 있게 해주는 라이브러리 입니다.
    npm add cross-env --dev

```

- 프로젝트 구조 설정

    - 제거 파일
        - src/App.js
        - src/App.css
        - src/App.test.js
        - src/logo.svg

    - 추가 디렉토리
        - src/components: 컴포넌트 디렉토리
        - src/pages: 라우터 들이 위치하는 디렉토리
        - src/client: 최상위 컴포넌트(서버사이드 랜더링과 구별하기위함)
        - src/server: 서버사이드 디렉토리
        - src/shared: 서버&클라이언트 공용 컴포넌트 App.js

    - NODE_ENV 설정
        - '../pages/Home'이런식으로 불러와야 하는 코드를 'pages/Home'으로 불러 올 수 있도록 프로젝트 루트 경로 설정
        - package.json 에 scripts 부분 수정

        ```javascript

            "scripts": {
                "start": "cross-env NODE_PATH=src react-scripts start",
                "build": "cross-env NODE_PATH=src react-scripts build",
                "test": "react-scripts test --env=jsdom",
                "eject": "react-scripts eject"
              }

        ```

    - src/shared/App.js 컴포넌트 생성

    ```javascript  

            import React, { Component } from 'react';

            class App extends Component {
                render() {
                    return (
                        <div>
                            React-Route-Study
                        </div>
                    );
                }
            }

            export default App;

    ```

    - src/client/Root.js Root 컴포넌트 생성

    ```javascript  

            import React from 'react';
            // 웹어플리 케이션에 BrowserRouter 를 적용
            import { BrowserRouter } from 'react-router-dom';
            import App from 'shared/App';

             const Root = () => (
                 <BrowserRouter>
                     <App/>
                 </BrowserRouter>
             );


            export default Root;

    ```

    - src/index.js 위에 생성한 컴포넌트에 맞춰 index.js수정

    ```javascript  

            import React from 'react';
            import ReactDOM from 'react-dom';
            import './index.css';
            // Root 컴포넌트 import
            import Root from './client/Root';
            import * as serviceWorker from './serviceWorker';

            // <App/> -> <Root/>위에 생성한 Root로 수정
            ReactDOM.render(<Root />, document.getElementById('root'));

            serviceWorker.unregister();

    ```

    - 실행 테스트

    ```javascript

        npm start

    ```

- 라우트 컴포넌트 생성

    - src/pages/Home.js

    ```javascript

       import React from 'react';

        const Home = () => {
            return (
                <div>
                    HOME
                </div>
            );
        };

        export default Home;

    ```

    - src/pages/Board.js

    ```javascript

       import React from 'react';

        const Board = () => {
            return (
                <div>
                    Board
                </div>
            );
        };

        export default Board;

    ```

    - src/pages/index.js

    ```javascript

        // 생성한 라우터 컴포넌트를 공통으로 관리할 인덱스 컴포넌트
        export { default as Home } from './Home';
        export { default as Board } from './Board';

    ```

- 라우트 설정

    - src/shared/App.js

    ```javascript

        import React, { Component } from 'react';
        // route import
        import { Route } from 'react-router-dom';
        import { Home, Board } from 'pages';

        class App extends Component {
            render() {
                return (
                    <div>
                        // 라우트를 설정할 때에는 Route컴포넌트를 사용
                        // 경로는 path
                        // exact의 역할은 path에 설정된 경로에 정확하게 맞아 떨어져야만 Home컴포넌트를 렌더링 해줍니다.
                        <Route exact path='/' component={Home}  />
                        <Route path='/board' component={Board} />
                    </div>
                );
            }
        }

        export default App;

    ```