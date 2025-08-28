import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Building, GraduationCap, Rocket } from "lucide-react";
import SparkleElement from './SparkleElement';
import { siteContent } from '@/content/siteContent';

const JourneySection = () => {
  // Map timeline data to milestone cards, preserving icons and colors
  const timelineIcons = [Building, Rocket, GraduationCap];
  const timelineColors = ["bg-gradient-teal", "bg-gradient-purple", "bg-gradient-warm"];
  const milestones = siteContent.journey.timeline.map((item, idx) => ({
    year: item.period,
    title: item.title,
    role: item.role,
    description: item.body,
    icon: timelineIcons[idx] || Building,
    color: timelineColors[idx] || "bg-gradient-teal"
  }));

  return (
    <section id="journey" className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Journey-style background system for alternating contrast */}
      <div className="absolute inset-0 bg-gradient-journey"></div>
      <div className="absolute inset-0 bg-gradient-journey-depth opacity-70"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/12 via-muted/40 to-accent/10"></div>
      <div className="absolute inset-0 bg-gradient-radial from-secondary/20 via-transparent to-transparent opacity-50"></div>
      
      {/* Enhanced texture overlay for contrast */}
      <div className="absolute inset-0 opacity-[0.03] bg-gradient-to-br from-foreground via-transparent to-foreground"></div>
      
      {/* Animated sparkle elements */}
      <SparkleElement className="hidden sm:block top-[10%] left-[8%] text-accent" delay={0} />
      <SparkleElement className="hidden sm:block top-[85%] right-[10%] text-primary" delay={1} />
      <SparkleElement className="hidden sm:block top-[30%] right-[15%] text-accent/80" delay={2} />
      <SparkleElement className="hidden sm:block bottom-[10%] left-[20%] text-primary/80" delay={1.5} />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            {siteContent.journey.heading}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            {siteContent.journey.subheading}
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical timeline behind icons (desktop) */}
          <div aria-hidden className="hidden sm:block absolute left-6 sm:left-8 top-16 sm:top-20 bottom-16 sm:bottom-20 w-0.5 bg-foreground/15 dark:bg-foreground/25 pointer-events-none"></div>
          {milestones.map((milestone, index) => (
            <div key={index} className="relative mb-8 md:mb-12 lg:mb-16 last:mb-0">
              {/* Desktop Timeline Layout */}
              <div className="hidden sm:flex items-center">
                {/* Timeline line */}
                {/* Timeline handled globally for smooth, continuous connection */}
                
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-teal flex items-center justify-center mr-4 sm:mr-8">
                  <milestone.icon className="w-6 h-6 sm:w-8 sm:h-8 icon-contrast" />
                </div>
                
                {/* Content */}
                <Card className="flex-1 hover-lift bg-card border-border">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
                          {milestone.title}
                        </h3>
                        <p className="text-primary font-medium">{milestone.role}</p>
                      </div>
                      <div className="text-sm text-muted-foreground mt-2 lg:mt-0">
                        {milestone.year}
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {milestone.description}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Mobile Card Layout */}
              <div className="sm:hidden">
                <Card className="hover-lift bg-card border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-teal flex items-center justify-center mr-4">
                        <milestone.icon className="w-6 h-6 icon-contrast" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground mb-1">
                          {milestone.title}
                        </h3>
                        <p className="text-primary font-medium text-sm">{milestone.role}</p>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mb-3">
                      {milestone.year}
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {milestone.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;