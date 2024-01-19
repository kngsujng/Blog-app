import { redirect } from 'next/navigation';
import { Post, getAllPosts } from '../api/posts';
import Link from 'next/link';

export type Props = { currentPost: Post };

export default async function OtherPost({ currentPost }: Props) {
	const posts = await getAllPosts();
	const currentIdx = posts.findIndex((post) => post.path === currentPost.path);

	if (currentIdx === -1) {
		redirect('/posts');
	}

	if (currentIdx !== -1) {
		const prevPost = posts[currentIdx - 1];
		const nextPost = posts[currentIdx + 1];
		return (
			<section className="flex justify-between">
				{prevPost && (
					<Link href={`/posts/${prevPost.path}`}>
						<h3>{prevPost.title}</h3>
						<p>{prevPost.description}</p>
					</Link>
				)}
				{nextPost && (
					<Link href={`/posts/${nextPost.path}`}>
						<h3>{nextPost.title}</h3>
						<p>{nextPost.description}</p>
					</Link>
				)}
			</section>
		);
	}
}
