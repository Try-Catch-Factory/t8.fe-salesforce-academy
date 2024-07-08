/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sQi3rgfyZLU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

'use client'
import React from 'react';
import Header from '@/components/Header/Header';
import HomeSection from '@/components/Sections/HomeSection';
import CTASection from '@/components/Sections/CTASection';
import CTASectionTwo from '@/components/Sections/CTASectionTwo';
import NativeTeachersSection from '@/components/Sections/NativeTeachersSection';
import TotalImmersionSection from '@/components/Sections/TotalImmersionSection';
import Footer from '@/components/Sections/Footer';
import '@/app/globals.css';
import { UserProvider } from '@/authentication/hooks/UserProvider';

const Home: React.FC = () => {
  return (
    <UserProvider>
      <div>
        <div className="background-gradient-header">
          <Header />
          <HomeSection />
        </div>
        <CTASection />
        <div className="background-gradient">
          <NativeTeachersSection />
          <TotalImmersionSection />
        </div>
        <CTASectionTwo />
        <Footer />
      </div>
    </UserProvider>
  );
};

export default Home;
