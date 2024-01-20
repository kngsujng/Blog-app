import { ContactValue } from '../components/EmailForm';

export async function sendContactEmail(emailForm: ContactValue) {
	const response = await fetch('/api/contact', {
		method: 'POST',
		body: JSON.stringify(emailForm),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || '서버 요청에 실패함');
	}

	return data;
}
