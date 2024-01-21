import dynamic from 'next/dynamic';
import FeaturedPosts from './components/FeaturedPosts';
import PostCarousel from './components/PostCarousel';
import Profile from './components/Profile';

const DynamicGitHubCommit = dynamic(() => import('./components/GitHubCommit'), {
	ssr: false,
});

export default async function Home() {
	return (
		<>
			<Profile />
			<DynamicGitHubCommit />
			<FeaturedPosts />
			<PostCarousel />
		</>
	);
}
