# format함수

> 문자열 포맷팅 방법 중 하나로, 서식 지정자(Format Identifier)를 사용하여 출력하고자 하는 경우에 사용한다. 변수의 타입과 상관없이 중괄호 {}와 숫자만 이용하면 된다.

## 기본 사용법

### 1. 직접 대입

![](https://velog.velcdn.com/images/kngsujng/post/ca807f77-9e83-4198-be21-d179de2af654/image.png)

![](https://velog.velcdn.com/images/kngsujng/post/263dc403-7d65-476a-84aa-3bf53fed68fc/image.png)

위 코드와 같이 중괄호를 비우고 format함수에 순서대로 값을 넣으면 원하는 문자열이 출력된다. 값은 문자열, int, float, 리스트 등 자유롭게 입력할 수 있다. 출력하고자 하는 값을 순서대로 지정해줘야 하기 때문에 불편함이 있다.
![](https://velog.velcdn.com/images/kngsujng/post/ac0a4001-ec49-4225-aff3-5e324cffe16f/image.png)

위 코드처럼 중괄호 안에 인덱스값을 입력하면 해당 위치에 있는 인자값이 출력된다. format함수 안에 들어있는 인덱스대로 중괄호안에서 받아서 문자열을 출력한 것을 볼 수 있다. 중괄호 안의 인덱스의 순서가 바뀌어도 해당 번호에 맞는 값이 들어간다.

### 2. 변수 대입

![](https://velog.velcdn.com/images/kngsujng/post/fdce8edc-1414-4621-88a5-0164c089fc40/image.png)

인덱스 대신 변수를 활용하여 문자를 출력할 수 있다. 값을 수정하고 싶을 때 일일이 format함수의 인덱스를 찾지 않고 변수에 접근하면 되기 때문에 가장 간편한 방법이다.

### 3. 할당식 대입

![](https://velog.velcdn.com/images/kngsujng/post/19f7896f-7ba9-4c1a-ac35-3598a3b4af01/image.png)

인덱스 대신 중괄호 {}안에 이름을 넣고, format함수안에서 값을 할당하는 방법이다.

# f-string

> 파이썬 버전 3.6부터 도입된 문자열 포맷팅 방법이다.
> 따옴표를 사용하여 나타낸 문자열 앞에 f접두사를 붙이고,
> 해당 문자열 안에 값이나 변수를 삽입하려는 부분을 중괄호{}로 감싸준다.
>
> > 💡 **JavaScript와 비교 **
> > 이렇게 보니까 자바스크립트랑 비슷하다!
> > 자바스크립트도 ES6 버전부터는 문자열에서 변수명을 사용할 수 있도록 하는 기능이 추가되었다. 다만, 차이점은 Python3(', ")은 따옴표를 쓰지만 JavaScript는 백틱(`)을 쓴다는 것, JavaScript는 f접두사 쓰는 대신 중괄호 앞에 $를 쓴다는 것이다.

```javascript
const language = '자바스크립트';
string = `${language}는 이렇게 쓰지롱`;
console.log(string); //자바스크립트는 이렇게 쓰지롱
```

## 기본 사용법

### 1. 변수 대입

![](https://velog.velcdn.com/images/kngsujng/post/f8e4f61b-93e4-40d2-b843-add1ae17ace3/image.png)

![](https://velog.velcdn.com/images/kngsujng/post/4a801d2f-e2e2-4d82-a4f8-5aeb97127a87/image.png)

위 예시코드에서 볼 수 있듯이 f-string은 중괄호 안에 변수를 대입하여 사용한다. (값을 중괄호 안에 직접 넣어 사용할 수도 있다.) 또한, 파이썬의 표현식을 문자열 안에 삽입하여 출력할 수 있다.

### 2. 함수 호출

![](https://velog.velcdn.com/images/kngsujng/post/20b65a9c-74ac-4f8b-a6da-d20170f155c2/image.png)

![](https://velog.velcdn.com/images/kngsujng/post/d11cf4ac-6f4a-41a3-9469-894fbb7187de/image.png)

f-string을 사용하면 문자열 안에서 함수를 호출할 수 있다. 나아가 객체의 내장함수(ex. count() 등)도 호출할 수 있다. format함수를 사용했을 때 비교했을 때, f-string은 함수와 객체의 함수를 불러올 수 있으니 활용도가 좋다.

# format함수와 f-string를 비교해보자!

- **비교 기준**
  1.  성능 측면 - 연산 속도
  2.  이용성 측면 - 얼마나 직관적인지, 얼마나 해석 용이한지, 문자열이 길어지는 경우

## 🏃성능 측면

### format함수

**1. 직접 대입**

```python
import time

start = time.time()

string = "group:{}, debut_year:{}, member:{}".format('aespa', 2020, ['카리나', '윈터', '닝닝', '지젤'])
print(string)

print(f"{time.time()-start:.4f} sec")
```

![](https://velog.velcdn.com/images/kngsujng/post/b7424257-5a14-448d-bcd2-beb1500d38b5/image.png)

```python
import time

start = time.time()

string = 'group:{0}, debut_year:{1}, member:{2}'.format('aespa', 2020, ['카리나', '윈터', '닝닝', '지젤'])
print(string)

print(f"{time.time()-start:.4f} sec")
```

![](https://velog.velcdn.com/images/kngsujng/post/f118f1b2-2537-4aaf-94ff-e3a2751ccc0c/image.png)

위 예시 코드는 인덱스의 순서를 바꾸면 코드의 수행시간이 조금 증가한 것을 확인할 수 있었다. f-string과의 비교를 위해 인덱스의 순서는 0부터 오름차순으로 재정렬하니까 0.0000초인 것을 확인했다.

**2. 변수 대입**

```python
import time

start = time.time()

girl_group = 'aespa'
year = 2020
member_list = ['카리나', '윈터', '닝닝', '지젤']
string = 'group:{0}, debut_year:{1}, member:{2}'.format(girl_group, year, member_list)
print(string)

print(f"{time.time()-start:.4f} sec")
```

![](https://velog.velcdn.com/images/kngsujng/post/9459c966-f221-43c6-bb28-80939f00f95c/image.png)

f-string과 가장 유사한 방법인데 수행시간이 21초나 나온다.

**3. 할당식 대입**

```python
import time

start = time.time()

string = 'group:{a}, debut_year:{b}, member:{c}'.format(a='aespa', b=2020, c=['카리나', '윈터', '닝닝', '지젤'])
print(string)

print(f"{time.time()-start:.4f} sec")
```

![](https://velog.velcdn.com/images/kngsujng/post/cb8ec3b6-9446-4f97-b2b1-a25dfa2d0c18/image.png)

### f-string

format함수와의 비교를 위해 똑같은 예문을 사용하여 직접 대입과 변수 대입을 해보았다.

```python
import time

start = time.time()

string = f"group:{'aespa'}, debut_year:{2020}, member:{['카리나', '윈터', '닝닝', '지젤']}"
print(string)

print(f"{time.time()-start:.4f} sec")
```

![](https://velog.velcdn.com/images/kngsujng/post/cb8ec3b6-9446-4f97-b2b1-a25dfa2d0c18/image.png)

```python
import time

start = time.time()

girl_group = 'aespa'
year = 2020
member_list = ['카리나', '윈터', '닝닝', '지젤']

string = f"group:{girl_group}, debut_year:{year}, member:{member_list}"
print(string)

print(f"{time.time()-start:.4f} sec")
```

![](https://velog.velcdn.com/images/kngsujng/post/cb8ec3b6-9446-4f97-b2b1-a25dfa2d0c18/image.png)

#### 👉format함수 변수 대입 방법과 f-string이 유사한데, 수행속도는 f-string이 짧은 것을 확인할 수 있다. format함수 다른 방법과 f-string 코드 수행시간은 모두 동일하다.

## 👋 이용성 측면

f-string은 문자열 안에 변수와 함수 등을 넣기 때문에 변수의 값을 수정해야 하는 경우나 함수를 바꾸고 싶을 때 언제든 바뀔 수 있어 재사용성이 높다.

문자열이 길어지는 경우 format함수는 직접 인덱스의 값을 찾아가야 하는 반면에 f-string은 중괄호 안에 직접 변수를 넣기 때문에 문자열이 길어지더라도 값의 순서를 찾아나가는 번거로운 일은 수행하지 않아도 된다.

코드의 직관성 혹은 코드 이해 용이성을 생각할 때, 나는 개인적으로 f-string이 더 직관적이라고 생각한다.

# 정리❗

f-string이 더 최신 기능이기 때문에 상대적으로 성능이나 이용성 측면에서 더 유리할 수밖에 없다. 하지만, format함수도 종종 나오니 둘 다 알아두는 것이 좋다. 하지만 역시 손이 많이 가는 것은 f-string일수밖에 없다 !
