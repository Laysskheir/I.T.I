import AboutPage from '@/components/pages/AboutPage';
import { unstable_setRequestLocale } from 'next-intl/server';
import React from 'react';

const About = async ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);

  return (
    <div>
      <AboutPage/>
    </div>
  );
}

export default About;
