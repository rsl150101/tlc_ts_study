//* 선택적 속성
//- 속성 키에 ? 를 사용하여 사용 유무를 선택적으로 지정할 수 있다.

interface CraftBeer {
  name: string;
  hop?: number;
}

let myBeer = {
  name: "Saporo",
};

function brewBeer(beer: CraftBeer) {
  console.log(beer.name); // Saporo
}

brewBeer(myBeer);
