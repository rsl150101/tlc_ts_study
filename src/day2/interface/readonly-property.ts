interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5; //- readonly 인데 바꿀려고 해서 오류거 발생한다
