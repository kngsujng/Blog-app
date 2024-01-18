import Image from 'next/image';
import Link from 'next/link';
import { Post } from '../api/posts';

export default function PostCard({
	post: { path, date, title, description, category },
}: {
	post: Post;
}) {
	return (
		<Link href={`/posts/${path}`}>
			<Image
				src={`/images/${path}.png`}
				alt="포스트 대표사진"
				width="600"
				height="600"
				priority
			/>
			<div className="p-5">
				<p className="text-right mb-4 text-gray-600">{date}</p>
				<p className="text-lg font-bold">{title}</p>
				<p className="p-2 text-ellipsis overflow-hidden">{description}</p>
				<p className="mt-2 px-2 inline-block rounded-full bg-category">
					{category}
				</p>
			</div>
		</Link>
	);
}
