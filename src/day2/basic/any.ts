//* any
//- 모든 타입을 쓸 수 있어서 타입을 지정하지 않은 것과 마찬가지다.
//- 타입을 지정하여 엄격한 코드 작성을 하는 typescript 에서 any 는 typescript 를 사용하는 의미가 없다.
//- 따라서 any 타입은 피해야한다.

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
//- any 이기 때문에 어떤 타입을 써도 오류가 발생하지 않는다.
