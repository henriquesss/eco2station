import React from "react";

import Link from "next/link";

import config from "../config/index.json";

const WhereToFindUs = () => {
  const { features } = config;
  const { title, subtitle, description } = features;
  return (
    <div className={`py-12 bg-background`} id="where">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5">
        <div className="lg:text-center">
          <h2
            className={`text-base text-primary font-semibold tracking-wide uppercase`}
          >
            {title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {description}
          </p>
        </div>
      </div>

      <div
        style={{
          backgroundImage:
            "url(https://eco2station.vercel.app/assets/images/bg-joinus.png)",
          backgroundPosition: "center",
        }}
        className="w-full h-60 bg-center bg-no-repeat flex items-center justify-center"
      >
        <div className="border-2 p-3 rounded bg-white relative z-10">
          <Link href="/postos-parceiros">Faça parte</Link>
        </div>
      </div>
    </div>
  );
};

export default WhereToFindUs;
