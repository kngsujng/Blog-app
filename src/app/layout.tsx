import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

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
		<html
			lang="en"
			className={`${inter.className}`}
		>
			<body className="flex flex-col w-full max-w-screen-2xl mx-auto">
				<Header />
				<main className="grow m-6">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
