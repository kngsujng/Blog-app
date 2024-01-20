import { Post, getPostContent } from '@/app/api/posts';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import OtherPost from '@/app/components/OtherPost';
import PostContent from '@/app/components/PostContent';
import { Metadata } from 'next';

export type Props = { params: { slug: string } };

export async function generateMetadata({
	params: { slug },
}: Props): Promise<Metadata> {
	const { path, description } = (await getPostContent(slug)) as Post;

	return {
		title: path,
		description: description,
	};
}

export default async function Post({ params: { slug } }: Props) {
	const post = await getPostContent(slug);

	if (!post) {
		redirect('/posts');
	}
	if (post) {
		const { path, title } = post;
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
				<PostContent post={post} />
				<OtherPost currentPost={post} />
			</article>
		);
	}
}
