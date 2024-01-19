# 🧢 타입스크립트를 쓰는 이유

TypeScript는 JavaScript 기반의 **정적 타입 문법을 추가**한 ‘프로그래밍 언어’이다. TypeScript는 JavaScript의 상위 확장자로 **JavaScript 엔진을 사용**하며 자신이 원하는 변수의 타입을 정의하고 프로그래밍을 하면 **JavaScript로 컴파일**되어 실행할 수 있다.

> **JavaScript (동적 언어)**
> 런타임에 타입 결정/오류 발견

> **TypeScript (정적 언어)**
> 컴파일 타임에 타입 결정/오류 발견

# 🏝️ 타입 지정하기

## 1️⃣ 기본 타입

string, number, null, undefined, array는 다음과 같이 타입을 지정할 수 있다.
array안에서 해당 index마다 지정할 타입이 있는 경우 tuple을 사용한다. tuple은 길이가 고정된 배열을 의미한다.

```ts
const 이름: string = 'kim';

const 나이: number = 30;

const a: null = null;

const b: undefined = undefined;

const arr: number[] = [1, 2, 3];
const arr_copy: Array<number> = [1, 2, 3];

const week: string[] = ['mon', 'tue', 'wed'];
const week_copy: Array<string> = ['mon', 'tue', 'wed'];

// tuple 타입
type Member = [number, boolean];
const tuple: Member = [1, false];
```

## 2️⃣ object

```ts
// Literal Type - 타입에 특정 값들을 지정하고 싶을 때
type Score = 'A+' | 'A' | 'B+' | 'B';

interface User {
	name: string;
	age: number;
	readonly birthYear: number; // 수정 불가능
	gender?: string; // optional property
	[grade: number]: Score;
	// Index Signature 혹은 Index Type
	// 아래와 같이 object에 타입지정해야 할 속성이 너무 많은 경우,
	// 객체의 속성에 대한 타입을 동적으로 지정 가능
	// 1?: string,
	// 2?: string,
	// 3?: string,
	// 4?: string,
}

const user: User = {
	name: 'kngsujng',
	age: 26,
	birthYear: 2000,
	1: 'A',
	2: 'B',
	3: 'A+',
	4: 'B+',
};
user.birthYear = 1997; // error
```

#### (주의💡) 다음과 같은 경우 오류 발생

```ts
interface Student{
  [class: string]: number;
  [grade: number]: string;
}

const student:Student = {
    'classA' : 30,
    'classB' : 32,
    'classC' : 27,
    1: 'A',
    2: 'C',
    3: 'B'
}
```

TypeScript는 동시에 여러 유형의 Index Signature를 허용하지 않는다.
Student 인터페이스에는 두 가지 서로 다른 유형의 Index Signature가 동시에 존재해서 해당 코드는 작동하지 않는다.

## 3️⃣ 함수

```js
// 함수 - 파라미터와 return 값에도 타입지정 가능
function 함수(x: number): number {
	return x * 2;
}
// void : 아무것도 반환하고 싶지 않을 때
function sayHello(): void {
	console.log('hello');
}
// never
// 조건 1. return 값이 없어야 함
// 조건 2. 함수 실행이 끝나지 않아야 함 (endpoint가 없어야 함)
function showError() {
	throw new Error();
}
function infLoop() {
	while (true) {
		// do something..
	}
}
```

# 🏖️ 인터페이스(interface)

`interface`를 사용하면 코드를 모듈화하고 구조화하여 유지보수하기 쉽게 만들 수 있다. 인터페이스를 이용하여 주로 객체의 구조와 함수타입, 클래스를 정의할 수 있는데 코드 예제를 통해 살펴보자.

## 🐣 type vs interface

interface는 중복선언이 가능하지만. type은 중복선언이 불가능하다.
**[interface]**

```ts
interface Student {
	name: string;
}
interface Student {
	score: number;
}

const student: Student = { name: 'kngsujng', score: 100 };
```

위 Student 타입은 name속성과 score 속성 모두 합쳐진 타입이 된다.
따라서, 외부 라이브러리를 이용할 때 type보단 주로 interface를 사용한다.

