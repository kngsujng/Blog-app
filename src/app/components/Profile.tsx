import Image from 'next/image';
import { SlLocationPin } from 'react-icons/sl';
import { getGitHubProfile } from '../api/github';

type Props = {
	data: {
		login: string;
		avatar_url: string;
		location: string;
		bio: string;
	};
};
const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME as string;
const accessToken = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN as string;

export default async function Profile() {
	const data = await getGitHubProfile(username, accessToken);

	const { login, avatar_url, location, bio } = data;
	return (
		<section className="p-4 text-center">
			<Image
				className="rounded-full mx-auto mb-3"
				src={avatar_url}
				alt="프로필 사진"
				width="200"
				height="200"
				priority
			/>
			<h2 className="text-2xl font-bold">{login}</h2>
			<p className="">꾸준한 노력의 힘을 믿는 코더, 강수정</p>
			<h3 className="text-lg font-medium">{bio}</h3>
			<div className="flex items-center justify-center gap-1 mb-6">
				<SlLocationPin />
				{location}
			</div>
		</section>
	);
}
