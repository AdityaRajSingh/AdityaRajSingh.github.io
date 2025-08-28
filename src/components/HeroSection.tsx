import React from 'react';
import { Button } from "@/components/ui/button";
import SparkleElement from './SparkleElement';
import { siteContent } from '@/content/siteContent';

const HeroSection = () => {
  const scrollToJourney = () => {
    document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced multi-layered background system */}
      <div className="absolute inset-0 bg-gradient-layered"></div>
      <div className="absolute inset-0 bg-gradient-depth opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background/50 to-accent/8"></div>
      <div className="absolute inset-0 bg-gradient-radial from-primary/15 via-transparent to-transparent opacity-40"></div>

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-gradient-to-br from-foreground via-transparent to-foreground"></div>

      {/* Animated sparkle elements - positioned to avoid text overlap */}
      <SparkleElement className="hidden sm:block top-[15%] left-[8%] text-accent" delay={0} />
      <SparkleElement className="hidden sm:block top-[12%] right-[10%] text-primary" delay={1} />
      <SparkleElement className="hidden sm:block top-[20%] right-[25%] text-accent/80" delay={2} />
      <SparkleElement className="hidden sm:block bottom-[15%] left-[12%] text-primary" delay={0.5} />
      <SparkleElement className="hidden sm:block bottom-[20%] right-[8%] text-accent" delay={1.5} />
      <SparkleElement className="hidden sm:block top-[75%] left-[20%] text-primary/80" delay={3} />
      <SparkleElement className="hidden sm:block top-[25%] left-[5%] text-accent/60" delay={2.5} />
      <SparkleElement className="hidden sm:block bottom-[12%] right-[15%] text-primary/60" delay={4} />
      <SparkleElement className="hidden sm:block top-[80%] right-[30%] text-accent/70" delay={3.5} />
      <SparkleElement className="hidden sm:block top-[18%] left-[35%] text-primary/50" delay={5} />

      {/* Mobile sparkles - fewer for performance, positioned at edges */}
      <SparkleElement className="block sm:hidden top-[15%] left-[10%] text-accent" delay={0} />
      <SparkleElement className="block sm:hidden bottom-[20%] right-[10%] text-primary" delay={1} />

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            {siteContent.hero.titlePrefix}{' '}
            <span className="text-primary">{siteContent.hero.name}</span>
            <span className="text-accent">{siteContent.hero.titleSuffix}</span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground mb-6 sm:mb-8 animate-slide-up">
            {/* Animated subtitle variants (fetched from siteContent) */}
            <div className="relative w-full">
              {/* invisible placeholder reserves the original subtitle height so spacing matches main branch */}
              <span className="invisible block">
                {siteContent.hero.subtitle}
              </span>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute left-0 right-0 text-center whitespace-normal transition-subtitle" style={{ ['--i' as any]: 0 }}>
                  A <span className="text-primary font-semibold">Software Developer</span>
                </div>
                <div className="absolute left-0 right-0 text-center whitespace-normal transition-subtitle" style={{ ['--i' as any]: 1 }}>
                  Entrepreneurial Mindset
                </div>
                <div className="absolute left-0 right-0 text-center whitespace-normal transition-subtitle" style={{ ['--i' as any]: 2 }}>
                  Driven by <span className="text-primary font-semibold">AI & Curiosity</span>
                </div>
              </div>
            </div>
          </h2>

          <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed animate-slide-up px-2">
              {siteContent.hero.body}
            </p>
          </div>

          <Button
            onClick={scrollToJourney}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium hover-lift animate-scale-in min-h-[48px] sm:min-h-[52px]"
          >
            {siteContent.hero.cta.label}
          </Button>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;