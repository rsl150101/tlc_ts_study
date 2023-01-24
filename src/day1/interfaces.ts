interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
}
//- 인터페이스로 어떤 형식으로 데이터 타입이 지정되는지 설정할 수 있다.

// function updateUser(id: number, update: Partial<User>) {
//   const user = getUser(id);
//   const newUser = { ...user, ...update };
//   saveUser(id, newUser);
// }

// interface Address {
//   email: string;
//   address: string;
// }

// type MyEmail = Partial<Address>;
// const me: MyEmail = {}; // 가능
// const you: MyEmail = { email: "noh5524@gmail.com" }; // 가능
// const all: MyEmail = { email: "noh5524@gmail.com", address: "secho" }; // 가능

// interface Person {
//   age: number;
//   name: string;
// }

// const me: Person = { age: 10, name: "young" };
// const you: Person = { age: 10 };
