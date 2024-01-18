import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });
const MENU_CLASSNAME = 'hover:text-blue-400 px-2 rounded-lg';

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
		<html
			lang="en"
			className="h-full"
		>
			<body className={`${inter.className} h-full`}>
				<div className="min-h-full">
					<header>
						<nav className="flex justify-between m-12">
							<h1 className="text-2xl font-bold">
								<Link href="/">Kngsujng&apos;s Blog</Link>
							</h1>
							<div className="flex gap-4">
								<Link
									href="/"
									className={MENU_CLASSNAME}
								>
									home
								</Link>
								<Link
									href="/about"
									className={MENU_CLASSNAME}
								>
									about
								</Link>
								<Link
									href="/posts"
									className={MENU_CLASSNAME}
								>
									posts
								</Link>
								<Link
									href="/contact"
									className={MENU_CLASSNAME}
								>
									contact
								</Link>
							</div>
						</nav>
					</header>
					<main className="m-12">{children}</main>
				</div>
				<footer className="text-center bg-blue-950 text-white">
					All Right Reserved @kngsujng
				</footer>
			</body>
		</html>
	);
}
