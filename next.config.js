/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ protocol: 'https', hostname: 'velog.velcdn.com' },
			{ protocol: 'https', hostname: 'user-images.githubusercontent.com' },
		],
	},
};

module.exports = nextConfig;
