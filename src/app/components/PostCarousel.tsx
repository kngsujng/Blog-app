import { getNotFeaturedPosts } from '../api/posts';
import PostCard from './PostCard';
import MultiCarousel from './MultiCarousel';

export default async function PostCarousel() {
	const posts = await getNotFeaturedPosts();
	return (
		<section className="my-24">
			<h2 className="text-2xl font-bold mt-14 ml-2">You may like</h2>
			<MultiCarousel>
				{posts &&
					posts.map((post) => (
						<PostCard
							key={post.path}
							post={post}
						/>
					))}
			</MultiCarousel>
		</section>
	);
}
