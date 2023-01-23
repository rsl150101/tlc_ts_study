//* type assertions
//- 컴파일러가 가진 정보를 무시하고 프로그래머가 원하는 임의의 타입을 값에 할당
//- 타입 단언은 두 가지 형태가 있다.

// 첫번째
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// 두번째 as 문법
let asSomeValue: any = "this is a string";
let asStrLength: number = (someValue as string).length;
