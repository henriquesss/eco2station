import React from 'react';

import Head from 'next/head';

import Analytics from '../components/Analytics';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HowItWorks from '../components/HowItWorks';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import WhereToFindUs from '../components/WhereToFindUs';

const App = () => {
  return (
    <>
      <Head>
        <title>green.</title>
      </Head>
      <div className={`bg-background grid gap-y-16 overflow-hidden`}>
        <div className={`relative bg-background`}>
          <div className="max-w-7xl mx-auto">
            <div
              className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
            >
              <Header />
              <MainHero />
            </div>
          </div>
          <MainHeroImage />
        </div>
        <LazyShow>
          <>
            <HowItWorks />
          </>
        </LazyShow>
        <LazyShow>
          <>
            <WhereToFindUs />
          </>
        </LazyShow>
        <LazyShow>
          <>
            <ContactForm />
            <Footer />
          </>
        </LazyShow>
        <Analytics />
      </div>
    </>
  );
};

export default App;
