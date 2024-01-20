import { Metadata } from 'next';
import { getAllPosts } from '../api/posts';
import FilteredPosts from '../components/FilteredPosts';

export const metadata: Metadata = {
	title: 'All Posts',
	description: '블로그 전체 글 보기',
};

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
