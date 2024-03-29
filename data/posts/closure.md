## 클로저

### 정의

> 함수와 함수가 선언된 어휘적(렉시컬/정적) 환경의 조합이다.(MDN 정의)

**함수**와 **함수가 접근할 수 있는 스코프**는 **클로저 관계**를 맺는다.

> 💡여기서 잠깐, **스코프(scope)** 란?
> 참조하는 대상의 식별자(변수, 함수의 이름과 같이 다른 대상과 구분하여 식별할 수 있는 유일한 이름)를 찾아내기 위한 규칙이다. **스코프**는 **변수에 접근할 수 있는 유효범위**라고 이해하면 편하다.

어려운 말은 뒤로 하고, 코드 먼저 보자.

```js
const name = 'kngsujng';
function log() {
	console.log(name); // 전역 변수 name과 연결
}
```

위 코드에서 `log함수`와 `전역범위`가 `클로저 관계`이다. 클로저의 정의를 다시 보면 `함수(log함수)와 함수가 선언된 환경(전역 범위)의 조합`이기 때문에 전역범위에서 함수를 **선언**할 때마다 전역범위와 해당 함수가 클로저 관계를 생성할 수밖에 없다.

그렇다면 다음과 같은 경우는 코드가 어떻게 실행될까?

```js
let first = '1';

function fn2() {
	let third = '3';
	console.log(first, second, third);
}

function fn1() {
	let second = '2';
	console.log(first, second);
	fn2();
}

fn1();
```

