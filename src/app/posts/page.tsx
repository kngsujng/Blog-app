import { getAllPosts } from '../api/posts';
import FilteredPosts from '../components/FilteredPosts';

export type Category =
	| 'All Posts'
	| 'story'
	| 'frontend'
	| 'backend'
	| 'javascript';

const categories: Category[] = [
	'All Posts',
	'story',
	'frontend',
	'backend',
	'javascript',
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
