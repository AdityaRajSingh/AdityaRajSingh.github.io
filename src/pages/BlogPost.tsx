import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ShareFooter from '@/components/ShareFooter';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { formatDate, getBlogIcon } from '@/lib/blog';
import { getBlogHeroImage } from '@/lib/imageUtils';
import { useBlogPost } from '@/hooks/useBlog';
const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { post, content, notFound } = useBlogPost(slug);
  
  if (notFound) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Post not found</h1>
          <Button onClick={() => navigate('/blog')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
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
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate('/blog')}
            className="mb-8 hover:bg-accent/50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>

          {/* Hero Image */}
          <div className="h-40 sm:h-56 md:h-64 rounded-lg overflow-hidden mb-8 shadow-lg relative">
            {getBlogHeroImage(post.heroImage) && (
              <img 
                src={getBlogHeroImage(post.heroImage)!} 
                alt={post.title}
                loading="lazy"
                className="w-full h-full object-cover relative z-10"
                onError={(e) => (e.target as HTMLElement).style.display = 'none'}
                onLoad={(e) => {
                  const fallback = (e.target as HTMLElement).parentElement?.querySelector('.fallback-bg');
                  if (fallback) (fallback as HTMLElement).style.display = 'none';
                }}
              />
            )}
            <div className="fallback-bg w-full h-full bg-gradient-to-br from-primary/20 via-accent/30 to-secondary/20 flex items-center justify-center absolute inset-0">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-2xl">{getBlogIcon(post.title)}</span>
                </div>
                <h2 className="text-xl font-semibold text-foreground/80 max-w-md">{post.title}</h2>
              </div>
            </div>
          </div>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Aditya Raj Singh</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
              </div>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </header>

          {/* Content */}
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            <p className="text-xl leading-relaxed text-foreground/80 border-l-4 border-primary pl-6 italic not-prose mb-8">
              {post.excerpt}
            </p>
            <div 
              className="prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-foreground prose-code:text-foreground prose-pre:bg-muted prose-pre:text-foreground"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>

          {/* Share Footer */}
          <ShareFooter title={post.title} url={currentUrl} />
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;