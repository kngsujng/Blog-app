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
			<article className="rounded-md overflow-hidden shadow-lg h-96">
				<Image
					className="w-full h-48"
					src={`/images/${path}.png`}
					alt={title}
					width={300}
					height={200}
					priority
				/>
				<div className="flex flex-col items-center p-4">
					<time className="self-end mb-4 text-gray-600">{date.toString()}</time>
					<h3 className="text-lg font-bold w-full truncate">{title}</h3>
					<p className="w-full truncate text-center">{description}</p>
					<span className="text-sm rounded-full bg-category px-2 py-1 my-6">
						{category}
					</span>
				</div>
			</article>
		</Link>
	);
}
