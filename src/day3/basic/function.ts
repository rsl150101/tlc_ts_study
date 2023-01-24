//* JS 문법
function sumJS(a, b) {
  return a + b;
}

//* TS 문법
function sumTS(a: number, b: number): number {
  return a + b;
}
//- 매개 변수와 리턴 타입을 지정해주어야한다.

//* 타입 추론
function sum(a: number, b: number) {
  return a + b;
}

//- return type 을 지정해주지 않아도 리턴 타입을 추론해준다.
//- 타입스크립트에서는 함수의 인자를 모두 필수 값으로 간주합니다.
//- 선택적으로 인자 값을 받고 싶으면 인자에 ?(선택 속성)을 사용하면 됨.

//* 나머지 매개 변수일때
function sum1(a: number, ...nums: number[]): number {
  let totalOfNums = 0;

  for (let key in nums) {
    totalOfNums += nums[key];
  }

  return a + totalOfNums;
}

const result = sum1(10, 20, 30, 40); // 100

//* this
interface ThisInterface {
  count: number;
  init(this: ThisInterface): () => {};
}

let nd: ThisInterface = {
  count: 10,
  init: function (this: ThisInterface) {
    return () => {
      return this.count;
    };
  },
};

let getCount = nd.init();
let count = getCount();

console.log(count); // 10
