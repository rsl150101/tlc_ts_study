// math.ts
// 에러의 사전 방지
function sumsum(a: number, b: number) {
  return a + b;
}

sumsum(10, 20); // 30
// sumsum("10", "20");
// > Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
