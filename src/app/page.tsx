import { getFeaturedPosts } from './api/posts';
import PostCard from './components/PostCard';
import PostCarousel from './components/PostCarousel';
import Profile from './components/Profile';

export default async function Home() {
	const posts = await getFeaturedPosts();
	return (
		<div>
			<Profile />
			<section>
				<h1 className="text-2xl font-bold mt-10 ml-4">Featured Posts</h1>
				<ul className="grid grid-cols-3">
					{posts &&
						posts.map((post) => (
							<li
								key={post.path}
								className="shadow-lg text-center m-4"
							>
								<PostCard post={post} />
							</li>
						))}
				</ul>
			</section>
			<PostCarousel />
		</div>
	);
}
