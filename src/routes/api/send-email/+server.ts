import { STRAPI_API } from '$env/static/private';
import { RequestHandler } from '@sveltejs/kit';
import nodemailer, { SendMailOptions, SentMessageInfo } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

async function sendMailThroughNodemailer(
	messageOption: nodemailer.SendMailOptions
): Promise<SMTPTransport.SentMessageInfo> {
	return new Promise((resolve, reject) => {
		const transport = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 465,
			secure: true,
			auth: {
				user: 'team@homebuilder.app',
				pass: 'fzkhymdsntgxoqfd'
			},
			tls: {
				rejectUnauthorized: false
			}
		});

		transport.sendMail(messageOption, function (err, info) {
			if (err) {
				return reject(err);
			} else {
				return resolve(info);
			}
		});
	});
}

// async function sendMailThroughStrapi() {
// const res = await fetch('https://api.ulfbuilt.com/api/email/', {
// 	method: 'POST',
// 	headers: {
// 		'Content-Type': 'application/json',
// 		Authorization: 'bearer ' + STRAPI_API
// 	},
// 	body: JSON.stringify({
// 		// "to": emailTo ? emailTo : 'dev@netdevs.com',
// 		to: 'contact@ulfbuilt.com',
// 		subject: body.emailSubject ? emailSubject : 'UlfBuilt Contact Form',
// 		html:
// 			'<h1>' + name + '</h1><p>' + email + '</p><p>' + formPhone + '</p><p>' + message + '</p>'
// 	})
// });
// }

export const POST: RequestHandler = async function ({ request }) {
	const body = await request.json();
	if (!body)
		return new Response('please include body', {
			status: 403
		});
	const { emailSubject, name, email, formPhone, message } = body;

	return await sendMailThroughNodemailer({
		from: 'Ulf Built<contact@ulfbuilt.com>',
		to: 'ulfbuilt@gmail.com',
		subject: body.emailSubject ? emailSubject : 'UlfBuilt Contact Form',
		html: '<h1>' + name + '</h1><p>' + email + '</p><p>' + formPhone + '</p><p>' + message + '</p>'
	})
		.then((data) => {
			return new Response(JSON.stringify(data), { status: 200 });
		})
		.catch(() => new Response('failed to send message', { status: 503 }));
};
