'use client';

import { useState } from 'react';
import { Post } from '../api/posts';
import { Category } from '../posts/page';
import Categories from './Categories';
import PostsGrid from './PostsGrid';

type Prop = {
	posts: Post[];
	categories: Category[];
};
const ALL_POSTS = 'All Posts';

export default function FilteredPosts({ posts, categories }: Prop) {
	const [filter, setFilter] = useState<Category>(ALL_POSTS);
	const filteredPosts =
		filter === 'All Posts'
			? posts
			: posts.filter((post) => post.category === filter);
	const handleCategory = (selectedCategory: Category): void => {
		setFilter(selectedCategory);
	};
	return (
		<section className="flex">
			<PostsGrid posts={filteredPosts} />
			<Categories
				categories={categories}
				filter={filter}
				handleCategory={handleCategory}
			/>
		</section>
	);
}
