import { FaGithub, FaInstagram } from 'react-icons/fa';
import { SiVelog } from 'react-icons/si';
import EmailForm from '../components/EmailForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact me',
	description: 'Kngsujng에게 이메일 보내기',
};

const LINKS = [
	{ icon: <FaGithub />, url: 'https://github.com/kngsujng' },
	{ icon: <FaInstagram />, url: 'https://www.instagram.com/kngsujng/' },
	{ icon: <SiVelog />, url: 'https://velog.io/@kngsujng/posts' },
];
export default function Contact() {
	return (
		<>
			<section className="flex flex-col items-center">
				<h2 className="text-2xl font-bold mt-2">Contact me</h2>
				<p className="my-3">ksj00818@gmail.com</p>
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
