// math.ts
// 에러의 사전 방지
function sum(a: number, b: number) {
  return a + b;
}

sum(10, 20); // 30
sum("10", "20");
// > Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
