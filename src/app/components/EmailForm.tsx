'use client';

import { useState } from 'react';
import Banner, { BannerData } from './Banner';
import { sendContactEmail } from '../api/contact';

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
		sendContactEmail(contactValue) //
			.then(() => {
				setBanner({
					message: '메일이 성공적으로 전송되었습니다! ✌️ ',
					state: 'success',
				});
				setContactValue(initialValue);
			}) //
			.catch(() => {
				setBanner({
					message: '메일 전송에 실패했습니다. 다시 시도해주세요 ! ',
					state: 'error',
				});
			}) //
			.finally(() => {
				setTimeout(() => {
					setBanner(null);
				}, 3000);
				setContactValue(initialValue);
			});
	};

	return (
		<section className="w-full max-w-md text-center mx-auto my-28">
			{banner && <Banner banner={banner} />}
			<h2 className="text-2xl font-bold mb-4">Or Send me an email</h2>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col gap-4 text-left justify-center p-8 bg-slate-600 rounded-3xl text-white"
			>
				<label className="flex flex-col">
					Your Email
					<input
						required
						autoFocus
						type="text"
						className="mt-2 pl-2 text-black"
						name="from"
						value={contactValue.from}
						onChange={onChange}
					/>
				</label>
				<label className="flex flex-col">
					Subject
					<input
						required
						type="text"
						className="mt-2 pl-2 text-black"
						name="subject"
						value={contactValue.subject}
						onChange={onChange}
					/>
				</label>
				<label className="flex flex-col">
					Message
					<textarea
						required
						rows={10}
						className="mt-2 pl-2 resize-none text-black"
						name="message"
						value={contactValue.message}
						onChange={onChange}
					/>
				</label>
				<button className="bg-yellow-200 text-black font-bold hover:bg-yellow-400">
					Submit
				</button>
			</form>
		</section>
	);
}
