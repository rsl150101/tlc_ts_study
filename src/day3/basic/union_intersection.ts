//* Union type
//- 여러 타입들을 조합하여 사용

function printId(id: number | string) {
  // console.log(id.toUpperCase());
  //- string | number' 형식에 'toUpperCase' 속성이 없습니다.
  //- 'number' 형식에는 'toUpperCase' 속성이 없어서 에러가 발생.

  //- 따라서 위 상황에서 사용하고 싶으면 타입 형태를 좁혀주어야한다.
  // type narrowing
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  }
}

//* Intersection type
//- 여러가지 타입을 결합해서 사용

type Common = {
  name: string;
  age: number;
  gender: string;
};

type Animal = {
  howl: string;
};

type Cat = Common & Animal;
type Dog = Common | Animal;

let dog: Dog = {
  howl: "dogggg",
};
let cat: Cat = {
  age: 3,
  gender: "C",
  name: "CC",
  howl: "cattttt",
};
