import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increase } from "../modules/counter";
const CounterContainer = () => {
  const number = useSelector((state) => state.counter);
  //useSelector: 리덕스 스토어 관련 hooks이다./ 스토어의 상태값을 반환해주는 역할
  //리덕스 스토어의 상태값이 바뀐 경우, 바뀐 스토어의 상태 값을 다시 가져와 컴포넌트를 렌더링 시킨다.
  //connect함수 사용하지 않고, 리덕스 state 조회 가능
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  return (
    <>
      <h1>REDUX</h1>
      <Counter
        number={number}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </>
  );
};

export default CounterContainer;
