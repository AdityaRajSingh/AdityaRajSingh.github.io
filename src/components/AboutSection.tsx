import { siteContent } from "@/content/siteContent";
import React from 'react';
import { Card } from "@/components/ui/card";
import profilePhoto from '@/assets/profile-photo.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <Card className="p-2 hover-lift bg-card border-border">
              <div className="w-80 h-80 rounded-lg overflow-hidden">
                <img 
                  src={profilePhoto} 
                  alt="Aditya Raj Singh"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>
          
          {/* About Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              {siteContent.about.heading}
            </h2>
            <h3 className="text-xl text-muted-foreground mb-4">
              {siteContent.about.subheading}
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8">
              <p>{siteContent.about.intro1}</p>
            </div>

            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-foreground mb-4">
                {siteContent.about.principlesHeading}
              </h4>
              <ul className="space-y-4">
                {siteContent.about.principles.map((item) => (
                  <li key={item.title}>
                    <span className="font-bold text-primary">{item.title}</span>
                    <span className="ml-2 text-muted-foreground">{item.body}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {siteContent.about.narrative1}
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-foreground mb-2">
                {siteContent.about.beyondHeading}
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {siteContent.about.beyondBullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              {siteContent.about.tags.map((tag, index) => (
                <div key={tag} className={`px-4 py-2 rounded-full text-sm font-medium ${
                  index % 2 === 0 ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'
                }`}>
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;