import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from '@/components/ThemeToggle';
import { createNavigationHandler } from '@/lib/navigation';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const nav = createNavigationHandler(navigate);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Show background after scrolling 50px on all pages
      setShowBackground(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    nav.goToHome();
    setIsMenuOpen(false);
  };

  const handleAboutClick = () => {
    nav.goToAbout();
    setIsMenuOpen(false);
  };

  const handleBlogClick = () => {
    nav.goToBlog();
    setIsMenuOpen(false);
  };

  const handleSectionClick = (sectionId: string) => {
    nav.goToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" aria-label="Main navigation">
      {/* Background layer that fades in/out */}
      <div className={`absolute inset-0 transition-opacity duration-500 ease-out ${
        showBackground 
          ? 'opacity-100' 
          : 'opacity-0'
      } bg-gradient-to-r from-background/95 via-background/90 to-background/95 backdrop-blur-md border-b border-border/50 shadow-sm`}></div>
      
      {/* Content layer - always visible */}
      <div className="relative container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={handleLogoClick}
            className="text-lg sm:text-xl font-semibold text-foreground hover:text-primary transition-colors min-h-[44px] min-w-[44px] flex items-center"
            aria-label="Go to home"
          >
            Aditya Raj Singh
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button 
              onClick={handleAboutClick}
              className="text-muted-foreground hover:text-foreground transition-colors min-h-[44px] px-2"
            >
              About
            </button>
            <button 
              onClick={handleBlogClick}
              className="text-muted-foreground hover:text-foreground transition-colors min-h-[44px] px-2"
            >
              Blogs
            </button>
            <button 
              onClick={() => handleSectionClick('journey')}
              className="text-muted-foreground hover:text-foreground transition-colors min-h-[44px] px-2"
            >
              Journey
            </button>
            <button 
              onClick={() => handleSectionClick('building')}
              className="text-muted-foreground hover:text-foreground transition-colors min-h-[44px] px-2"
            >
              Work
            </button>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <ThemeToggle />
            <Button 
              onClick={() => handleSectionClick('connect')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 lg:px-6"
              size="sm"
            >
              Let's Connect
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div id="mobile-menu" role="menu" className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-background/98 to-background/95 backdrop-blur-md border-b border-border/50 shadow-lg">
            <div className="container mx-auto px-4 py-4 space-y-1">
              <button 
                onClick={handleAboutClick}
                className="block w-full text-left py-3 px-4 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors rounded-md min-h-[44px]"
              >
                About
              </button>
              <button 
                onClick={handleBlogClick}
                className="block w-full text-left py-3 px-4 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors rounded-md min-h-[44px]"
              >
                Blogs
              </button>
              <button 
                onClick={() => handleSectionClick('journey')}
                className="block w-full text-left py-3 px-4 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors rounded-md min-h-[44px]"
              >
                Journey
              </button>
              <button 
                onClick={() => handleSectionClick('building')}
                className="block w-full text-left py-3 px-4 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors rounded-md min-h-[44px]"
              >
                Work
              </button>
              <div className="pt-2">
                <Button 
                  onClick={() => handleSectionClick('connect')}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground min-h-[44px]"
                >
                  Let's Connect
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;