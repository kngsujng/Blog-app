# split()과 split(' ')의 차이 알아보기

## split()

파이썬은 split()은 특정 문자를 기준으로 문자열을 나눈 뒤, 리스트 형태로 반환하는 함수다. 주로 코딩테스트에서 문자열 사이에 공백을 기준으로 단어를 나눌 때 많이 쓰이기 때문에 이 참에 헷갈리는 개념을 정리해보자 !

> 문자열.split()

split()은 split함수에 아무런 파라미터를 넣지 않고 실행하면 공백에 맞춰 문자열을 나눠준다.

## split(' ')

> 문자열.split(' ')
>
> > ** 💡주의 **
> > 작은 따옴표 '' 안에 구분자를 넣어야 하기 때문에 공백을 넣어줘야 한다. 공백을 넣지 않고 split('')을 사용하면 오류난다.

split(' ') 역시 split함수에 공백을 기준으로 문자열을 나눠주는데 둘의 차이점은 무엇일까?
예시 코드로 확인해보자

![](https://velog.velcdn.com/images/kngsujng/post/a508f5b3-e0bb-4836-b151-1b7069f8acc2/image.png)

![](https://velog.velcdn.com/images/kngsujng/post/d8619c1b-9135-47e1-9eb1-54561bc3e1b5/image.png)

두 코드 모두 아래 결과를 나타낸다.

![](https://velog.velcdn.com/images/kngsujng/post/21213524-de70-44da-b4fb-aae027d403d3/image.png)

### split()

하지만, 다음 코드를 실행하면 결과는 달라진다.
![](https://velog.velcdn.com/images/kngsujng/post/e60006ec-5386-4382-ab33-10a12cd9d847/image.png)

![](https://velog.velcdn.com/images/kngsujng/post/21213524-de70-44da-b4fb-aae027d403d3/image.png)

### split(' ')

![](https://velog.velcdn.com/images/kngsujng/post/466bccf9-dabf-4198-adcb-1aa06352244c/image.png)

![](https://velog.velcdn.com/images/kngsujng/post/c0ed24be-2cb5-47ea-b7d8-2bc464dc7f5b/image.png)

#### 👉 split()은 공백이 한 개든, 여러 개든 상관없이 무조건 1개로 처리하여 공백없이 문자열만 출력된다.

#### 👉 split(' ')은 공백 한 개씩 각각의 문자열로 처리하여 공백 여러 개 모두 출력된다.

---

# [[프로그래머스Lv.1]](https://school.programmers.co.kr/learn/courses/30/lessons/12930) 이상한 문자 만들기 문제 풀이

- **내가 처음에 작성한 코드**
  ![](https://velog.velcdn.com/images/kngsujng/post/ba2691d2-d18e-4c00-89aa-0ff705ccedda/image.png)

위의 코드처럼 작성하면 테스트는 통과되는데 제출후 채점하기 버튼을 누르면 테스트 케이스를 통과하지 못 한 코드를 왕왕 보여서 삽질하다가 문제를 다시 읽어보니 "각 단어는 하나 이상의 공백문자로 구분되어 있습니다."를 발견했다. 그 결과 다음 코드로 바꾸니 통과되었다.

- **정답 코드**
  ![](https://velog.velcdn.com/images/kngsujng/post/781be36f-70a8-4a3c-8e63-33645910ec19/image.png)

** split()을 split(' ')로 바꿨을 뿐인데 ! **
이번 경험을 통해 split(), split(''), split(' ')의 차이점을 알 수 있어서 좋았다.
무작정 코딩테스트 문제를 풀다보니 셋의 차이점을 정확히 알지 못 했던 바보가튼 나의 과거 ..

### 상세 풀이

0. s 문자열을 `split(' ')`을 이용하여 (한 개 이상)공백 기준으로 나눈다. 그 배열을 arr로 선언한다.
1. arr을 for문을 돌려 문자열을 각각의 문자로 분할하여 저장한다.
   ex. ['try', '', '', 'hello', ''] 👉 [['t','r','y'], [''], [''], ['h','e','l','l','o'], ['']]
2. 다시 for문을 돌려서 arr배열 속 작은 배열의 인덱스를 기준으로 짝수면 대문자로, 홀수면 소문자로 바꿔준다.
3. arr배열 속 작은 배열을 join('')을 이용하여 다시 문자열로 만든다.
4. arr을 ' '.join()을 이용하여 문제에서 원하는 문자열을 만들고 반환한다.
