import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const HowItWorks = () => {
  const { howItWorks } = config;

  return (
    <section className={`bg-background py-8`} id="how">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {howItWorks.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <div className="flex flex-wrap">
          <div className="p-6 text-center">
            <p className="text-gray-600">{howItWorks.description}</p>

            <div className="flex flex-wrap justify-between items-center mt-10">
              <div className="w-1/4 p-1 h-20">
                <h1 className="font-bold">{howItWorks.step1.title}</h1>
                <p>{howItWorks.step1.description}</p>
              </div>
              <div className="w-1/4 p-1 h-20">
                <h1 className="font-bold">{howItWorks.step2.title}</h1>
                <p>{howItWorks.step2.description}</p>
              </div>
              <div className="w-1/4 p-1 h-20">
                <h1 className="font-bold">{howItWorks.step3.title}</h1>
                <p>{howItWorks.step3.description}</p>
              </div>
              <div className="w-1/4 p-1 h-20">
                <h1 className="font-bold">{howItWorks.step4.title}</h1>
                <p>{howItWorks.step4.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