**[type]**

```ts
type Student = { name: string };
type Student = { score: number };
```

type은 error가 발생한다.

## 🐥 interface 사용법

### 1️⃣ object

```ts
interface Square {
	color: string;
	width: number;
}
const 네모: Square = { color: 'red', width: 100 };
```

### 2️⃣ 함수

```ts
// 함수1 : Add
interface Add {
	(num1: number, num2: number): number;
}
const add: Add = function (x, y) {
	return x + y;
};
add(10, 20);

// 함수2 : IsAdult
interface IsAdult {
	(age: number): boolean;
}
const a: IsAdult = (age) => {
	return age > 19;
};
a(33);

// 함수3: hello, hello2(매개변수에 default값 이용하는 경우)
function hello(name?: string) {
	return `Hello, ${name || 'world'}`;
}

function hello2(name = 'world') {
	return `Hello, ${name}`;
}

const result = hello('kngsujng');
const result2 = hello2('kngsujng');

console.log(result);
console.log(result2);

// 함수4: hello3(optional한 매개변수는 가장 마지막 순서에 배치)
function hello3(name: string, age?: number): string {
	if (age !== undefined) {
		return `Hello, ${name || 'Anonymous'}, You are ${age}`;
	} else {
		return `Hello, ${name || 'Anonymous'}`;
	}
}

console.log(hello3('kngsujng'));
console.log(hello3('kngsujng', 20));
```

- **Rest 파라미터**
  함수의 매개변수에 Rest 파라미터가 오는 경우 배열 형태로 타입 지정한다.

```ts
function add(...nums: number[]) {
	return nums.reduce((acc, cul) => acc + cul, 0);
}

add(1, 2, 3); //6
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //55
```

- **this 사용법**
  함수의 첫 번째 매개변수 자리에 this를 쓰고 객체 타입을 지정한다.
  > **bind**: 함수 호출 방식과 관계없이 this를 지정할 수 있다.
  > 함수의 this값을 영구히 바꿀 수 있다.
  > **💡 참고**
  >
  > ```js
  > const mike = { name: 'Mike' };
  > function update(birthYear, occupation) {
  > 	this.birthYear = birthYear;
  > 	this.occupation = occupation;
  > }
  > const updateMike = update.bind(mike); // 함수.bind(객체) : 해당 함수가 주어진 객체의 메서드인 것처럼 사용 가능
  > updateMike(1999, 'singer');
  > console.log(mike); // {name: 'Mike', birthYear: 1999, occupation: 'singer'}
  > ```

```ts
interface User {
	name: string;
}

const kngsujng: User = { name: 'kngsujng' };

function showName(this: User, age: number, gender: 'm' | 'f') {
	console.log(`이름은 ${this.name}, 나이는 ${age}, 성별은 ${gender}이야`);
} // this가 kngsujng 객체로 지정되었다.

const a = showName.bind(kngsujng);
a(20, 'f');
```

- **함수 오버로딩(Function Overloading)**
  동일한 함수지만 전달받은 매개변수의 개수 혹은 타입에 따라 다르게 동작해야 한다면, 오버로드를 사용할 수 있다. 파라미터의 형태가 다양한 여러 케이스에 대응하는 같은 이름을 가진 함수를 만드는 것을 의미한다.

  아래 코드는 signup함수에 age의 타입이 명확하지 않아서 오버로딩 처리한 것이다.

```ts
interface User {
	name: string;
	age: number;
}

function signup(name: string, age: number): User;
function signup(name: string, age: string): string;

// 위 2개의 함수를 오버로딩 처리
function signup(name: string, age: number | string): User | string {
	if (typeof age === 'number') {
		return { name, age };
	} else {
		return '나이는 숫자로 입력해주세용';
	}
}

const kng = signup('kng', 25);
const sujng = signup('sujng', '20');
```

### 3️⃣ class

implements를 사용하여 class가 특정 인터페이스를 구현한다는 것을 명시한다.

