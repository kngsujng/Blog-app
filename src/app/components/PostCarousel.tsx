import { getNotFeaturedPosts } from '../api/posts';
import PostCard from './PostCard';
import MultiCarousel from './MultiCarousel';

export default async function PostCarousel() {
	const posts = await getNotFeaturedPosts();
	return (
		<section>
			<h1 className="text-2xl font-bold mt-14 ml-2">You may like</h1>
			<MultiCarousel>
				{posts &&
					posts.map((post) => (
						<li
							key={post.id}
							className="shadow-lg text-center m-4"
						>
							<PostCard post={post} />
						</li>
					))}
			</MultiCarousel>
		</section>
	);
}
