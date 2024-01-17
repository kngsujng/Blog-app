import Link from 'next/link';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { SiVelog } from 'react-icons/si';
import EmailForm from '../components/EmailForm';

export default function Contact() {
	return (
		<>
			<section className="text-center">
				<h1 className="text-2xl font-bold mt-10 ml-4">Contact me</h1>
				<p className="my-3">kngsujng@naver.com</p>
				<div className="flex items-center justify-center gap-3">
					<Link href="https://github.com/kngsujng">
						<FaGithub size="38" />
					</Link>
					<Link href="https://www.instagram.com/kngsujng/">
						<FaInstagram size="40" />
					</Link>
					<Link href="https://velog.io/@kngsujng/posts">
						<SiVelog size="33" />
					</Link>
				</div>
			</section>
			<EmailForm />
		</>
	);
}
