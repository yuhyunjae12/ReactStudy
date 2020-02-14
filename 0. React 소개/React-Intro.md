## React 소개

- React는 페이스북에서 사용자 UI 구축을 위해 만든 라이브러리입니다.
- 리액트에 관한 자세한 정리 https://ko.reactjs.org/docs/getting-started.html

## 리액트의 특징

1. JSX 문법
    - JSX는 자바스크립트 안에서 HTML 문법을 사용해서 View 를 구성할 수 있게 도와주는 문법입니다.
        
        - 예제 코드

        ```javascript
            // JSX문법을 사용하지 않는다면 이렇게 사용해야 하는 부분을
            const About = () => {
                return React.createElement(
                    'div',
                    'h2',
                    'About'
                )
            };
        ```

        ```javascript
            // 이렇게 사용할 수 있습니다.
            const About = () => {
                return (
                    <div>
                        <h2>About</h2>
                    </div>
                );
            };

        ```
2. 컴포넌트 기반입니다.

    - 리액트는 컴포넌트 기반 라이브러리 입니다.
        - 컴포넌트 기반으로 코드를 작성하기 때문에 여러부분을 분할해서 코드의 재사용성과 유지 보수성을 증가시켜 줍니다.
        - 컴포넌트 기반이기 때문에 
        예를 들어 코드의 일부분만 수정 해야 한다고 했을때
        수정해야 할 코드를 찾기에도 쉽고 다른 부분에서 문제를 발생시킬 염려가 없습니다.
        (그 부분의 코드만 수정 하면 됩니다.) 

3. 가상돔을 사용합니다.

    - 가상 돔은 기존 DOM의 한계를 탈피하기 위해 나온 대안입니다.
        - DOM이란 ? Document Object Model (단어 그대로 문서 객체 모델입니다.)

        - DOM 예제

        ![](0.1_dom.png)

        - 위 그림 처럼 기존의  DOM 구조는 트리 구조로 되어있습니다.
            
            - 트리구조로 이루어져 있기 때문에 DOM의 요소 하나를 수정하는 함수를 만들고 실행한다면
            렌더 트리를 재생성 하고 다시 레이 아웃을 만들게 됩니다.
            
            - SPA개발을 하면서 DOM요소를 많이 수정한다면 불필요한 연산이 매번 일어나게 되는 문제가 있습니다.
        
        - 그문제를 해결하기 위해 등장한 것이 가상돔입니다.

            - 가상돔은 변화를 가상돔에서 미리 인지해 변화시킵니다.
            그리고 실제 DOM이 아니기 때문에 렌더링도 되지 않고 연산비용이 실제 DOM보다는 적게 사용됩니다.
            변화된 가상 DOM을 마지막에 실제 DOM에 던져주어 한번에 렌더링 되게 합니다.

## 시작하기

- Node.Js 설치

    - Node.js 다운로드 링크 https://nodejs.org/ko/
    - 저는 12.16.0LTS 버전으로 설치 하였습니다.


- 프로젝트 생성

    - SPA 프로젝트 생성 (사용 boilerplate : create-react-app )
    - create-react-app의 특징 및 소개

        1. index.html, index.js를 포함한 기본 디렉토리 구성
        1. react, react-dom, react-scripts 및 dependency 라이브러리 설치
        1. react-scripts를 사용하여 package.json에 npm command 정의
        1. Create React App의 자세한 정리 https://github.com/facebook/create-react-app#create-react-app-

    - create-react-app 글로벌 설치 (npm install -g create-react-app)
    - 앱 생성 (create-react-app react-todo)

```javascript
    
    // 프로젝트 생성

    npm install -g create-react-app

    create-react-app react-todo

```

```javascript

    // 프로젝트 실행 (기본 포트 : 3000)

    cd react-todo

    npm start

```