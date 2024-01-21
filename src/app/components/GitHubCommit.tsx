'use client';

import GitHubCalendar from 'react-github-calendar';

export default function GitHubCommit() {
	return (
		<GitHubCalendar
			username="kngsujng"
			labels={{
				totalCount: 'Learn how we count contributions',
			}}
			showWeekdayLabels
			blockSize={13}
			style={{
				margin: '0 auto',
			}}
		/>
	);
}
