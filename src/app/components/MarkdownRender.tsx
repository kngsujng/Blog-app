import Markdown from 'react-markdown';
import { getContent } from '../api/posts';
import remarkGfm from 'remark-gfm';

export default async function MarkdownRender({ id }: { id: string }) {
	const { content } = await getContent(id);
	return <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>;
}
