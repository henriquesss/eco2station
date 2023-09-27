import type { NextApiRequest, NextApiResponse } from 'next';

require('dotenv').config();
const nodemailer = require('nodemailer');

export default function contact(req: NextApiRequest, res: NextApiResponse) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'henriques.pessoal@gmail.com',
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: 'henriques.pessoal@gmail.com',
    to: 'henriques.pessoal@gmail.com',
    subject: `Contato pelo site | ${req.body.name}`,
    text: `${req.body.message} | Enviado por: ${req.body.email}`,
    html: `<div>
      <strong>Contato feito pelo formulário da landing page</strong><br/><br/>
      <p><strong>Nome:</strong> ${req.body.name}</p>
      <p><strong>Email:</strong> ${req.body.email}</p>
      <p><strong>Telefone:</strong> ${req.body.phone}</p>
      <p><strong>Mensagem:</strong> ${req.body.message}</p>
        </div>
      `,
  };

  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.status(200).end();
}
