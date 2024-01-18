import { getAllPosts } from '../api/posts';
import FilteredPosts from '../components/FilteredPosts';

export type Category =
	| 'All Posts'
	| 'frontend'
	| 'javascript'
	| 'project'
	| 'etc'
	| 'network';

const categories: Category[] = [
	'All Posts',
	'project',
	'frontend',
	'javascript',
	'network',
	'etc',
];

export default async function Posts() {
	const posts = await getAllPosts();
	// const categories: Category[]  = [...new Set(posts.map((post) => post.category))];
	return (
		<>
			<FilteredPosts
				posts={posts}
				categories={categories}
			/>
		</>
	);
}
