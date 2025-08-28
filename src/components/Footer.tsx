import React from 'react';
import { Heart } from "lucide-react";
import { siteContent } from "@/content/siteContent";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-t from-muted/30 to-background border-t border-border/50 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="space-y-6 sm:space-y-8 lg:space-y-0">
          {/* All sections - Responsive layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Brand */}
            <div className="text-center sm:text-left lg:text-left col-span-1 sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">
                {siteContent.footer.name}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                {siteContent.footer.tagline}
              </p>
            </div>
            {/* Navigation */}
            <div>
              <h4 className="font-semibold text-foreground mb-3 sm:mb-4">Navigate</h4>
              <div className="space-y-1 sm:space-y-2">
                {siteContent.footer.navigation.map((item) => {
                  if (item.href.startsWith("#")) {
                    return (
                      <button
                        key={item.label}
                        onClick={() => scrollToSection(item.href.slice(1))}
                        className="block text-muted-foreground hover:text-foreground transition-colors text-left py-1 text-sm sm:text-base min-h-[44px] sm:min-h-0 flex items-center sm:block"
                      >
                        {item.label}
                      </button>
                    );
                  }
                  if (item.href.startsWith("/")) {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block text-muted-foreground hover:text-foreground transition-colors py-1 text-sm sm:text-base min-h-[44px] sm:min-h-0 flex items-center sm:block"
                      >
                        {item.label}
                      </a>
                    );
                  }
                  // External links (if any)
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-muted-foreground hover:text-foreground transition-colors py-1 text-sm sm:text-base min-h-[44px] sm:min-h-0 flex items-center sm:block"
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold text-foreground mb-3 sm:mb-4">Connect</h4>
              <div className="space-y-1 sm:space-y-2">
                {siteContent.footer.socials.map((link) => {
                  const isExternal = link.href.startsWith('http');
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      className="block text-muted-foreground hover:text-foreground transition-colors py-1 text-sm sm:text-base min-h-[44px] sm:min-h-0 flex items-center sm:block"
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">
            {siteContent.footer.copyright}
          </p>
          
          <div className="flex items-center space-x-1 text-muted-foreground text-xs sm:text-sm">
            <span>{siteContent.footer.builtWith.textBefore}</span>
            {siteContent.footer.builtWith.icon === "heart" && (
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" aria-hidden="true" />
            )}
            <span>{siteContent.footer.builtWith.textAfter}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;