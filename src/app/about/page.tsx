import Profile from '../components/Profile';

export default function About() {
	return (
		<>
			<Profile />
			<section className="m-12 p-10 bg-sky-50 text-center">
				<p className="text-xl font-bold mt-7">Who am I?</p>
				<p>개발을 사랑하는 프론트엔드 웹 개발자</p>
				<p>사람과 디자인을 담는 웹앱을 만들고 있음</p>
				<p className="text-xl font-bold mt-7">Career</p>
				<p>Naver (~Now)</p>
				<p>Toss (2024~2030)</p>
				<p className="text-xl font-bold mt-7">Skills</p>
				<p>HTML, CSS, JavaScript, TypeScript</p>
				<p>React, Styled-Components</p>
				<p>SCSS, TailwindCSS, Bootstrap</p>
				<p>Git, Notion, Slack, DisCord</p>
				<p>Figma</p>
			</section>
		</>
	);
}
