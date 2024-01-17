import { ContactValue } from '@/app/components/EmailForm';
import nodemailer from 'nodemailer';

const to = process.env.NEXT_PUBLIC_EMAIL;
const pwd = process.env.NEXT_PUBLIC_PASSWORD;

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: to,
		pass: pwd,
	},
});

export const mailOptions = {
	from: '',
	to: to,
	subject: '',
	message: '',
};

export async function sendEmail({ email, subject, message }: ContactValue) {
	const mailData = {
		to,
		from: email,
		subject: `[BLOG-APP] ${subject}`,
		html: `
    <h1>${subject}</h1>
    <div>${message}</div>
    </br>
    <p>보낸사람 : ${email}</p>
    `,
	};
	const info = await transporter.sendMail(mailData);
	return info;
}
