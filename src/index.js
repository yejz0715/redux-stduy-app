import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import rootReducer from "./modules";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

//프로젝트에 리덕스 적용하기
//src-index.js에서 루트리듀서를 불러와서 새로운 스토어 만들고,
// Provider를 사용해 프로젝트 적용.
//Provider: 리액트 앱에 스토어를 쉽게 연동할 수 있는 컴포넌트

const store = createStore(rootReducer);
//createStore : 저장소(store) 생성- App에는 하나의 저장소만 있어야함.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

/*
redux: 상태관리 라이브러리이다.
규칙3
1. 하나의 애플리케이션 안에 하나의 스토어가 있다.
2. 상태는 읽기전용.
   기존상태 건들지 않고, 새로운 상태 생성하여 업데이트 함
3. 리듀서는 순수한 함수
    리듀서 함수는 이전상태와 액션 객체를 파라미터로 받음. 
    이전의 상태는 건들이지 않고, 변화를 일으킨 새로운 상태 객체를 만들어서 반환  
    똑같은 파라미터로 호출된 리듀서는 똑같은 결과값을 반환

액션(Action):상태에 변화가 필요할때, 액션 발생시킴/ 하나의 객체/타입은 필수
액션생성함수(Action creator):액션을 만드는 함수.(컴포넌트에서 더욱 쉽게 액션을 발생시키기 위함)
리듀서(Reducer):변화를 일으키는 함수/ 두가지의 파라미터 받음(state, action)
스토어(Store):애플리케이션에는 하나의 스토어를 만든다.(현재 앱 상태+리듀서+내장함수등 포함되어있음)
디스패치(dispatch):스토어의 내장함수/ 액션을 발생시키는 것
구독(subscribe):스토어의 내장함수/ 함수형태의 값을 파라미터로 받아옴
subscribe함수에 특정함수를 전달해주면, 액션이 디스패치 되었을때마다 전달해준 함수가 호출




*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
