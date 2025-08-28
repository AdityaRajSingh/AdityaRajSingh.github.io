import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogCard from '@/components/BlogCard';
import { useRecentPosts } from '@/hooks/useBlog';
import { Button } from '@/components/ui/button';

const WritingsSection = () => {
  const navigate = useNavigate();
  const posts = useRecentPosts(3);
  
  const handlePostClick = useCallback((slug: string) => {
    navigate(`/blog/${slug}`);
  }, [navigate]);
  
  const handleViewAllClick = useCallback(() => {
    navigate('/blog');
  }, [navigate]);

  return (
    <section id="writings" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            From My Desk
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts, insights, and learnings from my journey in tech and beyond.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              post={post}
              onClick={() => handlePostClick(post.slug)}
              layout="horizontal"
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            onClick={handleViewAllClick}
            className="hover:bg-accent hover:text-accent-foreground"
          >
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WritingsSection;