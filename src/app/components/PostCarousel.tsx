import { getNotFeaturedPosts } from '../api/posts';
import PostCard from './PostCard';
import MultiCarousel from './MultiCarousel';

export default async function PostCarousel() {
	const posts = await getNotFeaturedPosts();
	return (
		<section>
			<h1 className="text-2xl font-bold mt-10">You may like</h1>
			<MultiCarousel>
				{posts &&
					posts.map((post) => (
						<div key={post.id}>
							<PostCard post={post} />
						</div>
					))}
			</MultiCarousel>
		</section>
	);
}
