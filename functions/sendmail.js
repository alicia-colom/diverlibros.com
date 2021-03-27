const nodemailer = require('nodemailer');

exports.handler = (event, context, callback) => {
	// const data = JSON.parse(event.body)

	// const transporter = nodemailer.createTransport({
	//     host:[YOUR SMTP SERVER],
	//     port:[YOUR SMTP SERVER PORT],
	//     // service: "SendGrid",
	//     auth:{
	//      user:[YOUR SMTP SERVER USERNAME],
	//      pass: [YOUR SMTP SERVER PASSWORD]
	// }
	// });

	// transporter.sendMail({
	//     from: [YOUR SMTP SERVER EMAIL ADDRESS],
	//     to: [RECIPIENT EMAIL ADDRESS],
	//     subject: `Sending with React, Nodemailer and Netlify`,
	//     html: `
	//         <h3>Email from ${data.fullName} ${data.email}<h3>
	//         <p>${data.message}<p>
	//         `
	//     }, (error, info) => {
	//         if (error) {
	//             callback(error);
	//         }
	//         else {
	callback(null, {
		statusCode: 200,
		body: JSON.stringify({ result: 'success' }),
	});
	//         }
	//     }
	// );
};
