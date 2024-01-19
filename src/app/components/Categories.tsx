'use client';

import { Category } from '../posts/page';

type Props = {
	categories: Category[];
	filter: Category;
	handleCategory: (selectedCategory: Category) => void;
};

export default function Categories({
	categories,
	filter,
	handleCategory,
}: Props) {
	return (
		<article className="text-center p-4">
			<h2 className="text-lg font-bold underline underline-offset-8 decoration-2 decoration-blue-400 mb-4">
				Category
			</h2>
			<ul>
				{categories.map((category: Category) => (
					<li
						key={category}
						onClick={() => handleCategory(category)}
						className={`hover:text-blue-400 cursor-pointer ${
							category === filter && 'text-blue-400'
						}`}
					>
						{category}
					</li>
				))}
			</ul>
		</article>
	);
}
