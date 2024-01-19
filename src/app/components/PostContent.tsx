import { FaRegCalendar } from 'react-icons/fa';
import MarkdownRender from '@/app/components/MarkdownRender';
import { PostData } from '../api/posts';

type Props = { post: PostData };

export default function PostContent({ post }: Props) {
	const { date, title, description, content } = post;
	return (
		<section className="flex flex-col justify-between p-6 lg:px-16">
			<div className="flex self-end gap-2 text-sky-600">
				<FaRegCalendar className="mt-1" />
				<p className="font-medium">{date.toString()}</p>
			</div>
			<h2 className="text-4xl font-extrabold">{title}</h2>
			<p className="pt-2 text-lg font-medium">{description}</p>
			<div className="w-full border-2 border-sky-400 mt-4 mb-10"></div>
			<MarkdownRender content={content} />
		</section>
	);
}
