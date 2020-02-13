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

- 라우터 파라미터 사용

    - 라우터 경로를 통해 특정 파라미터를 전달하는 방법에는 두가지(params, query) 방법이 있습니다
    
    - 라우터로 설정된 컴포넌트는 3가지의 props를 전달 받게 됩니다.

        - history : push, replace를 동해 이전 페이지 또는 앞뒤 페이지 전환을 할 수 있습니다.
        - location : 현재 경로에 대한 정보와 url query('/board?no=1')정보도 가지고 있습니다.
        - match : 라우트에 매칭 정보와 params('/board/:boardNo')정보를 가지고 있습니다.

    - Example (params)

        - src/shared/App.js 수정

        ```javascript

            import React, { Component } from 'react';
            // route import
            import { Route, Switch } from 'react-router-dom';
            import { Home, Board } from 'pages';

            class App extends Component {
                render() {
                    return (
                        <div>
                            // 라우트를 설정할 때에는 Route컴포넌트를 사용
                            // 경로는 path
                            // exact의 역할은 path에 설정된 경로에 정확하게 맞아 떨어져야만 Home컴포넌트를 렌더링 해줍니다.
                            <Route exact path='/' component={Home}  />
                            // Switch 컴포넌트를 사용하면 첫번째로 매칭되는 라우트만 보여주고 나머지는 보여주지 않습니다.
                            <Switch>
                                // params를 설정할때에는 :boardNo의 형식으로 설정합니다.
                                <Route path='/board/:boardNo' component={Board} />
                                <Route path='/board' component={Board} />
                            </Switch>
                        </div>
                    );
                }
            }

            export default App;

        ```        
        - src/pages/Board.js 수정

        ```javascript

           import React from 'react';

            const Board = ({match}) => {
                return (
                    <div>
                        // boardNo 라는 params를 match.parmas.boardNo를 통하여 확인 할 수 있습니다.
                        Board : {match.parmas.boardNo}
                    </div>
                );
            };

            export default Board;

        ```    
    - Example (query)

        - queryString 라이브러리 추가

        ```javascript

            npm add query-string

        ```   

        - src/pages/Board.js

        ```javascript

           import React from 'react';
           // query String import
           import queryString from 'query-string';

            const Board = ({location, match}) => {
                const query = queryString.parse(location.search);

                // 파라미터가 정상적으로 전달 되는지 테스트 하기위함
                const no = query.no ==1;

                return (
                    <div>
                        // 만약에 정상적으로 no 가 1로 전달 된다면 
                        // queryTest 텍스트가 표시 될것 입니다.
                        query : {no && 'no:queryTest'}
                    </div>
                );
            };

            export default Board;

        ```    
        - 'http://localhost:3000/Board/test?no=1'으로 테스트
