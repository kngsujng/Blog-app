import { FaGithub, FaInstagram } from 'react-icons/fa';
import { SiVelog } from 'react-icons/si';
import EmailForm from '../components/EmailForm';

const LINKS = [
	{ icon: <FaGithub />, url: 'https://github.com/kngsujng' },
	{ icon: <FaInstagram />, url: 'https://www.instagram.com/kngsujng/' },
	{ icon: <SiVelog />, url: 'https://velog.io/@kngsujng/posts' },
];
export default function Contact() {
	return (
		<>
			<section className="text-center">
				<h2 className="text-2xl font-bold mt-10 ml-4">Contact me</h2>
				<p className="my-3">kngsujng@naver.com</p>
				<ul className="flex items-center justify-center gap-3">
					{LINKS.map((link, index) => (
						<a
							key={index}
							href={link.url}
							target="_blank"
							rel="noreferrer"
							className="text-4xl hover:text-blue-700"
						>
							{link.icon}
						</a>
					))}
				</ul>
			</section>
			<EmailForm />
		</>
	);
}
