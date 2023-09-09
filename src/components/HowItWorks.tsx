import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const HowItWorks = () => {
  const { product } = config;

  return (
    <section className={`bg-background py-8`} id="how">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {product.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <div className={`flex flex-wrap`}>
          <div className="p-6 text-center">
            <p className="text-gray-600">{product.description}</p>

            <div className="flex justify-between items-center flex-wrap mt-10">
              <div className="w-1/4">vá a um posto parceiro</div>
              <div className="w-1/4">utilize a bomba verde</div>
              <div className="w-1/4">
                após abastecer, sua compensação é feita automaticamente
              </div>
              <div className="w-1/4">receba o certificado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
