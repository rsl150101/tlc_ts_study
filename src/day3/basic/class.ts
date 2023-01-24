//* Readonly
class Developer {
  readonly name: string;

  constructor(theName: string) {
    this.name = theName;
  }
}

let john = new Developer("John");
// john.name = "John"; // error! name is readonly.

//*  Accessor
//- 객체의 특정 속성의 접근과 할당에 대해 제어할 수 있다.

class Developer1 {
  private _name: string;

  get name(): string {
    return this._name;
  }

  set name(newValue: string) {
    if (newValue && newValue.length > 5) {
      throw new Error("이름이 너무 깁니다");
    }
    this._name = newValue;
  }
}

const josh = new Developer1();
josh.name = "Josh";
console.log(josh.name); //Josh

//- public : 자식 클래스나, 클래스 인스턴스에서 접근이 가능한 값(default)
//- private or # : 자식 클래스에서 접근 불가능함, 자신 내부에서만 사용할 수 있게됨
//- protected : 자식 클래스에서 접근이 가능함, 클래스 인스턴스에서는 참조가 불가능함,
//-             프로그래머들 사이에서 약속으로 '_'이 있다면 외부 접근이 불가능 하다고 여긴다.
//? 그럼 static 과 private 의 차이는 뭘까?
//- static는 클래스에서 공통적으로 가지고 있는 부분이나 기능을 미리 정의해 놓는 것, 인스턴스를 만들 필요 없이 클래스 자체에서 바로 읽기 가능

// 참조 : https://iagreebut.tistory.com/269, https://fomaios.tistory.com/

//* Abstract Class
//- 특정 클래스의 상속 대상이 되는 클래스이며 상위 레벨에서 속성, 메서드 모양을 정의

abstract class Developer2 {
  abstract coding(): void; // 'abstract'가 붙으면 상속 받은 클래스에서 무조건 구현해야 함
  drink(): void {
    console.log("drink sth");
  }
}

class FrontEndDeveloper extends Developer2 {
  coding(): void {
    // Developer 클래스를 상속 받은 클래스에서 무조건 정의해야 하는 메서드
    console.log("develop front");
  }
  design(): void {
    console.log("design front");
  }
}

class BackEndDeveloper extends Developer2 {
  coding(): void {
    // Developer 클래스를 상속 받은 클래스에서 무조건 정의해야 하는 메서드
    console.log("develop server");
  }
  design(): void {
    console.log("design server");
  }
}

// const dev = new Developer(); // error: cannot create an instance of an abstract class
const josh2 = new BackEndDeveloper();
const kai = new FrontEndDeveloper();

josh2.coding(); // develop server
josh2.drink(); // drink sth
josh2.design(); // design server

console.log("");

kai.coding(); // develop front
kai.drink(); // drink sth
kai.design(); // design front
