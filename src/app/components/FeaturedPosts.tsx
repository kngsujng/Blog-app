import { getFeaturedPosts } from '../api/posts';
import PostsGrid from './PostsGrid';

export default async function FeaturedPosts() {
	const posts = await getFeaturedPosts();

	return (
		<section>
			<h2 className="text-2xl font-bold mt-10 ml-4">Featured Posts</h2>
			<PostsGrid posts={posts} />
		</section>
	);
}
