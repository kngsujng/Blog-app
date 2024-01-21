import FeaturedPosts from './components/FeaturedPosts';
import GitHubCommit from './components/GitHubCommit';
import PostCarousel from './components/PostCarousel';
import Profile from './components/Profile';

export default async function Home() {
	return (
		<>
			<Profile />
			<GitHubCommit />
			<FeaturedPosts />
			<PostCarousel />
		</>
	);
}
