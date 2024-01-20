'use client';

import { useState } from 'react';
import Banner, { BannerData } from './Banner';

const LABEL_CLASSNAME = 'text-white flex flex-col';

export type ContactValue = {
	from: string;
	subject: string;
	message: string;
};

const initialValue = {
	from: '',
	subject: '',
	message: '',
};

export default function EmailForm() {
	const [contactValue, setContactValue] = useState<ContactValue>(initialValue);
	const [banner, setBanner] = useState<BannerData | null>(null);
	const onChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { value, name } = e.target;
		setContactValue((prev) => ({ ...prev, [name]: value }));
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		sendContactEmail(contactValue);
		setBanner({
			message: '성공적으로 전송되었습니다! ✌️ ',
			state: 'success',
		});
		setTimeout(() => setBanner(null), 3000);
		setContactValue(initialValue);
	};

	return (
		<section className="text-center mx-auto my-28 w-2/5">
			{banner && <Banner banner={banner} />}
			<h2 className="text-2xl font-bold mt-10 mb-4 ml-4">
				Or Send me an email
			</h2>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col gap-4 text-left justify-center p-8 bg-slate-600 rounded-3xl"
			>
				<label className={LABEL_CLASSNAME}>
					Your Email
					<input
						required
						autoFocus
						type="text"
						className="mt-2 text-black"
						name="from"
						value={contactValue.from}
						onChange={onChange}
					/>
				</label>
				<label className={LABEL_CLASSNAME}>
					Subject
					<input
						required
						type="text"
						className="mt-2 text-black"
						name="subject"
						value={contactValue.subject}
						onChange={onChange}
					/>
				</label>
				<label className={LABEL_CLASSNAME}>
					Message
					<textarea
						required
						rows={10}
						className="h-56 mt-2 resize-none text-black"
						name="message"
						value={contactValue.message}
						onChange={onChange}
					/>
				</label>
				<button className="bg-yellow-200">Submit</button>
			</form>
		</section>
	);
}

export async function sendContactEmail(emailForm: ContactValue) {
	// Nextjs app 폴더 내 api로 post 요청
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
