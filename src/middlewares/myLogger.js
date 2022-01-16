const myLogger = (store) => (next) => (action) => {
  console.log(action); // action 출력
  const result = next(action); // 다음 미들웨어 혹은 리듀서에게 액션 전달

  // 업데이트 이후의 상태를 조회합니다.
  console.log("\t", store.getState());

  return result; // 여기서 반환하는 값은 dispatch(action)의 결과물이 됩니다.
};

export default myLogger;
