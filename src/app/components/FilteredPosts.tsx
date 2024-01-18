'use client';

import { useState } from 'react';
import { Post } from '../api/posts';
import PostCard from './PostCard';
import { Category } from '../posts/page';
import Categories from './Categories';

type Prop = {
	posts: Post[];
	categories: Category[];
};

export default function FilteredPosts({ posts, categories }: Prop) {
	const [filter, setFilter] = useState('All Posts');
	const filteredPosts =
		filter === 'All Posts'
			? posts
			: posts.filter((post) => post.category === filter);
	const handleCategory = (selectedCategory: Category): void => {
		setFilter(selectedCategory);
	};
	return (
		<section className="relative right-32 mx-56">
			<ul className="grid grid-cols-3">
				{filteredPosts &&
					filteredPosts.map((post) => (
						<li
							key={post.path}
							className="shadow-lg text-center m-4"
						>
							<PostCard post={post} />
						</li>
					))}
			</ul>
			<Categories
				categories={categories}
				handleCategory={handleCategory}
			/>
		</section>
	);
}
