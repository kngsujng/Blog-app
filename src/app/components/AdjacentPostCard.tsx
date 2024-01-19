import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { Post } from '../api/posts';

type Props = { post: Post; type: 'prev' | 'next' };

const ICON_CLASS = 'text-5xl m-4 text-yellow-300 group-hover:text-6xl';

export default function AdjacentPostCard({ post, type }: Props) {
	const { path, title, description } = post;
	return (
		<Link
			href={`/posts/${path}`}
			className="relative w-full bg-black max-h-56"
		>
			<Image
				className="w-full opacity-40 max-h-56"
				src={`/images/${path}.png`}
				alt={title}
				width={150}
				height={100}
			/>
			<div className="group text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-around items-center px-8">
				{type === 'prev' && <FaArrowLeft className={ICON_CLASS} />}
				<div className="w-full text-center">
					<h3 className="text-2xl font-bold">{title}</h3>
					<p className="text-md font-bold mt-2 ">{description}</p>
				</div>
				{type === 'next' && <FaArrowRight className={ICON_CLASS} />}
			</div>
		</Link>
	);
}
