# React Query

공식문서는 React Query를 **React 애플리케이션에서 서버 상태의 가져오기, 캐싱, 동기화 및 업데이트를 간편하게 처리할 수 있도록 하는 라이브러리**라고 표현하고 있다.

## 🚨 Hooks의 한계점

리액트 쿼리를 설명하기 전에 앞서, 리액트 Hooks(훅)은 다음과 같은 문제가 있다.

> **1. 메모리상 캐시(cache)가 되지 않는다.**

훅을 호출할 때마다 데이터를 새롭게 받아와야 하는 불필요한 작업이 수반된다. 또한, 데이터를 사용하는 컴포넌트마다 동일한 네트워크 통신을 다시 해줘야 하는 번거로움이 있다.
로딩과 오류, 성공했을 때 통신의 상태는 표시해주지만 일정시간후 다시 시도하지 않는다.

이러한 문제점을 극복하기 위해 React Query와 같은 라이브러리가 개발되었으며,
이러한 라이브러리는 데이터 가져오기, 캐싱, 동기화, 그리고 업데이트를 효율적으로 처리할 수 있도록 도와준다.
아래 예시 코드로 더 알아보자.

**서버통신하는 코드**

```js
...생략
useEffect(() => {
    setIsLoading(true);
    setErrorMsg(undefined);
    fetch(`${process.env.PUBLIC_URL}/data/todos.json`)
        .then((res) => res.json())
        .then((data) => setTodos(data))
        .catch(() => setErrorMsg('🚨 에러났습니다 !'))
        .finally(() => setIsLoading(false));
}, []);
... 생략
```

어떤 데이터는 여러 컴포넌트에서 사용되기 때문에 해당 코드를 컴포넌트마다 불러와야 한다.
그래서 서버 통신하는 로직을 따로 분리하여 커스텀 훅으로 만들더라도 커스텀 훅을 호출할 때마다
여러 컴포넌트에서 통신 요청해야 하는 번거로움이 존재한다.
따라서 앱에서 자주 사용되는 데이터는 전역 상태관리를 해야 한다.

또한, 위 코드는 서버통신시 에러가 발생하면 에러메시지만 표시되고 통신을 재시도하는 기능이 없어 사용자로 하여금 새로고침하는 불편함을 수반한다.

## 💡 해결방안 : 리액트 쿼리

