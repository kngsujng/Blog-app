import path from 'path';
import { promises as fs } from 'fs';

export type Post = {
	path: string;
	date: string;
	title: string;
	description: string;
	category: string;
	featured: boolean;
};

export async function getAllPosts(): Promise<Post[]> {
	const filePath = path.join(process.cwd(), 'data', 'posts.json');
	const data = await fs.readFile(filePath, 'utf-8');
	return JSON.parse(data);
}

export async function getFeaturedPosts(): Promise<Post[]> {
	const featuredPosts = await getAllPosts();
	return featuredPosts.filter((post) => post.featured);
}

export async function getNotFeaturedPosts(): Promise<Post[]> {
	const notFeaturedPosts = await getAllPosts();
	return notFeaturedPosts.filter((post) => !post.featured);
}

export async function getPost(path: string): Promise<Post | undefined> {
	const posts = await getAllPosts();
	return posts.find((item) => item.path === path);
}

export async function getContent(id: string) {
	const filePath = path.join(process.cwd(), 'data/posts', `${id}.md`);
	const content = await fs.readFile(filePath, 'utf-8');
	return { content, fallback: false };
}
