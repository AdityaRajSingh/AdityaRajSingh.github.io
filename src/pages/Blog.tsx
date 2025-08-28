import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import { Button } from '@/components/ui/button';
import { useBlogPosts } from '@/hooks/useBlog';
const Blog = () => {
  const navigate = useNavigate();
  const posts = useBlogPosts();

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navigation />
      
      <Helmet>
        <title>Aditya Raj Singh — Software Developer at Google</title>
        <meta name="description" content="With four years spanning startups and big tech, I build products that scale and solve real problems. I thrive on learning, problem‑solving, and sharing ideas—currently exploring the frontiers of Artificial Intelligence." />
        <meta property="og:description" content="With four years spanning startups and big tech, I build products that scale and solve real problems. I thrive on learning, problem‑solving, and sharing ideas—currently exploring the frontiers of Artificial Intelligence." />
        <meta name="twitter:description" content="With four years spanning startups and big tech, I build products that scale and solve real problems. I thrive on learning, problem‑solving, and sharing ideas—currently exploring the frontiers of Artificial Intelligence." />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : 'https://adityarajsingh.github.io/blog'} />
      </Helmet>
      
      <main className="pt-20 bg-gradient-journey">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
          {/* Header */}
          <div className="mb-12">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="mb-6 hover:bg-accent/50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                All Notes
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Thoughts, insights, and learnings from my journey in tech and beyond. 
                A collection of ideas worth sharing.
              </p>
            </div>
          </div>

          {/* Blog Posts List */}
          <div className="max-w-4xl mx-auto">
            {posts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No blog posts found.</p>
              </div>
            ) : (
              posts.map((post) => (
                <BlogCard
                  key={post.slug}
                  post={post}
                  onClick={() => navigate(`/blog/${post.slug}`)}
                  showTags
                  layout="horizontal"
                />
              ))
            )}
          </div>

          {/* Load More (Future Enhancement) */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground">
              More posts coming soon. Stay tuned for updates on AI, development, and career insights.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;