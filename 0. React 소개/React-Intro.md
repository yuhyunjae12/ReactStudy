## React 소개

- React는 페이스북에서 사용자 UI 구축을 위해 만든 라이브러리입니다.
- 리액트에 관한 자세한 정리 https://ko.reactjs.org/docs/getting-started.html

## 리액트의 특징

- JSX 문법
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
    - 앱 생성 (create-react-app react-study)

```javascript

    npm install -g create-react-app

    create-react-app react-study

```

