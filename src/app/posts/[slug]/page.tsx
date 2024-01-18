import { Post, getPost } from '@/app/api/posts';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import { FaRegCalendar } from 'react-icons/fa';
import MarkdownRender from '@/app/components/MarkdownRender';

export type Props = { params: { slug: string } };

export default async function Post({ params: { slug } }: Props) {
	const post = await getPost(slug);
	if (!post) {
		redirect('/posts');
	}
	if (post) {
		const { path, date, title, description } = post;
		return (
			<section className="mx-96 rounded-t-3xl bg-gray-50">
				<Image
					className="w-full h-80 object-fill rounded-t-3xl"
					src={`/images/${path}.png`}
					alt={title}
					width="300"
					height="300"
					priority
				/>
				<section className="flex justify-between px-6">
					<div className="py-10">
						<h1 className="text-4xl font-extrabold">{title}</h1>
						<p className="text-lg font-semibold">{description}</p>
					</div>
					<div className="flex gap-2 p-2 text-sky-600">
						<FaRegCalendar className="mt-1" />
						<p className="font-medium">{date}</p>
					</div>
				</section>
				<section className="p-10 pb-40">
					<MarkdownRender id={path} />
				</section>
			</section>
		);
	}
}