[🔗 리액트쿼리문서 바로가기](https://tanstack.com/query/v3/)

### 1️⃣ 설치

> $ npm i react-query
> $ yarn add react-query

### 2️⃣ 리액트쿼리 빠른 사용법

```js
// App.jsx
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'; // 해당 코드 추가
import './App.css';
import Main from './pages/Main';

const queryClient = new QueryClient(); // 해당 코드 추가

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			{' '}
			// 최상위 컴포넌트에서 QueryClientProvider로 자식컴포넌트감싸기
			<Main />
		</QueryClientProvider>
	);
}
```

1. `QueryClient` 인스턴스 생성
2. 최상위 컴포넌트에서 `QueryClientProvider`로 자식 컴포넌트 감싸기
3. `queryClient` `client` props로 전달

```js
// Main.jsx
import { useQuery } from 'react-query';
import TodoList from '../components/TodoList';

export default function Main() {
	const {
		isLoading,
		error,
		data: todos,
	} = useQuery(
		'todos',
		async () => {
			return fetch(`${process.env.PUBLIC_URL}/data/todos.json`).then((res) =>
				res.json()
			);
		},
		{ staleTime: 1000 * 60 * 5, retry: 3 }
	);

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>{error}</p>;

	return (
		<>
			<TodoList todos={todos} />
		</>
	);
}
```

4. 서버 통신 받을 컴포넌트에서 useEffect, useState 대신 `useQuery`를 이용하여 서버통신한다.

> ⭐️ **useQuery**
> 위 복잡한 코드를 아래처럼 간단하게 표현하고 하나씩 의미를 살펴보자.
> `const { ... } = useQuery(key, async()=>{}, {})`

- **객체 할당**을 이용하여 로딩중, 오류, 데이터 뿐만 아니라 다양한 통신 상태를 정의할 수 있다. (참고 : [🔗 공식문서 useQuery](https://tanstack.com/query/v4/docs/react/reference/useQuery))
- **useQuery의 첫 번째 인자**로 고유한 **key**값을 설정한다.
  key는 배열의 형태로 많은 정보를 담을 수 있다. 해당 코드는 키를 'todos'로 설정하여 모든 투두리스트를 담았지만, `useQuery({ queryKey: ['todos', { type: 'done' }], ... })` 등 고유하고 특정한 데이터를 가져오기 위해 중첩객체를 사용하는 다양한 배열의 형태를 이용할 수 있다.
- **useQuery의 두 번째 인자**로 **데이터를 받아올 콜백함수**를 지정한다.
  콜백함수에서 반환된 값을 useQuery는 상태값으로 가지게 된다. 주로 콜백함수는 비동기적으로 서버 통신하여 데이터를 받아오는 함수를 사용한다.
- **useQuery의 세 번째 인자**는 다양한 **옵션** 지정이 가능하게 한다.
  캐싱된 상태로 남아있는 시간(`cacheTime`)을 지정하거나 데이터가 fresh상태에서 stale 상태로 변경되는 데 걸리는 시간(`staleTime`)을 지정하거나, 다시 fetch되는 주기를 설정(`refetchInterval`)하거나, 서버 통신 주기를 조절할 수 있는 등 다양한 옵션을 설정할 수 있다. (참고 : [🔗 공식문서 default값](https://tanstack.com/query/v4/docs/react/guides/important-defaults) )

### 3️⃣ 리액트쿼리의 장점

**1. 캐싱을 통해 애플리케이션의 속도를 향상시킨다. **
서버에 빈번히 수동적으로 네트워크 요청하는 것이 아니라, React App에서 `Query`를 이용해서 네트워크 통신이 가능하다. 따라서, 서버로부터 받아온 데이터가 이미 존재한다면 쿼리 내부에 `캐시`에 저장한다. 메모리상 데이터가 이미 존재하기 때문에 서버통신없이 UI상으로 바로 출력되어 속도가 빠르다.

메모리상 데이터가 존재한다면 바로 `Query`에서 UI상으로 데이터를 보여준다. 해당 데이터가 업데이트되었다면, 미리 캐싱된 데이터를 보여준 후, `Query` 뒷 편에서 서버로부터 fresh한 데이터를 받아오고, UI상으로 데이터를 업데이트한다. 사용자 입장에서 stale 상태인 데이터를 미리 보고 있기 때문에 속도가 빠르다고 느낄 것이다.

**2. 네트워크 통신이 실패했을 때 재시도한다.**
`useQuery` 옵션(세번재 인자) 중 `retry`을 이용하여 재시도 동작을 설정할 수 있다. 이를 통해 재시도 횟수나 재시도 간격 등을 사용자가 원하는 대로 설정할 수 있다.

## 🪵 참고 : 리액트 쿼리 적용 전과 코드 비교

**todos.json 데이터**

```json
[
	{
		"text": "리액트 쿼리 기초 알아보기",
		"checked": true
	},
	{
		"text": "비동기 통신 알아보기",
		"checked": true
	},
	{
		"text": "벨로그 작성하기",
		"checked": false
	},
	{
		"text": "투두리스트 웹앱 만들기",
		"checked": true
	}
]
```

### App.jsx

**리액트쿼리 적용 전 코드**

```js
// App.jsx
import React from 'react';
import './App.css';
import Main from './pages/Main';

export default function App() {
	return (
		<>
			<Main />
		</>
	);
}
```

**리액트쿼리 적용 후 코드**

```js
// App.jsx
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'; // 해당 코드 추가
import './App.css';
import Main from './pages/Main';

const queryClient = new QueryClient(); // 해당 코드 추가

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			{' '}
			// 최상위 컴포넌트에서 QueryClientProvider로 자식컴포넌트감싸기
			<Main />
		</QueryClientProvider>
	);
}
```

### Main.jsx

**리액트쿼리 적용 전 코드**

```js
// Main.jsx
import React, { useEffect, useState } from 'react';
import TodoList from '../components/TodoList';

export default function Main() {
	const [isLoading, setIsLoading] = useState(false);
	const [errorMsg, setErrorMsg] = useState(null);
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		setErrorMsg(undefined);
		fetch(`${process.env.PUBLIC_URL}/data/todos.json`) //
			.then((res) => res.json())
			.then((data) => setTodos(data))
			.catch(() => setErrorMsg('🚨 에러났습니다 !'))
			.finally(() => setIsLoading(false));
	}, []);

	if (isLoading) return <p>Loading...</p>;
	if (errorMsg) return <p>{errorMsg}</p>;

	return (
		<>
			<TodoList todos={todos} />
		</>
	);
}
```

**리액트쿼리 적용 후 코드**

```js
// Main.jsx
import { useQuery } from 'react-query';
import TodoList from '../components/TodoList';

export default function Main() {
	const {
		isLoading,
		error,
		data: todos,
	} = useQuery(
		'todos',
		async () => {
			return fetch(`${process.env.PUBLIC_URL}/data/todos.json`).then((res) =>
				res.json()
			);
		},
		{ staleTime: 1000 * 60 * 5, retry: 3 }
	);

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>{error}</p>;

	return (
		<>
			<TodoList todos={todos} />
		</>
	);
}
```

로딩중이나 에러, 데이터를 `useState`를 이용하여 state로 저장하고, `useEffect`로 컴포넌트가 마운트될 때마다 서버통신하는 번거로움이 있었지만, 리액트쿼리에서 `useQuery`를 사용하면서 불필요한 서버통신은 하지 않을 수 있게 되었다.
