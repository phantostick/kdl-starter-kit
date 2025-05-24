'use client';

import Link from 'next/link';
import FrontendLayout from './frontend/layout';
import Hero from './frontend/components/home/Hero';
import Welcome from './frontend/components/home/Welcome';
import Services from './frontend/components/home/HomeServices';
import Expertise from './frontend/components/home/Expertise';
import OurDevelopmentProcess from './frontend/components/home/OurDevelopmentProcess';
import BusinessModel from './frontend/components/home/BusinessModel';
import LetDiscuss from './frontend/components/home/LetDiscuss';
import Portfolio from './frontend/components/home/Portfolio';



export default function Home() {
  return (
    <FrontendLayout>
      <Hero/>
      <Welcome/>
      <Services/>
      <Expertise/>
      <OurDevelopmentProcess/>
      <BusinessModel/>
 
      <Portfolio/>
      <LetDiscuss/>
    </FrontendLayout>
  );
}