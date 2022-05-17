import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
import util from 'util';
// import names from './adjusters/names.js';
// import emails from './adjusters/emails.js';

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const names = ['Ramiro', 'Cody', 'Jordan', 'David', 'Chris'];
const emails = [
  'rtorres@frontiergp.com',
  'cesposito@frontiergp.com',
  'jvera@frontiergp.com',
  'drenteria@frontiergp.com',
  'cescobedo@frontiergp.com',
];

names.forEach((name, i, names) => {
  const email = {
    to: `${emails[i]}`,
    bcc: ['drenteria@frontiergp.com', 'rtorres@frontiergp.com'],
    from: 'jvera@frontiergp.com',
    replyTo: 'jvera@frontiergp.com',
    subject: 'Marketing Test 🌊🌊🌊🌊🌊',
    name: `${name}`,
    html: `<p>Dear ${name},</p><p>My name is Jordan Vera, Project Manager at Frontier Services Group. I see we have had the pleasure of working with you in the past and I am reaching out to you to extend an offer for level 1 and/or 2 Xactimate training as well as large loss training Frontier will be hosting at our office. The training will be held in the next month or so depending on attendees. We would love to have you in attendance.</p><p>If you have any questions please call or email me.</p><p>Looking forward to hearing from you!</p>`,
  };
  console.log(`Name: ${name}`);
  console.log(`Email: ${emails[i]}`);
  console.log(`-----------`);
  // console.log(email.html);
  // sgMail
  //   .send(email)
  //   .then(() => {
  //     console.log('emails sent successfully!');
  //   })
  //   .catch((error) => {
  //     console.log(util.inspect(error, false, null, true));
  //   });
});
