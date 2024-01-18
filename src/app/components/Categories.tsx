'use client';

import { Category } from '../posts/page';

type Props = {
	categories: Category[];
	handleCategory: (selectedCategory: Category) => void;
};

export default function Categories({ categories, handleCategory }: Props) {
	return (
		<article className="flex flex-col items-center absolute top-6 -right-40">
			<h1 className="text-lg font-bold underline underline-offset-8 decoration-2 decoration-blue-400 p-2">
				Category
			</h1>
			<ul>
				{categories.map((v: Category, i) => (
					<li key={v}>
						<button
							onClick={() => handleCategory(v)}
							className="hover:text-blue-400 focus:text-blue-400"
						>
							{v}
						</button>
					</li>
				))}
			</ul>
		</article>
	);
}
