import { getPosts } from './api/posts';
import PostCard from './components/PostCard';
import Profile from './components/Profile';

export default async function Home() {
	const posts = await getPosts();
	return (
		<>
			<Profile />
			<section className="m-12">
				<h1 className="text-2xl font-bold mt-10">Featured Posts</h1>
				<ul className="grid grid-cols-3 gap-6">
					{posts.map((post) => (
						<li key={post.id}>
							<PostCard post={post} />
						</li>
					))}
				</ul>
			</section>
		</>
	);
}
