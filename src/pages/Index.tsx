import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import BuildingSection from '@/components/BuildingSection';
import JourneySection from '@/components/JourneySection';
import RecommendationsSection from '@/components/RecommendationsSection';
import ConnectSection from '@/components/ConnectSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <JourneySection />
      <BuildingSection />
      <RecommendationsSection />
      <ConnectSection />
      <Footer />
    </div>
  );
};

export default Index;