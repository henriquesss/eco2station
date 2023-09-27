import React, { useState } from 'react';

import { toast, ToastContainer } from 'react-toastify';

import { formatPhoneNumber } from '../utils/utils';
import Divider from './Divider';
import LazyShow from './LazyShow';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: any) => {
    try {
      event.preventDefault();

      const data = { name, email, phone, message };

      const requestData = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };

      fetch('/api/contact', requestData).then((res) => {
        if (res.status === 200) {
          toast.success('Contato enviado com sucesso!');
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
        } else {
          toast('Erro ao enviar mensagem');
        }
      });
    } catch (error) {
      console.log('2', error);
      setLoading(false);
    }
  };

  return (
    <div>
      <LazyShow>
        <>
          <ToastContainer autoClose={3000} />
          <section className={`bg-background py-8`} id="how">
            <div className={`container max-w-5xl mx-auto m-8`}>
              <h1
                className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
              >
                <span key={1} className={'text-border'}>
                  Contato
                </span>
              </h1>
              <Divider />
              <div className="flex flex-wrap justify-center">
                <div className="p-6 text-center">
                  <p className="text-gray-600 text-center">
                    Dúvidas, críticas e sugestões são sempre bem vindas
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center justify-center">
              <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full px-3">
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Nome completo"
                      onChange={(event) => setName(event.target.value)}
                    />
                  </div>

                  <div className="w-full px-3 mb-2">
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      type="text"
                      placeholder="Email"
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>

                  <div className="w-full px-3 mb-2">
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      type="text"
                      placeholder="Telefone (código de área + número)"
                      maxLength={16}
                      onChange={(event) => setPhone(event.target.value)}
                      onKeyUp={(event) => formatPhoneNumber(event)}
                    />
                  </div>

                  <div className="w-full px-3 mb-2">
                    <textarea
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      placeholder="Mensagem"
                      onChange={(event) => setMessage(event.target.value)}
                    />
                  </div>
                </div>

                <div className="text-center mt-10">
                  {loading ? (
                    <button
                      disabled
                      type="button"
                      className="w-full font-bold text-white bg-gradient-to-br from-green-400 to-green-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 cursor-not-allowed"
                    >
                      Carregando...
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="w-full font-bold text-white bg-gradient-to-br from-green-400 to-green-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      onClick={(event) => handleSubmit(event)}
                    >
                      Enviar mensagem
                    </button>
                  )}
                </div>
              </form>
            </div>
          </section>
        </>
      </LazyShow>
    </div>
  );
};

export default ContactForm;
