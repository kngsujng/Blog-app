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
			<article className="rounded-3xl bg-gray-50 shadow-lg sm:mx-4 md:mx-16 lg:mx-60 ">
				<Image
					className="w-full max-h-[500px]"
					src={`/images/${path}.png`}
					alt={title}
					width={760}
					height={300}
					priority
				/>
				<section className="flex flex-col justify-between p-6 lg:px-16">
					<div className="flex self-end gap-2 text-sky-600">
						<FaRegCalendar className="mt-1" />
						<p className="font-medium">{date.toString()}</p>
					</div>
					<h2 className="text-4xl font-extrabold">{title}</h2>
					<p className="pt-2 text-lg font-medium">{description}</p>
					<div className="w-full border-2 border-sky-400 mt-4 mb-10"></div>
					<MarkdownRender id={path} />
				</section>
			</article>
		);
	}
}
