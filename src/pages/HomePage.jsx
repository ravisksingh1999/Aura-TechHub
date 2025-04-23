import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedResources from '../components/home/FeaturedResources';
import CategoryShowcase from '../components/home/CategoryShowcase';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';
import { featuredResources, categories, testimonials } from '../data/mockData';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturedResources resources={featuredResources} />
      <CategoryShowcase categories={categories} />
      <HowItWorks />
      <Testimonials testimonials={testimonials} />
      <CallToAction />
    </>
  );
};

export default HomePage;