앞서 보았듯이 `fn1`을 실행하면, 전역범위와 fn1은 클로저 관계를 형성할 수밖에 없어서 1,2가 잘 출력되었지만, `fn2`를 실행하면 `second` 변수를 찾을 수 없다는 referenceError가 나타난다.
![](https://velog.velcdn.com/images/kngsujng/post/4373cd3b-c3dc-43c9-9171-757b69ad5f97/image.png)

```js
let first = '1';

// function fn2() {
// 	let third = '3';
//	console.log(first, second, third);
// }

function fn1() {
	let second = '2';
	console.log(first, second);
	// fn2();
	// 아래 두 줄의 코드로 대체할 수 없다. (error)
	third = '3';
	console.log(first, second, third);
}

fn1();
```

이것은 주석된 코드를 대체할 수 **없는** 코드다. 클로저는 호출된 시점이 아니라, **선언**된 시점에서 정적 스코프를 따른다. 따라서, **`fn2`함수**는 `fn1`에서 호출되었지만 **전역범위에서 선언**되었기 때문에 `first`(전역변수)와 `third`(지역 변수)를 출력할 수는 있어도 `second` 변수를 참조할 수 없는 것이다.

---

클로저의 개념을 어렴풋이 이해하였으니 다음으로 비동기함수 `setTimeout`과 관련하여 생각해보자.

```js
// var 사용
for (var i = 0; i < 100; i++) {
	setTimeout(function () {
		console.log(i); // i는 렉시컬 스코프에서 for초기문 속 i가 된다.
	}, i * 1000);
}
```

위 코드를 실행하면 콘솔에 100이 100번 찍히는 것을 볼 수 있다.

```js
// let 사용
for (var i = 0; i < 100; i++) {
	setTimeout(function () {
		console.log(i); // i는 렉시컬 스코프에서 for초기문 속 i가 된다.
	}, i * 1000);
}
```

반면에 바로 위 코드를 실행하면 콘솔에 0, 1, 2, 3, 4 ... 100이 순서대로 찍히는 것을 확인할 수 있다. var와 let의 차이일 뿐인데 해당 코드가 다르게 실행되는 이유가 뭘까 ?

let과 const는 블록 스코프를 유지하고, var는 함수 스코프를 유지하기 때문이다 ❗️

클로저 이야기하다가 갑자기 스코프가 나와서 놀랐을 수 있다. 앞서 설명했다시피 클로저는 **함수와 함수가 선언된 어휘적(렉시컬/정적) 환경의 조합**으로 설명할 수 있었는데, **함수가 자신이 선언될 때의 환경(스코프)에서 외부 변수를 기억하고 참조할 수 있다**는 특징이 된다.

클로저는 주로 함수 내부에서 함수 외부의 변수를 참조할 때 발생하기 때문에 해당 변수가 함수 스코프인지 블록 스코프인지에 따라 동작이 달라질 수 있다.

```js
for (var i = 0; i < 100; i++) {
	setTimeout(function () {
		console.log(i);
	}, i * 1000);
}
```

위의 코드에서 setTimeout 함수의 콜백 함수는 비동기적으로 실행되며, 이때 console.log(i)에서 i를 참조한다. 그러나 i는 var 키워드로 선언되었으므로 **함수 스코프**를 가진다. 이는 해당 콜백 함수가 실행될 때 이미 for 루프가 완료되었기 때문에 i의 최종 값인 100이 출력된다.

클로저가 없다면, setTimeout의 콜백 함수에서는 외부 변수 i를 참조할 수 없어서 for 루프의 각 반복에서 기대한 순서대로 i를 출력하는 것이 어렵다.

```js
for (let i = 0; i < 100; i++) {
	setTimeout(function () {
		console.log(i);
	}, i * 1000);
}
```

이 경우 let으로 선언된 변수 i는 **블록 스코프**를 가지므로 각 for반복문에서의 i 값이 캡처되어 setTimeout 콜백 함수에서 기대한 결과를 얻을 수 있다. 결과적으로 0부터 99까지의 값이 1초 간격으로 출력된다.

따라서 클로저는 다음과 같이 정리할 수 있다.

> ** 클로저(Closure) 정리**
> ✔️ 클로저는 함수가 속한 렉시컬 스코프를 기억하여 함수가 렉시컬 스코프 밖에서 실행될 때도 그 스코프에 접근할 수 있게 하는 기능을 수행한다.
> ➡️ 클로저는 함수가 **선언**된 시점을 기억하여 스코프에 접근할 수 있도록 도와준다.
> ✔️ 클로저는 함수가 자신이 선언될 때의 환경(스코프)에서 외부 변수를 기억하고 참조할 수 있는 특성을 가지고 있다.

---

### 용어 정리

**렉시컬 스코프**
렉시컬 스코프는 함수를 어디서 호출하는지가 아니라 어디에서 **선언**하였는지에 따라 결정된다. 자바스크립트는 렉시컬 스코프를 따르므로 **함수를 선언한 시점**에 상위 스코프가 결정된다. 함수를 어디에서 호출하였는지는 스코프 결정에 아무런 영향을 주지 않는다.

**상황1**

```js
let name = 'kng';

function log() {
	console.log(name);
}
// log()
// 1. log함수에서 name 찾기
// 2. 1에서 없다면, 전역범위에서 name 찾기

function wrapper() {
	name = 'sujng';
	log();
}
// wrapper()
// 1. wrapper함수에서 name 찾기
// 2. 1에서 없다면, 전역범위에서 name 찾고 변경
// 3. 변경된 name으로 log 실행

// log(); // kng
wrapper(); // sujng
```

**상황2**

```js
let name = 'kng';

function log() {
	console.log(name);
}

function wrapper() {
	let name = 'sujng'; // 💡 수정 코드
	log();
}

// log(); // kng
wrapper(); // kng // 💡 수정 코드 (const, let은 동일한 결과)
```

**상황1과 상황2 실행결과가 다른 이유**
렉시컬 스코프는 함수가 호출된 시점이 아니라, 선언된 시점에 결정되기 때문이다. 상황2의 `log()`를 임의로 `console.log(name)`로 생각하면 안 된다. 이렇게 생각한다면 name은 `sujng`으로 재선언된다고 생각할 수 있겠지만, 이것은 렉시컬 스코프를 전혀 생각하지 않은 결과이므로 틀렸다.

`wrapper()`안에 있는 `log()`는 전역범위에서 **선언**되었기 때문에 상위 스코프인 전역범위에 있는 name을 참조하고 있다. 따라서 `wrapper함수`내에서 name을 재선언(재할당x)해도 `log함수`는 영향을 받지 않는다.

따라서 함수가 호출(실행)되는 시점이 아니라, 선언된 시점에서 `name` 이 정해지기 때문에 **렉시컬 스코프를 정적 스코프라고 부른다.**
