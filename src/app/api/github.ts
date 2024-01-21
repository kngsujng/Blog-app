export async function getGitHubProfile(username: string, accessToken: string) {
	const response = await fetch(`https://api.github.com/users/${username}`, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	});

	if (!response.ok) {
		throw new Error('Failed to fetch GitHub profile');
	}

	const data = await response.json();
	return data;
}
