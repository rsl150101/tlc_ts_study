//* 배열
//- 배열은 2가지 방법으로 쓸 수 있다.

// 첫번째
//- 타입 뒤에 [] 를 입력하여 표현
let numList: number[] = [1, 2, 3];
let strList: string[] = ["안", "녕", "하", "세", "요"];

// 두번째
//- 제네릭 배열 타입
//- Generic이란 데이터의 타입을 일반화한다(generalize)는 것
let genNumList: Array<number> = [1, 2, 3];
let genStrList: Array<string> = ["h", "i"];
