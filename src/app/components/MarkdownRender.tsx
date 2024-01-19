import { getContent } from '../api/posts';
import Image from 'next/image';
import ReactMarkDown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default async function MarkdownRender({ id }: { id: string }) {
	const { content } = await getContent(id);
	return (
		<pre>
			<ReactMarkDown
				className="prose max-w-none"
				remarkPlugins={[remarkGfm]}
				components={{
					code({ ref, node, className, children, ...props }) {
						const match = /language-(\w+)/.exec(className || '');
						return match ? (
							<SyntaxHighlighter
								language={match[1]}
								PreTag="div"
								{...props}
								style={materialDark}
								ref={null}
							>
								{String(children).replace(/\n$/, '')}
							</SyntaxHighlighter>
						) : (
							<code {...props}>{children}</code>
						);
					},
					img: (image) => (
						<Image
							className="w-full max-h-60 object-cover"
							src={image.src || ''}
							alt={image.alt || ''}
							width={500}
							height={300}
						/>
					),
				}}
			>
				{content}
			</ReactMarkDown>
		</pre>
	);
}
