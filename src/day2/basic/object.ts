//* object
//- 원시데이터 타입이 아닌 객체 타입을 나타냄

function create(o: object | null): void {}

create({ prop: 0 }); // 성공
create(null); // 성공

//create(42); // 오류 전달인자가 object 또는 null 이 아니므로
//create("string"); // 오류 전달인자가 object 또는 null 이 아니므로
// create(false); // 오류 전달인자가 object 또는 null 이 아니므로
create(undefined); // 오류 전달인자가 object 또는 null 이 아니므로
