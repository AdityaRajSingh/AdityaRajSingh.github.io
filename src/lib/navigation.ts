import { NavigateFunction } from 'react-router-dom';

export const createNavigationHandler = (navigate: NavigateFunction) => {
  return {
    // Navigate to home page and scroll to hero section
    goToHome: () => {
      navigate('/');
      // Small delay to ensure page loads before scrolling
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    },

    // Navigate to about page and scroll to top
    goToAbout: () => {
      navigate('/about');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    },

    // Navigate to blog page and scroll to top
    goToBlog: () => {
      navigate('/blog');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    },

    // Navigate to home page and scroll to specific section
    goToSection: (sectionId: string) => {
      const currentPath = window.location.pathname;
      
      const scrollToElement = (element: HTMLElement) => {
        // Dynamically calculate navbar height
        const navbar = document.querySelector('nav');
        const navbarHeight = navbar ? navbar.offsetHeight : 80;
        
        // Calculate precise scroll position
        const elementTop = element.offsetTop - navbarHeight;
        window.scrollTo({ top: Math.max(0, elementTop), behavior: 'smooth' });
      };
      
      if (currentPath === '/') {
        // Already on home page, just scroll to section
        const element = document.getElementById(sectionId);
        if (element) {
          scrollToElement(element);
        }
      } else {
        // Navigate to home page first, then scroll to section
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            scrollToElement(element);
          }
        }, 100);
      }
    }
  };
};