import React from 'react';

import { Link } from 'react-scroll';

import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">{mainHero.title}</span>{' '}
          <span className={`block text-primary xl:inline`}>
            {mainHero.subtitle}
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {mainHero.description}
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div>
            <Link
              spy={true}
              active="active"
              smooth={true}
              duration={1000}
              key="how"
              to="how"
              className="text-primary hover:text-gray-900 cursor-pointer mr-5 font-bold text-lg border-green-800 border rounded p-2"
            >
              {mainHero.primaryAction.text}
            </Link>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <Link
              spy={true}
              active="active"
              smooth={true}
              duration={1000}
              key="footer"
              to="footer"
              className="text-gray-800 hover:text-gray-900 cursor-pointer font-bold text-lg"
            >
              {mainHero.secondaryAction.text}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainHero;
