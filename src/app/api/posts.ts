import path from 'path';
import { promises as fs } from 'fs';

export type Post = {
	id: string;
	date: string;
	title: string;
	description: string;
	category: string;
	featuered: boolean;
};

export async function getAllPosts(): Promise<Post[]> {
	const filePath = path.join(process.cwd(), 'data', 'posts.json');
	const data = await fs.readFile(filePath, 'utf-8');
	return JSON.parse(data);
}

export async function getFeaturedPosts(): Promise<Post[]> {
	const featuredPosts = await getAllPosts();
	return featuredPosts.filter((post) => post.featuered);
}

export async function getNotFeaturedPosts(): Promise<Post[]> {
	const notFeaturedPosts = await getAllPosts();
	return notFeaturedPosts.filter((post) => !post.featuered);
}

export async function getPost(id: string): Promise<Post | undefined> {
	const posts = await getFeaturedPosts();
	return posts.find((item) => item.id === id);
}
