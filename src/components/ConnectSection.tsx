import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Twitter, Calendar } from "lucide-react";
import SparkleElement from './SparkleElement';
import { siteContent } from "@/content/siteContent";

const ICONS = {
  LinkedIn: Linkedin,
  Topmate: Calendar,
  Twitter: Twitter,
  Email: Mail
};

const ConnectSection = () => {
  const { heading, body, links } = siteContent.connect;

  return (
    <section id="connect" className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Warm, inviting background for connection */}
      <div className="absolute inset-0 bg-gradient-connect"></div>
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-gradient-to-br from-foreground via-transparent to-foreground"></div>
      
      {/* Animated sparkle elements */}
      <SparkleElement className="hidden sm:block top-[25%] left-[12%] text-accent" delay={0} />
      <SparkleElement className="hidden sm:block top-[70%] right-[15%] text-primary" delay={1} />
      <SparkleElement className="hidden sm:block top-[50%] right-[8%] text-accent/80" delay={2} />
      <SparkleElement className="hidden sm:block bottom-[25%] left-[25%] text-primary/80" delay={1.5} />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            {heading}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {body}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto">
          {links.map((link) => {
            const Icon = ICONS[link.label] || Mail;
            const isExternal = link.href.startsWith('http');
            return (
              <a
                key={link.href}
                href={link.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="block"
                tabIndex={0}
                aria-label={`Connect via ${link.label}`}
              >
                <Card className="hover-lift bg-card border-border group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-teal flex items-center justify-center">
                        <Icon className="w-6 h-6 icon-contrast" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {link.label}
                        </span>
                        <p className="text-sm text-muted-foreground">
                          {link.desc}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;