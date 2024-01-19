import FeaturedPosts from './components/FeaturedPosts';
import PostCarousel from './components/PostCarousel';
import Profile from './components/Profile';

export default function Home() {
	return (
		<>
			<Profile />
			<FeaturedPosts />
			<PostCarousel />
		</>
	);
}
