# Blog-App

#### 배포 URL : [Blog-App](https://blog-ebjyxnr4i-kngsujngs-projects.vercel.app/)

<br>

## 1. 프로젝트 소개

### 1.1 프로젝트 명 : Blog-App

- 깃허브(GitHub)와 벨로그(Velog)의 컨텐츠를 한데 모아보기 위해 제작했습니다.
- 두 플랫폼의 기술적인 내용을 효과적으로 수집한 포트폴리오입니다.

<br>

### 1.2. 개발 환경

- 기간 : 2024.01.16 ~ 2024.01.21
- 기술 스택 : `TypeScript` `React` `Next.js` `vercel` `Tailwind CSS`

<br>
<br>
<br>

## 2. 프로젝트 기능

### 2.1. Main 페이지

![메인](https://github.com/kngsujng/Blog-app/assets/110231276/28b041e1-f229-463d-a7b5-812deeda5da6)

- GitHub 프로필 연동 : 사용자의 기술적인 활동과 커밋 기록을 시각적으로 표현
- Pinned된 게시글 : 주요 프로젝트나 블로그 글을 강조하기 위해 중요한 컨텐츠 나열
- 캐러셀 형태 게시글 : Pinned되지 않은 모든 게시글을 동적으로 표시

<br>

### 2.2. About 페이지

![어바웃](https://github.com/kngsujng/Blog-app/assets/110231276/0f32a5d5-a253-4338-8488-766adabfbe59)

- 블로그 소유주의 자기 소개와 프로젝트, 경력, 기술 스택 나열

<br>

### 2.3. Posts 페이지

![포스트](https://github.com/kngsujng/Blog-app/assets/110231276/a6a14397-0ec2-4eea-9927-b4789dd8d3a3)

- project, frontend, javascript, network, etc 해당 카테고리별 게시글 필터링
- 반응형 웹 구현

<br>

### 2.4. Post Detail 페이지

![디테일](https://github.com/kngsujng/Blog-app/assets/110231276/93c0dcb5-5db6-4c5f-b7fb-9a8f60871705)

- 게시글을 선택하면 Post Detail 페이지로 이동
- 게시글에 해당하는 컨텐츠 보여줌

<br>

### 2.5. Contact 페이지

![이메일](https://github.com/kngsujng/Blog-app/assets/110231276/d021bd2c-f324-4118-9fc1-82f0064125f1)

- 블로그 소유주의 sns 링크 바로가기 생성
- 위 이메일로 메일 전송 기능 구현

<br/>

## 3. 프로젝트 주요 기능

**✅ API Route를 이해하기 위한 이메일 전송 기능 구현**

사용자 이벤트를 처리하는 컴포넌트는 CSR(Client Side Rendering)환경에서만 동작하며 이를 통해 사용자의 브라우저에서 비동기적으로 서버로 요청을 보내 이메일 전송 기능을 구현한다. node환경에서만 구동되는 nodemailer 라이브러리는 SSR(Server Side Rendering)에서 동작하여, 서버 측에서 이메일 전송을 처리한다. 이 두 환경을 통합하여 사용자와 서버간의 효과적인 이메일 송수신 가능하게 한다.

<br/>

**✅ 동적/정적 MetaData 활용**

페이지별로 독립적인 title 설정을 통해 사용자 경험을 향상시키고, SEO(Search Engine Optimization) 최적화를 위한 메타데이터를 효과적으로 활용합니다. 이를 통해 각 페이지가 고유한 메타데이터를 통해 사용자에게 특정 페이지의 핵심 내용을 명확하게 전달한다.

<br/>

**✅ GitHub API 활용**

GitHub 프로필을 블로그에 연동하기 위해 GitHub API를 활용하여 사용자의 GitHub 프로필 정보가 변경되더라도 블로그 프로젝트는 동기화되어 변화를 실시간으로 반영할 수 있다. GitHub API를 효과적으로 활용하여 프로필 정보를 동적으로 가져오고 업데이트함으로써 사용자 경험을 개선하고 최신 정보를 제공하고 있다.

<br />

**✅ 페이지 로딩 속도 개선**

1. cache

```js
export const getAllPosts = cache(async (): Promise<Post[]> => {
	const filePath = path.join(process.cwd(), 'data', 'posts.json');
	const data = await fs.readFile(filePath, 'utf-8');
	return JSON.parse(data).sort((a: Post, b: Post) =>
		a.date > b.date ? -1 : 1
	);
});
```

fetch를 사용하지 않고 데이터베이스에 접근하면 여러 번 호출할 때 중복이 방지되지 않기 때문에 cache를 활용하여 렌더링 사이클 동안에만 데이터를 한 번 호출하고 이를 캐시해서 여러 차례 사용하게 한다. 이를 통해 성능 향상과 중복 데이터베이스 호출을 최소화한다.

2. generateStaticParams

```js
export async function generateStaticParams() {
	const posts = await getFeaturedPosts();
	return posts.map((post) => ({ slug: post.path }));
}
```

generateStaticParams을 통해 SSR(Server Side Rendering)이 반복해서 발생하는 것을 방지하고, 핵심 컨텐츠를 미리 렌더링하여 서버 부하를 최소화하고 페이지 로딩 속도를 개선한다.

3. lazy loading

```js
const DynamicGitHubCommit = dynamic(() => import('./components/GitHubCommit'), {
	ssr: false,
});
```

브라우저 APIs를 호출하는 컴포넌트는 서버에서 렌더링될 때 초기에 컴파일 오류를 유발할 수 있다. 이를 방지하기 위해 GitHubCommit 컴포넌트를 초기 로딩 시에 한 번에 로딩하지 않고 필요한 시점에 필요한 리소스를 동적으로 로드하는 lazy loading 방식을 사용하여 초기 로딩 시간을 최소화하고 오류를 방지한다.
