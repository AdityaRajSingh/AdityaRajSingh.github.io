import { siteContent } from "@/content/siteContent";
const { about } = siteContent;
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import profilePhoto from '@/assets/profile-photo.jpg';
import { Helmet } from 'react-helmet-async';
const About = () => {
  const defaultDesc = siteContent.hero.body.slice(0, 160);
  const canonical = (typeof window !== "undefined" ? window.location.origin : "") + "/about";

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navigation />
      
      <Helmet>
        <title>Aditya Raj Singh — Software Developer at Google</title>
        <meta name="description" content={defaultDesc} />
        <meta property="og:description" content={defaultDesc} />
        <meta name="twitter:description" content={defaultDesc} />
        <link rel="canonical" href={canonical} />
      </Helmet>
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-layered pt-20">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            {/* Profile Photo */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden bg-gradient-subtle">
                <img 
                  src={profilePhoto} 
                  alt={siteContent.footer.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Hero Content */}
            <div className="animate-fade-in order-1 lg:order-2">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {about.heading}
              </h1>
              <h2 className="text-2xl md:text-3xl text-primary mb-8 font-medium">
                {about.subheading}
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8">
                <p>{about.intro1}</p>
                <p>{about.intro2}</p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                  Learning
                </div>
                <div className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                  Building
                </div>
                <div className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                  Growing
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden bg-gradient-journey">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">{about.principlesHeading}</h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed px-2">
              Some core values and principles that guide my work and life.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {about.principles.map((p, i) => (
                <div key={p.title}>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{String(i+1).padStart(2, '0')}</h3>
                  <h4 className="text-2xl font-bold text-foreground mb-4">{p.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden bg-gradient-soft">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none space-y-6">

              <p className="text-muted-foreground leading-relaxed">{about.narrative1}</p>
              <p className="text-muted-foreground leading-relaxed">{about.narrative2}</p>
              <p className="text-muted-foreground leading-relaxed">{about.narrative3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden bg-gradient-recommendations">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              {about.beyondHeading}
            </h2>
            <ul className="flex flex-wrap gap-2 mb-8 justify-center">
              {about.beyondBullets.map((b) => (
                <li key={b} className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">{b}</li>
              ))}
            </ul>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop&crop=faces" 
                  alt="Travel adventure"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">Travel & Adventure</h3>
                  <p className="text-sm text-white/90">Exploring new places, cultures, and experiences around the world.</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop&crop=faces" 
                  alt="Nature and hiking"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">Nature & Hiking</h3>
                  <p className="text-sm text-white/90">Finding peace and inspiration in the great outdoors.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;