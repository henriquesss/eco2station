import React from "react";

import Head from "next/head";

import Analytics from "../components/Analytics";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LazyShow from "../components/LazyShow";

const Obrigado: React.FC = () => {
  return (
    <div>
      <Head>
        <title>obrigado.</title>
      </Head>
      <div className="max-w-7xl mx-auto">
        <div
          className={`relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-8`}
        >
          <Header />
        </div>
      </div>
      <LazyShow>
        <>
          <section className={`bg-background py-8`} id="how">
            <div className={`container max-w-5xl mx-auto m-8`}>
              <h1
                className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
              >
                <span key={1} className={"text-border"}>
                  Obrigado
                </span>
              </h1>
              <Divider />
              <div className="flex flex-wrap">
                <div className="p-6 text-center">
                  <p className="text-gray-600">
                    Seu contato foi enviado com sucesso e logo logo entraremos
                    em contato para dar início a sua jornada no novo mercado
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center justify-center">
              <img
                className="w-full lg:w-auto lg:h-40"
                src="/assets/images/solo.png"
                alt="little seed"
              />
            </div>
          </section>
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Footer />
        </>
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default Obrigado;
