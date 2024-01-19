import Image from 'next/image';
import ReactMarkDown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type Props = {
	content: string;
};

export default function MarkdownRender({ content }: Props) {
	return (
		<pre className="whitespace-pre-line pb-14 mb-14">
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
							className="w-full  object-fit"
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
