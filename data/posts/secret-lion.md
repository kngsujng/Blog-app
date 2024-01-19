'비밀멋사'는 온라인으로 진행하는 부트캠프 훈련생간의 더욱 활발한 소통을 위한 익명 커뮤니티 앱 입니다.

- 배포: https://secret-lion.netlify.app/
- 테스트 계정: bmms@test.com || 비밀번호 : bmms1234

## 1. 프로젝트 소개

### [기획의도]

> 저희는 온라인으로 진행하는 부트캠프 '멋쟁이사자처럼 프론트엔드 스쿨'의 수강생으로, 디스코드를 통해 함께 수업을 듣고 정보를 공유하거나 대화를 나누고 있습니다. 하지만 100명의 수강생들이 다같이 소통하는 데에는 한계가 있음을 느꼈습니다. 너무 쉬운 질문일까봐, 또는 자신만 어렵다고 생각할까봐 등 같은 고민을 가지고 있음에도 쉽게 나누지 못하는 훈련생들이 많았습니다. 비록 온라인을 통해 만났지만 같은 꿈을 가지고 있기 때문에 친밀감을 느끼고, 학업이나 취업 고민뿐만 아니라 함께 나누고 싶은 더 많은 이야기가 있을 것이라고 생각합니다. 훈련생들이 친구처럼 편하고 활발하게 소통할 수 있는 서비스가 있으면 좋겠다고 생각이 들었고, 익명을 통해 자유롭게 고민과 일상을 나누고 서로에게 힘이 되어주는 든든한 동료같은 서비스인 <비밀멋사>를 만들게 되었습니다.
>
> 더 나아가 다양한 부트캠프의 훈련생들이 개발부터 일상적인 고민까지 나눌 수 있는 소통 창구를 지원하는 것이 최종적인 목표입니다. 현재 <비밀멋사>는 '멋쟁이사자처럼 프론트엔드 스쿨'에만 국한되어 있지만, 추후에는 온라인으로 진행하는 여러 부트캠프 훈련생들 간의 원활한 소통을 지원하며 소속감을 느낄 수 있는 소통 창구이자, 원활한 소통을 지원하는 커뮤니티로 성장하는 것이 목표입니다.

### [링크]

