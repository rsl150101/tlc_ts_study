//* void
//- 말그대로 비어있다는 뜻으로 어떤 타입도 존재할 수 없음을 나타냄
//- 보통 함수에서 반환 값이 없을 때 반환 타입을 표현하기 위해 쓰임

function warnUser(): void {
  console.log("This is my warning message");
}

let unusable: void = undefined;
unusable = null; // 성공  tsconfig 에서 `--strictNullChecks` 을 사용하지 않을때만
