import Image from 'next/image';
import PROFILE_IMG from './../../../public/images/profile.jpeg';
import Link from 'next/link';

export default function Profile() {
	return (
		<section className="p-4 text-center">
			<Image
				className="rounded-full mx-auto mb-4"
				src={PROFILE_IMG}
				alt="프로필 사진"
				width="200"
				height="200"
				priority
			/>
			<h2 className="text-2xl font-bold">Hi, I&apos;m Kngsujng</h2>
			<h3 className="text-lg font-semibold">Front-end engineer</h3>
			<p className="mb-4">J-커브 성장의 힘을 믿는 코더, 수정</p>
			<Link
				href="/contact"
				className="rounded-xl bg-sky-500 px-4 py-1"
			>
				Contact Me
			</Link>
		</section>
	);
}
