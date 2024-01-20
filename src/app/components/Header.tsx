import Link from 'next/link';

const MENU_CLASSNAME = 'hover:text-blue-400 px-2 rounded-lg';

export default function Header() {
	return (
		<header className="flex justify-between p-6 py-10">
			<Link
				href="/"
				className="text-3xl font-bold"
			>
				<h1>Kngsujng</h1>
			</Link>
			<nav className="flex gap-4">
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
			</nav>
		</header>
	);
}
