import { redirect } from 'next/navigation';
import { Post, getAllPosts } from '../api/posts';
import AdjacentPostCard from './AdjacentPostCard';

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
			<section className="flex justify-between shadow-md">
				{prevPost && (
					<AdjacentPostCard
						post={prevPost}
						type="prev"
					/>
				)}
				{nextPost && (
					<AdjacentPostCard
						post={nextPost}
						type="next"
					/>
				)}
			</section>
		);
	}
}
