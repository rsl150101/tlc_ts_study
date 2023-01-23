interface Person {
  name: string;
}

interface Developer extends Person {
  skill: string;
}

let fe = {} as Developer;

fe.name = "josh";
fe.skill = "TypeScript";

interface Person2 {
  name: string;
}

interface Drinker {
  drink: string;
}

//* 다중 상속
interface Developer2 extends Person2, Drinker {
  skill: string;
}

let fe2 = {} as Developer2;
fe2.name = "josh";
fe2.skill = "TypeScript";
fe2.drink = "Beer";

//todo 상속 받은 인터페이스 오버라이드를 알아보기
interface test extends Omit<Developer, "name"> {
  name: number;
}
//- Omit 를 사용하여 name 속성을 제거한 Developer 를 상속 받고 재정의 할 수 있다.
