'use client';

const LABEL_CLASSNAME = 'text-white flex flex-col';

export default function EmailForm() {
	return (
		<section className="text-center mx-auto my-28 w-2/5">
			<h1 className="text-2xl font-bold mt-10 mb-4 ml-4">
				Or Send me an email
			</h1>
			<form className="flex flex-col gap-4 text-left justify-center p-8 bg-slate-600 rounded-3xl">
				<label className={LABEL_CLASSNAME}>
					Your Email
					<input
						type="text"
						className="mt-2"
					/>
				</label>
				<label className={LABEL_CLASSNAME}>
					Subject
					<input
						type="text"
						className="mt-2"
					/>
				</label>
				<label className={LABEL_CLASSNAME}>
					Message
					<textarea className="h-56 mt-2 resize-none" />
				</label>
				<button
					onClick={() => {}}
					className="bg-yellow-200"
				>
					Submit
				</button>
			</form>
		</section>
	);
}