- [🏡 레포지토리](https://github.com/kngsujng/Secret-Lion)
- [📁 팀 워크스페이스](https://b110.notion.site/b110/90fa0d2f30f142d2bfcd9fb5897469af)
- [🎨 디자인 피그마](https://www.figma.com/file/I9chPnoDui3uW80BrkDHPL/%EC%9E%91%EC%9A%B0%EC%86%8C-Project?node-id=320%3A11&t=I3aQVugqIbhBSdGd-0)

## 2. 사용 기술

|     **FrontEnd**      | **BackEnd** |    **Collaboration**    |    **ETC**     |
| :-------------------: | :---------: | :---------------------: | :------------: |
| HTML, CSS, JavaScript |  Firebase   | GitHub, Notion, Discord | Figma, Netlify |

## 3. 세부 기능

| 홈/스플래쉬 |
| ----------- |

![이미지1](https://user-images.githubusercontent.com/96777064/206344279-4330a9ed-b3f8-445c-a7f3-0384daa01fc6.gif)

- 회원, 비회원 이용 선택
- 비회원으로 이용하기: 메인 화면으로 이동
- 로그인하고 이용하기: 로그인 화면으로 이동

| 로그인 |
| ------ |

![](https://user-images.githubusercontent.com/96777064/206368007-9db9431e-b994-4722-b8cd-4c736fbbf838.gif)

- 유효성 검사를 진행하고, 오류 메시지를 제공합니다.
- 이메일과 비밀번호가 유효한 경우 게시판 화면으로 이동합니다.

| 회원가입 |
| -------- |

![](https://user-images.githubusercontent.com/96777064/206364349-eee1a076-cad5-4557-a64a-c6849be2b31e.gif)

- 사용자의 정보를 입력받아 회원가입을 진행합니다.
- 유효성 검사를 진행하고, 오류 메시지를 전달합니다.
- 모달창을 이용하여 커뮤니티 규칙과 개인정보 수집/이용 동의를 제공합니다.

| 게시판 |
| ------ |

![](https://user-images.githubusercontent.com/96777064/206362695-bb6ce29b-e237-4a84-9484-510dccd71902.gif)

- 인기/최신으로 게시글 정렬 순서를 변경할 수 있습니다.
- 드롭다운으로 카테고리를 지정할 수 있습니다.
- 이미지가 업로드 되지 않은 게시글은 카테고리별 기본 이미지를 제공합니다.

| 업로드 |
| ------ |

![](https://user-images.githubusercontent.com/96777064/206362715-29245407-b1b6-498b-96db-adff583e1cde.gif)

- 드롭다운 메뉴를 통해 게시글의 카테고리를 설정합니다.
- 첨부파일 선택 버튼을 이용하여 이미지를 업로드할 수 있습니다.

| 게시글 |
| ------ |

![](https://user-images.githubusercontent.com/96777064/206362705-c6db6f3f-e2db-4891-af76-e4f6eb4d8f76.gif)

- 좋아요/스크랩이 가능하며, 댓글을 게시할 수 있습니다.
- 작성한 게시글에만 삭제 버튼이 활성화되어, 작성자만 삭제할 수 있습니다.

| 프로필 |
| ------ |

![](https://user-images.githubusercontent.com/96777064/206362738-6603d18b-5f62-4a34-9f55-6d2c4f7cecbc.gif)

- 사용자의 프로필 정보를 제공합니다.
- 작성한 게시글, 좋아요, 스크랩한 게시글의 목록을 확인할 수 있습니다.
- 로그아웃을 할 수 있으며, 시작 페이지로 돌아갑니다.

| 프로필 편집 |
| ----------- |

![](https://user-images.githubusercontent.com/96777064/206362728-9f41d01b-eabe-41c6-8507-54f612dc4fdd.gif)

- 프로필 이미지를 변경하거나, 업로드한 이미지를 삭제할 수 있습니다.
- 새로운 닉네임의 중복 여부를 확인한 후 변경합니다.

## 4. 트러블 슈팅

### 4-1. 하위 컴포넌트의 요소를 가져오지 못 하는 이슈

- 문제 상황
  - 상위 컴포넌트에서 하위 컴포넌트의 요소에 돔 조작을 해야하는 상황(이벤트 추가, textContent를 가져오는 등)에서 원하는 요소를 불러올 수 없습니다.
- 원인 추론
  - 클래스로 컴포넌트화했기 때문에 해당 컴포넌트를 render(또는 initialize)를 해야만 요소가 만들어지고, appendChild를 통해 document에 그려주기 때문에 querySelector를 이용하여 요소를 불러올 수 없습니다.
- 해결 방법
  - render를 진행할 때, 상위 컴포넌트에서 컨트롤 해야 하는 요소를 배열의 형태로 반환합니다. 상위 컴포넌트에서 해당 컴포넌트를 생성할 때, 구조 분해 할당으로 요소에 접근할 수 있습니다.
- 적용 코드

      ```js
      // ./src/components/PostUploadForm/postUploadPreview.js
      import Component from '../../core/Component.js';

      class PostUploadPreview extends Component {
          constructor(props) {
              super(props);
          }

          render() {
              const previewImgCon = document.createElement('div');
              previewImgCon.setAttribute('class', 'post_img_con');

              const previewImg = document.createElement('img');
              previewImg.setAttribute('src', this.props);
              previewImg.setAttribute('class', 'post_img_preview');

              const imgCancelBtn = document.createElement('button');
              imgCancelBtn.setAttribute('class', 'post_btn_img_cancel');
              imgCancelBtn.textContent = 'x';

              previewImgCon.appendChild(previewImg);
              previewImgCon.appendChild(imgCancelBtn);

              return [previewImgCon, imgCancelBtn]; // 배열의 형태로 보내준다.
          }
      }
      export default PostUploadPreview;
      ```

      ```js
      // ./src/components/PostUploadForm/postUploadForm.js
      const [postUploadPreviewEl, imgCancelBtn] = postUploadPreview.initialize();
      ```

### 4-2. state로 상태 관리하여 리랜더링 시 정적인 데이터 초기화되는 이슈

- 문제상황
  - state를 이용한 상태 관리에서 정적인 데이터를 지정하는 경우, 해당 값을 바꾸더라도 리렌더링이 되는 경우 기존의 데이터 값을 가져옵니다.
- 원인 추론
  - 리렌더링이 진행 되면서 이벤트에 따른 값이 아닌 consturctor에서 지정해둔 정적인 데이터를 불러오면서 기존의 데이터로 초기화됩니다.
- 해결 방법
  - 변경되어야 하는 변수를 메소드를 이용하여 동적으로 할당했습니다. 선택한 메뉴와 카테고리의 정보를 로컬 스토리지에 저장하고, 이벤트가 발생하여 리렌더링 되는 경우 조건에 따라 변수의 값을 지정합니다.
- 적용 코드

  ```js
  // ./src/javascript/components/mainPost/mainPst.js
  class MainPost extends Component {
      constructor(props) {
          super(props);
          this.categoryList = ['자유', '학습', '취업', '연애', '관계'];
          this.state = {
              displayPost: this.checkCategory(),
          };
      }
      checkCategory() {
          if (!localStorage.getItem('selectCategory')) {
              localStorage.setItem('selectCategory', '전체');
          }
          if (!localStorage.getItem('postOrder')) {
              localStorage.setItem('postOrder', '인기');
          }

          const category = localStorage.getItem('selectCategory');
          const order = localStorage.getItem('postOrder');

          let newList = [];
          if (this.categoryList.includes(category)) {
              newList = this.props.posts.filter(
                  (el) => el.category === category
              );
          } else {
              localStorage.setItem('selectCategory', '전체');
              newList = this.props.posts;
          }
          return this.orderPost(newList, order);
      }
      changeCategory(value) {
          localStorage.setItem('selectCategory', value);
          const newList = this.checkCategory();
          this.setState({ displayPost: newList });
      }

      changeOrder(value) {
          localStorage.setItem('postOrder', value);
          const newList = this.checkCategory();
          this.setState({ displayPost: newList });
      }
      render(){
        ...
      }
  }
  ```

## 5. 보완점

익명 소통 창구의 장점은 극대화하고 단점은 보완할 수 있도록 지속적으로 기능을 업데이트할 예정입니다.

- 계정: 아이디/비밀번호 찾기, 신고 누적 횟수에 따른 사용자 제한 기능, 댓글 작성 게시글
- 게시판: 부트캠프별 전용 게시판
- 게시글: 게시글 검색 기능
