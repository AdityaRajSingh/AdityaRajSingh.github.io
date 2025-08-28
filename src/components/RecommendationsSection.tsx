import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import SparkleElement from './SparkleElement';
import { siteContent } from "@/content/siteContent";

const RecommendationsSection = () => {
  const { heading, subheading, quotes } = siteContent.recommendations;

  return (
    <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Testimonial-focused background for trust and warmth */}
      <div className="absolute inset-0 bg-gradient-recommendations"></div>
      
      {/* Enhanced texture overlay for contrast */}
      <div className="absolute inset-0 opacity-[0.03] bg-gradient-to-br from-foreground via-transparent to-foreground"></div>
      
      {/* Animated sparkle elements */}
      <SparkleElement className="hidden sm:block top-[15%] left-[10%] text-accent" delay={0} />
      <SparkleElement className="hidden sm:block top-[80%] right-[12%] text-primary" delay={1} />
      <SparkleElement className="hidden sm:block top-[40%] right-[20%] text-accent/80" delay={2} />
      <SparkleElement className="hidden sm:block bottom-[15%] left-[15%] text-primary/80" delay={1.5} />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {heading}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-10">
          {quotes.map((q) => (
            <Card key={`${q.author}-${q.role}`} className="hover-lift bg-card border-border">
              <CardContent className="p-5 md:p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-teal flex items-center justify-center mb-4">
                  <Quote className="w-6 h-6 icon-contrast" />
                </div>
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{q.quote}"
                </blockquote>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{q.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {q.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;