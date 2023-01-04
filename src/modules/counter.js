//액션타입(객체, 타입-필수)
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

//액션생성함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

//초기값(객체가 아니라 숫자라도 상관x)
const initialState = 0;

//리듀서(:변화를 일으키는 함수/state,action-두가지의 파라미터 )
//현재상태+전달받은 액션=>새로운 상태(리턴)
export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
