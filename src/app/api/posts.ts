import path from 'path';
import { promises as fs } from 'fs';
import { cache } from 'react';

export type Post = {
	path: string;
	date: string;
	title: string;
	description: string;
	category: string;
	featured: boolean;
};
export type PostData = Post & { content: string };

export const getAllPosts = cache(async (): Promise<Post[]> => {
	const filePath = path.join(process.cwd(), 'data', 'posts.json');
	const data = await fs.readFile(filePath, 'utf-8');
	return JSON.parse(data).sort((a: Post, b: Post) =>
		a.date > b.date ? -1 : 1
	);
});

export async function getFeaturedPosts(): Promise<Post[]> {
	const featuredPosts = await getAllPosts();
	return featuredPosts.filter((post) => post.featured);
}

export async function getNotFeaturedPosts(): Promise<Post[]> {
	const notFeaturedPosts = await getAllPosts();
	return notFeaturedPosts.filter((post) => !post.featured);
}

export async function getPostContent(
	id: string
): Promise<PostData | undefined> {
	const filePath = path.join(process.cwd(), 'data', 'posts', `${id}.md`);
	const metadata = await getAllPosts() //
		.then((posts) => posts.find((item) => item.path === id));
	if (!metadata) throw new Error('파일 이름이 없습니다');
	const content = await fs.readFile(filePath, 'utf-8');
	return { ...metadata, content };
}
