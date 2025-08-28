import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/content/siteContent";
import type { BuildingItem } from "@/content/siteContent";
import { Code, Lightbulb, Github, ExternalLink } from "lucide-react";
import SparkleElement from './SparkleElement';

const ICONS: Record<NonNullable<BuildingItem["icon"]>, React.ComponentType<any>> = {
  code: Code,
  lightbulb: Lightbulb,
  github: Github
};

const COLOR_CLASSES: Record<NonNullable<BuildingItem["color"]>, string> = {
  "gradient-purple": "bg-gradient-purple",
  "gradient-teal": "bg-gradient-teal",
  "gradient-warm": "bg-gradient-warm"
};

const BuildingSection = () => {
  const { heading, subheading, items, cta } = siteContent.building;

  return (
    <section id="building" className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Innovation-focused background for building projects */}
      <div className="absolute inset-0 bg-gradient-building"></div>
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-gradient-to-br from-foreground via-transparent to-foreground"></div>
      
      {/* Animated sparkle elements */}
      <SparkleElement className="hidden sm:block top-[20%] left-[5%] text-accent" delay={0} />
      <SparkleElement className="hidden sm:block top-[75%] right-[8%] text-primary" delay={1} />
      <SparkleElement className="hidden sm:block top-[45%] right-[25%] text-accent/80" delay={2} />
      <SparkleElement className="hidden sm:block bottom-[20%] left-[18%] text-primary/80" delay={1.5} />
      
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
          {items.map((item) => {
            const Icon = item.icon && ICONS[item.icon] ? ICONS[item.icon] : Lightbulb;
            const colorClass = item.color && COLOR_CLASSES[item.color] ? COLOR_CLASSES[item.color] : "bg-card";
            return (
              <Card key={item.title} className="hover-lift bg-card border-border group overflow-hidden">
                <div className={`h-2 ${colorClass}`}></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-12 h-12 rounded-lg ${colorClass} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 icon-contrast" />
                    </div>
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {item.status}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.body}
                  </p>
                  {item.tech?.length ? (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tech.map((tech) => (
                        <span key={tech} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {item.status === "In Development"
                        ? "🚧 Active"
                        : item.status === "Planning"
                        ? "📋 Planned"
                        : "💡 Concept"}
                    </span>
                    {/* Action buttons for repo/demo links, else Coming Soon */}
                    {item.links?.repo ? (
                      <a
                        href={item.links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium rounded bg-transparent hover:bg-muted transition-colors"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Repo
                      </a>
                    ) : item.links?.demo ? (
                      <a
                        href={item.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium rounded bg-transparent hover:bg-muted transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    ) : item.status === "In Development" ? (
                      <Button variant="ghost" size="sm" disabled>
                        <Github className="w-4 h-4 mr-2" />
                        Coming Soon
                      </Button>
                    ) : null}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            {cta.label}
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              const el = document.querySelector(cta.href);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:bg-accent hover:text-accent-foreground"
          >
            {cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BuildingSection;