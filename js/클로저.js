// 클로저 : 함수가 해당 함수의 스코프 외부에 있는 변수에 접근할 수 있는 메커니즘
function Counter() {
  let count = 0;
  let increament = function() {
    count++;
    console.log(count);
  }
  let decreament = function() {
    count--;
    console.log(count);
  };
  return {
    increament,
    decreament,
  };
};
const myCounter = Counter();
myCounter.increament();