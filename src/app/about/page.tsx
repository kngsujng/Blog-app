import Link from 'next/link';
import Profile from '../components/Profile';

export default function About() {
	const TITLE_CLASS = 'text-3xl font-bold mt-16 mb-4';
	const SUBTITLE_CLASS = 'font-bold text-xl text-blue-500 mt-4';
	const LINK_CLASS =
		'border-b-2 hover:text-blue-500 hover:border-b-blue-300 mr-3';
	const PROJECT_TITLE_CLASS = 'font-bold text-xl mt-10';
	return (
		<>
			<Profile />
			<section className="m-12 py-16 px-10 bg-sky-50 shadow-lg sm:mx-4 md:mx-16 lg:mx-60 whitespace-pre-line">
				<h2 className={TITLE_CLASS}>Introduction</h2>
				<p>
					어떤 업무에서든 주도적으로 성장 포인트를 찾아내고, 나의 성장을 동료의
					성장으로 연결시켜왔습니다. <br />
					서비스 사용자 뿐만 아니라 함께 일하는 동료들에게 편리함을 제공하고
					보탬이 되려 노력합니다. <br /> 팀 프로젝트를 원활하게 진행하기 위해
					사용할 Pr과 이슈 템플릿을 제공하고, <br />
					정기회의뿐만 아니라 임시회의에서 회의록을 상세히 작성하여 팀원들에게
					공유하는 등 문서화에 앞장섭니다.
					<br />
					지식은 공유하는 사람이 제일 많은 것을 얻어간다고 생각합니다.
				</p>
				<h2 className={TITLE_CLASS}>Project</h2>
				<article>
					<div>
						<h3 className="font-bold text-xl">Recipick</h3>
						<p>레시피 공유 SNS 서비스</p>
						<Link
							className={LINK_CLASS}
							href="https://github.com/Bul-4-Jo/Recipick"
						>
							GitHub
						</Link>
						<Link
							className={LINK_CLASS}
							href="https://dynamic-gumdrop-83afb6.netlify.app/login"
						>
							Page
						</Link>
					</div>
					<div>
						<h4 className={SUBTITLE_CLASS}>About Project</h4>
						<ul className="list-disc ml-3">
							<li>
								사용자의 경험을 높여주기 위해서 Intersection Observer API를 통한
								무한 스크롤 구현
							</li>
							<li>CSS Sprite 기법을 사용해 웹 로딩시간 단축</li>
							<li>
								Outlet을 활용하여 공통 헤더와 탭 메뉴를 고정시키기 위한 레이아웃
								컴포넌트 제작
							</li>
							<li>
								LiveShare을 통한 페어 프로그래밍, pr 승인 전 코드리뷰 진행
							</li>
						</ul>
						<h4 className={SUBTITLE_CLASS}>Role</h4>
						<ul className="list-disc ml-3">
							<li>
								UI 및 기능 : 메인 프로필, 프로필 수정, 채팅룸 페이지, Header,
								공용 게시물 컴포넌트(PostCard) 등
							</li>
							<li>
								게시물 작성시 레시피 템플릿 제공, 반응형 웹 구현, 문서화, 파비콘
								설정 등
							</li>
						</ul>
					</div>
				</article>
				<article>
					<div>
						<h3 className={PROJECT_TITLE_CLASS}>Secret-Lion</h3>
						<p>부트캠프 훈련생을 위한 익명 커뮤니티 서비스</p>
						<Link
							className={LINK_CLASS}
							href="https://github.com/kngsujng/Secret-Lion"
						>
							GitHub
						</Link>
						<Link
							className={LINK_CLASS}
							href="https://secret-lion.netlify.app/"
						>
							Page
						</Link>
					</div>
					<div>
						<h4 className={SUBTITLE_CLASS}>About Project</h4>
						<ul className="list-disc ml-3">
							<li>부트캠프동안 익명 소통 창구의 필요성을 느껴 프로젝트 진행</li>
							<li>Vanilla JS를 이용하여 SPA를 구현</li>
							<li>컴포넌트 재사용을 위한 Class 컴포넌트화 </li>
							<li>실제 부트캠프 동료들에게 배포/실서비스 운영</li>
						</ul>
						<h4 className={SUBTITLE_CLASS}>Role</h4>
						<ul className="list-disc ml-3">
							<li>UI 및 기능 : 시작 페이지, 로그인, 회원가입, Header</li>
							<li>
								이 외 : 기본 프로필 이미지 제작, 리펙토링을 위한 사후 설문조사
								작성 및 결과 분석
							</li>
						</ul>
					</div>
				</article>
				<article>
					<div>
						<h3 className={PROJECT_TITLE_CLASS}>wiki-todo</h3>
						<p>일정관리 서비스</p>
						<Link
							className={LINK_CLASS}
							href="https://github.com/kngsujng/WikiTodo"
						>
							GitHub
						</Link>
						<Link
							className={LINK_CLASS}
							href="https://wikitodo.netlify.app/"
						>
							Page
						</Link>
					</div>
					<div>
						<h4 className={SUBTITLE_CLASS}>About Project</h4>
						<ul className="list-disc ml-3">
							<li>다크모드 지원과 할 일 상태관리를 위한 Context API 사용</li>
							<li>
								React-Query를 활용한 파이어베이스 비동기 데이터 통신과 실시간 UI
								업데이트 구현
							</li>
							<li>
								커스텀 훅을 활용한 로직의 재사용 - useInputWithValidation,
								useTitle, useScrap
							</li>
							<li>TypeScript 강타입 (Strongly Typed) 언어 사용</li>
						</ul>
					</div>
				</article>
				<h2 className={TITLE_CLASS}>Experience</h2>
				<article>
					<div>
						<h3 className={PROJECT_TITLE_CLASS}>React Hook 지침서 공동 집필</h3>
						<p>리액트 훅 들어오네 </p>
						<Link
							className={LINK_CLASS}
							href="https://ridibooks.com/books/2773000063"
						>
							Page
						</Link>
					</div>
					<ol className="list-disc ml-3 mt-4">
						<li>1. Hook</li>
						<p>리액트 훅의 기본 개념과 특징, 사용규칙</p>
						<li>2.1.3. UseContext</li>
						<p>
							UseContext의 기본 개념과 사용법, useContext를 활용한 Props
							Drilling 해결
						</p>
						<p>useContext와 props drilling의 비교 예제 작성</p>
						<li>2.3. 커스텀 훅</li>
						<p>커스텀 훅의 기본 개념과 주의사항, 사용방법, 실습 예제</p>
						<p>
							다양한 종류의 커스텀 훅 예제 작성 (useInput, useTitle, useClick,
							useToggle, useAxios 등)
						</p>
					</ol>
				</article>
				<article>
					<h3 className={PROJECT_TITLE_CLASS}>데이터 분석가</h3>
					<ol className="list-disc ml-3 mt-4">
						<li>
							<Link
								className={LINK_CLASS}
								href="https://data.jeonnam.go.kr/index.do?menuCd=DOM_000000102001000000"
							>
								전라남도 빅데이터 허브 플랫폼 관리
							</Link>
						</li>
						<p>
							지자체 요구에 따라 Raw 데이터 분석, Tableau를 통한 데이터 시각화
						</p>
						<li>
							<Link
								className={LINK_CLASS}
								href="http://www.goyang.go.kr/bigdata/realtime/realtime.do"
							>
								고양시청 데이터 분석 워크플로우 유형화
							</Link>
						</li>
						<p>
							800여개의 통계분석 데이터베이스를 10여 개의 유형으로 구분하여,
							파이썬을 활용한 자동화 기능을 갖추도록 기반 형성
						</p>
						<p>useContext와 props drilling의 비교 예제 작성</p>
						<li>사내 알고리즘 스터디 운영을 통한 개인적 역량 향상 도모</li>
					</ol>
				</article>
				<h2 className={TITLE_CLASS}>Stack</h2>
				<ul className="list-disc ml-3 mb-16">
					<li>HTML, CSS, JavaScript, TypeScript</li>
					<li>React, Styled-Components</li>
					<li>SCSS, TailwindCSS, Bootstrap</li>
					<li>Git, Notion, Slack, DisCord ,Figma</li>
				</ul>
			</section>
		</>
	);
}
