# 💻 내배캠 타입스크립트 실시간 강의

> 타입스크립트 실습을 통해 포켓몬 사이트, 지난 세탁소 프로젝트 타입스크립트로 구현해보기

## 설치 모듈

- ts-node, typescript

  ```bash
  npm i ts-node typescript -D
  ```

## ✏️ 1일차

> 타입스크립트 사용 이유

- ### 에러의 사전 방지
  실습 파일 : [math.ts](https://github.com/rsl150101/tlc_tsc_study/blob/master/src/day1/math.ts)
- ### 코드 자동 완성과 가이드
  실습 파일 : [math2.ts](https://github.com/rsl150101/tlc_tsc_study/blob/master/src/day1/math2.ts) (자동 완성), [editor-check.ts](https://github.com/rsl150101/tlc_tsc_study/blob/master/src/day1/editor-check.ts) (가이드),
- ### 인터페이스 맛보기
  실습 파일 : [interfaces.ts](https://github.com/rsl150101/tlc_tsc_study/blob/master/src/day1/interfaces.ts)

## ✏️ 2일차

> 기초 문법과 인터페이스

### 기초 문법

- #### 논리형
  실습 파일 : [boolean.ts](https://github.com/rsl150101/tlc_tsc_study/blob/master/src/day2/basic/boolean.ts)
- #### 숫자형
  실습 파일 : [number.ts](https://github.com/rsl150101/tlc_tsc_study/blob/master/src/day2/basic/number.ts)
- #### 문자열
  실습 파일 : [string.ts](https://github.com/rsl150101/tlc_tsc_study/blob/master/src/day2/basic/string.ts)
- #### 배열
  실습 파일 : [array.ts](https://github.com/rsl150101/tlc_tsc_study/blob/master/src/day2/basic/array.ts)
- #### tuple
  실습 파일 : [tuple.ts](https://github.com/rsl150101/tlc_tsc_study/blob/master/src/day2/basic/tuple.ts)
- #### enum (열거)
  실습 파일 : [enum.ts](https://github.com/rsl150101/tlc_tsc_study/blob/master/src/day2/basic/enum.ts)
- #### any
  실습 파일 : [any.ts](https://github.com/rsl150101/tlc_tsc_study/blob/master/src/day2/basic/any.ts)
- #### void
  실습 파일 : [void.ts](https://github.com/rsl150101/tlc_tsc_study/blob/master/src/day2/basic/void.ts)
- #### null and undefined
  실습 파일 : [null-and-undefined.ts](https://github.com/rsl150101/tlc_tsc_study/blob/master/src/day2/basic/null-and-undefined.ts)
- #### never
  실습 파일 : [never.ts](https://github.com/rsl150101/tlc_tsc_study/blob/master/src/day2/basic/never.ts)
- #### object
  실습 파일 : [object.ts](https://github.com/rsl150101/tlc_tsc_study/blob/master/src/day2/basic/object.ts)
- #### type assertions (타입 단언)
  실습 파일 : [type-assertions.ts](https://github.com/rsl150101/tlc_tsc_study/blob/master/src/day2/basic/type-assertions.ts)

### 인터페이스

> 정의한 약속 혹은 규칙

- #### usage
  실습 파일 : [interface.ts](https://github.com/rsl150101/tlc_tsc_study/blob/master/src/day2/interface/interface.ts)
- #### Optional property
  실습 파일 : [optional-property.ts](https://github.com/rsl150101/tlc_tsc_study/blob/master/src/day2/interface/optional-property.ts)
- #### Readonly property
  실습 파일 : [readonly-property.ts](https://github.com/rsl150101/tlc_tsc_study/blob/master/src/day2/interface/readonly-property.ts)
- #### 함수 타입 지정
  실습 파일 : [interface-fn.ts](https://github.com/rsl150101/tlc_tsc_study/blob/master/src/day2/interface/interface-fn.ts)
- #### 클래스 타입 지정
  실습 파일 : [interface-class.ts](https://github.com/rsl150101/tlc_tsc_study/blob/master/src/day2/interface/interface-class.ts)
- #### 확장
  실습 파일 : [extends.ts](https://github.com/rsl150101/tlc_tsc_study/blob/master/src/day2/interface/extends.ts)

## ✏️ 3일차

> 기초 문법과 포켓몬 API 를 활용해서 간단한 사이트 만들기

### 기초 문법

- #### 함수
  실습파일 : [function.ts](https://github.com/rsl150101/tlc_tsc_study/blob/master/src/day3/basic/function.ts)
- #### 리터럴 타입
  실습파일 : [literal_type.ts](https://github.com/rsl150101/tlc_tsc_study/blob/master/src/day3/basic/literal_type.ts)
- #### 유니언과 교차 타입
  실습파일 : [union_intersection.ts](https://github.com/rsl150101/tlc_tsc_study/blob/master/src/day3/basic/union_intersection.ts)
- #### type, interface 차이
  실습파일 : [type_interface_diff.ts](https://github.com/rsl150101/tlc_tsc_study/blob/master/src/day3/basic/type_interface_diff.ts)
- #### class
  실습파일 : [class.ts](https://github.com/rsl150101/tlc_tsc_study/blob/master/src/day3/basic/class.ts)

### 실습 : 포켓몬 사이트 만들기

실습파일 : [pokemon](https://github.com/rsl150101/tlc_tsc_study/blob/master/src/day3/pokemon)

## ✏️ 4일차

> 3일차에서 만든 포켓몬 사이트 스크래핑하기

### 설치 모듈

- puppeteer : 크롤링, 스크래핑을 도와주는 모듈

```bash
npm i puppeteer
```

실습파일 : [app.ts](https://github.com/rsl150101/tlc_tsc_study/blob/master/src/day4/src/app.ts)