```ts
interface Car {
	color: string;
	wheels: number;
	start(): void;
}

class Bmw implements Car {
	wheels = 4;
	color; // 1. 멤버변수 미리 선언해야 사용가능
	constructor(c: string) {
		this.color = c;
	}
	start() {
		console.log('go..');
	}
}
const b = new Bmw('green');
console.log(b);
b.start();
```

## 🪿 확장

interface는 `extends` 키워드를 사용하여 인터페이스를 확장할 수 있다.
`extends` 사용할 때 중복속성 발생시, 에러로 잡아주어서 타입의 모호성을 제거할 수 있다. 또한, 중복선언이 가능하여 자동으로 extends된다.

```ts
interface Student {
	name: string;
}
interface Teacher extends Student {
	subject: string;
}
const 학생: Student = { name: 'kim' };
const 선생: Teacher = { name: 'kim', subject: 'math' };

// 확장 여러 개도 가능
interface Car {
	color: string;
	wheels: number;
	start(): void;
}

interface Toy {
	name: string;
}

interface ToyCar extends Car, Toy {
	price: number;
}

const tayocar: ToyCar = {
	color: 'red',
	wheels: 4,
	name: 'toyBenz',
	price: 100,
	start() {
		console.log('start!');
	},
};

console.log(tayocar);
tayocar.start();
```

아래 코드와 같이 extends쓸 때 중복속성이 발생하면 에러난다.

```ts
interface Student {
	name: string;
}
interface Teacher extends Student {
	name: string;
} // error
```

### 비교: Type의 확장

1. `&`기호를 사용하여 intersection type을 생성한다.
2. `&` 사용하는 경우 중복속성이 나타나면 에러가 발생하지 않는다.

```ts
type Animal = { name: string };
type Cat = { age: number } & Animal;

const cat: Cat = { name: 'nabi', age: 3 };
```

위 interface의 `extends`는 복사 기능인 반면에, `&`기호는 두 타입 모두 만족하는 타입을 의미한다.

```ts
type Animal = { name: string };
type Dog = { name: number } & Animal;

const dog: Dog = { name: 'bow' }; // 중복속성인 name never타입으로 바뀜
```

`&`기호는 두 타입 모두 만족하는 타입을 의미하기 때문에 위 코드에서 name 속성은 string도 만족하고, number도 만족해야 하기 때문에 never타입으로 바뀐다. 타입변환만 일어날 뿐, 에러가 나지 않으니 주의해야 한다.

# 🎋 Literal Types

```ts
const userName1 = 'kngsujng';
let userName2 = 'crystal';
```

const는 재할당이 불가능하기 때문에 type이 `'kngsujng'`으로 자동 지정된 반면에, let은 재할당이 가능해서 type이 `string`으로 나오는 것을 확인할 수 있다.

```ts
type Job = 'police' | 'developer' | 'teacher';

interface User {
	name: string;
	job: Job;
}

const user: User = {
	name: 'kngsujng',
	job: 'developer',
};
```

# 🌴 Union Types

`|` 연산자를 이용하여 타입 여러 개를 연결하는 방식이다.

```ts
interface Car {
	name: 'car';
	color: string;
	start(): void;
}

interface Mobile {
	name: 'mobile';
	color: string;
	call(): void;
}

function getGift(gift: Car | Mobile) {
	console.log(gift.color);
	// gift.start() // error
	if (gift.name === 'car') {
		gift.start();
	} else {
		gift.call();
	}
}
```

# 🪵 Intersection Types

`&` 를 사용하여 여러 타입을 모두 만족하는 하나의 타입을 의미합니다. 다음 코드를 살펴보자.

```ts
interface Car {
	name: string;
	start(): void;
}

interface Toy {
	name: string;
	color: string;
	price: number;
}

const toyCar: Toy & Car = {
	name: 'tayo',
	start() {},
	color: 'blue',
	price: 2000,
};
```

toyCar는 `Toy`타입과 `Car`타입에 공통으로 있는 name도 충족하고,`Toy`타입과 `Car`타입 각각 존재하는 속성이 모두 존재하고, 타입이 일치해야 한다.
