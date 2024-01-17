import path from 'path';
import { promises as fs } from 'fs';

export type Post = {
	id: string;
	date: string;
	title: string;
	description: string;
	category: string;
};

export async function getPosts(): Promise<Post[]> {
	const filePath = path.join(process.cwd(), 'data', 'posts.json');
	const data = await fs.readFile(filePath, 'utf-8');
	return JSON.parse(data);
}

export async function getPost(id: string): Promise<Post | undefined> {
	const posts = await getPosts();
	return posts.find((item) => item.id === id);
}
