## React 비동기 처리

  - React에서 비동기 처리 방법중 axios를 사용하여 비동기 처리를 해보겠습니다.

    - axios의 장점

      + IE까지 대부분의 브라우저를 지원 ( 구형 브라우저 포함 )

      + Json 데이터를 자동 파싱 ( .json() 사용할 필요 X )

      + Node.js에서도 사용가능하다 

      + 요청을 중도 Cancel, 응답 시간 초과 설정 등의 기능이 있다.

      + 400, 500대의 Error 발생시에 reject로 response를 전달해 catch로 잡아 낼 수 있다.

    - axios 시작하기

    - 기존과 동일하게 create-react-app 으로 프로젝트를 생성

    - axios 설치
      ```javascript
      
      npm install --save axios
      
      // UI CSS 설치 CSS를 위해서..
      npm install --save semantic-ui-react semantic-ui-css

      ```
    - 프로젝트 구조

    ```
      react-axios
        -node_modules
        -public
        -src
          -components /* 컴포넌트 디렉토리 */
          -contatiners /* 컴포넌트들의 루트 컴포넌트 디렉토리 */
          -service /* axios api선언 디렉토리 */
          ...
          ...
          ...

    ```

      - 기존 구조에서 components, containers, service 디렉토리를 추가 하였습니다.
  
      - 