import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: "Kngsujng's Blog",
	description: '프론트엔드 웹 개발자 강수정 블로그입니다.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<header>
					<nav className="flex justify-between p-10">
						<h1 className="text-2xl font-bold">
							<Link href="/">Kngsujng&apos;s Blog</Link>
						</h1>
						<div className="flex gap-4">
							<Link href="/">home</Link>
							<Link href="/about">about</Link>
							<Link href="/posts">posts</Link>
							<Link href="/contact">contact</Link>
						</div>
					</nav>
				</header>
				{children}
			</body>
		</html>
	);
}