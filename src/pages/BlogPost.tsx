import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, User, Clock, ArrowUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ShareFooter from '@/components/ShareFooter';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatDate, getBlogIcon } from '@/lib/blog';
import { getBlogHeroImage } from '@/lib/imageUtils';
import { useBlogPost } from '@/hooks/useBlog';
const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { post, content, notFound } = useBlogPost(slug);
  const [readingProgress, setReadingProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Calculate reading time (average 200 words per minute)
  const calculateReadingTime = (text: string) => {
    const wordsPerMinute = 200;
    const words = text.replace(/<[^>]*>/g, '').split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };
  
  // Handle scroll for reading progress and scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setReadingProgress(Math.min(progress, 100));
      setShowScrollTop(scrollTop > 400);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  if (notFound) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Post not found</h1>
        </div>
      </div>
    );
  }

  const currentUrl = window.location.href;
  const pageTitle = `${post.title} – Notes by Aditya Raj Singh`;
  const canonical = `${window.location.origin}/blog/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    author: { "@type": "Person", name: "Aditya Raj Singh" },
    description: post.excerpt,
    url: canonical
  };

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-muted/20 z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>
      
      <Navigation />
      
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      
      <main className="pt-20 bg-gradient-journey">
        <article className="container mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-12 max-w-4xl">
          {/* Hero Image */}
          <div className="aspect-[16/9] sm:aspect-[3/1] rounded-xl overflow-hidden mb-8 shadow-lg relative group">
            {getBlogHeroImage(post.heroImage) && (
              <img 
                src={getBlogHeroImage(post.heroImage)!} 
                alt={post.title}
                loading="lazy"
                className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
                onError={(e) => (e.target as HTMLElement).style.display = 'none'}
                onLoad={(e) => {
                  const fallback = (e.target as HTMLElement).parentElement?.querySelector('.fallback-bg');
                  if (fallback) (fallback as HTMLElement).style.display = 'none';
                }}
              />
            )}
            <div className="fallback-bg w-full h-full bg-gradient-to-br from-primary/20 via-accent/30 to-secondary/20 flex items-center justify-center absolute inset-0">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                  <span className="text-3xl">{getBlogIcon(post.title)}</span>
                </div>
                <h2 className="text-2xl font-semibold text-foreground/80 max-w-md px-4">{post.title}</h2>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-[1.1] tracking-tight">
              {post.title}
            </h1>
            
            {/* Enhanced Excerpt */}
            <div className="mb-10">
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-full" />
                <blockquote className="text-xl sm:text-2xl leading-relaxed text-foreground/90 font-medium pl-8 italic border-0">
                  {post.excerpt}
                </blockquote>
              </div>
            </div>
            
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 pb-8 border-b border-border/50">
              <div className="flex items-center gap-2 text-sm">
                <User className="w-4 h-4" />
                <span className="font-medium">Aditya Raj Singh</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4" />
                <span>{calculateReadingTime(content)} min read</span>
              </div>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-3 mb-8">
                {post.tags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </header>

          {/* Content */}
          <div className="blog-content">
            <div 
              className="prose prose-lg prose-slate dark:prose-invert max-w-none
                prose-headings:text-foreground prose-headings:font-semibold prose-headings:tracking-tight
                prose-h1:text-4xl prose-h1:leading-tight prose-h1:mb-8 prose-h1:mt-12
                prose-h2:text-3xl prose-h2:leading-snug prose-h2:mb-6 prose-h2:mt-12 prose-h2:border-b prose-h2:border-border/30 prose-h2:pb-3
                prose-h3:text-2xl prose-h3:leading-snug prose-h3:mb-4 prose-h3:mt-10
                prose-p:text-lg prose-p:leading-[1.8] prose-p:text-foreground/90 prose-p:mb-6
                prose-strong:text-foreground prose-strong:font-semibold
                prose-em:text-foreground/80
                prose-code:text-foreground prose-code:bg-muted/80 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:text-base prose-code:font-medium
                prose-pre:bg-muted/50 prose-pre:text-foreground prose-pre:border prose-pre:border-border/50 prose-pre:rounded-lg prose-pre:p-6
                prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-muted/30 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:italic prose-blockquote:text-foreground/90
                prose-ul:space-y-2 prose-ol:space-y-2 prose-li:text-foreground/90 prose-li:leading-[1.8]
                prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-a:transition-all
                first:prose-p:text-xl first:prose-p:leading-relaxed first:prose-p:text-foreground/95"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
          
          {/* Content Divider */}
          <div className="my-16">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          {/* Share Footer */}
          <div>
            <ShareFooter title={post.title} url={currentUrl} />
          </div>
        </article>
      </main>
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-lg bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-110"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
      
      <Footer />
    </div>
  );
};

export default BlogPost;