'use client';

import Image from 'next/image';
import PROFILE_IMG from './../../../public/images/profile.jpeg';
import { useRouter } from 'next/navigation';

export default function Profile() {
	const router = useRouter();

	return (
		<section className="flex-col p-4 text-center">
			<Image
				className="rounded-full mx-auto mb-4"
				src={PROFILE_IMG}
				alt="프로필 사진"
				width="200"
				height="200"
				priority
			/>
			<div>
				<p className="text-lg font-bold">Hi, I&apos;m Kngsujng</p>
				<p className="font-medium">Front-end engineer</p>
				<p>J-커브 성장의 힘을 믿는 코더, 수정</p>
				<button
					onClick={() => router.push('/contact')}
					className="rounded-full bg-sky-500 mt-4 p-2"
				>
					Contact Me
				</button>
			</div>
		</section>
	);
}
