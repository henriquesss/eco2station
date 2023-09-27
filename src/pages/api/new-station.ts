import type { NextApiRequest, NextApiResponse } from "next";

require("dotenv").config();
const nodemailer = require("nodemailer");

export default function newStation(req: NextApiRequest, res: NextApiResponse) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "henriques.pessoal@gmail.com",
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: "henriques.pessoal@gmail.com",
    to: "henriques.pessoal@gmail.com",
    subject: `Solicitação para posto parceiro pelo site | ${req.body.name}`,
    text: `${req.body.message} | Enviado por: ${req.body.email}`,
    html: `<div>
      <strong>Contato feito pelo formulário de cadastro em postos parceiro</strong><br/><br/>
      <p><strong>Nome:</strong> ${req.body.name}</p>
      <p><strong>Bandeira/rede:</strong> ${req.body.flag}</p>
      <p><strong>Estado:</strong> ${req.body.state}</p>
      <p><strong>Cidade:</strong> ${req.body.city}</p>
      <p><strong>Média de gasolina (em litros):</strong> ${req.body.averageGas}</p>
      <p><strong>Média de alcool (em litros) litro:</strong> ${req.body.averageAlcohol}</p>
      <p><strong>Média de diesel (em litros):</strong> ${req.body.averageDiesel}</p>
        </div>
      `,
  };

  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.status(200).end();
}
