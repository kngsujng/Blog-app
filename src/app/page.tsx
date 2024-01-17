import { getFeaturedPosts } from './api/posts';
import PostCard from './components/PostCard';
import PostCarousel from './components/PostCarousel';
import Profile from './components/Profile';

export default async function Home() {
	const posts = await getFeaturedPosts();
	return (
		<div className="m-12">
			<Profile />
			<section>
				<h1 className="text-2xl font-bold mt-10">Featured Posts</h1>
				<ul className="grid grid-cols-3 gap-6">
					{posts &&
						posts.map((post) => (
							<li key={post.id}>
								<PostCard post={post} />
							</li>
						))}
				</ul>
			</section>
			<PostCarousel />
		</div>
	);
}
