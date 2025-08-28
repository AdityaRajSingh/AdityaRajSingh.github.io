import React from 'react';
import { Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlogPost, formatDate, getBlogIcon } from "@/lib/blog";
import { getBlogHeroImage } from "@/lib/imageUtils";

interface BlogCardProps {
  post: BlogPost;
  onClick?: () => void;
  showTags?: boolean;
  layout?: 'horizontal' | 'vertical';
}

const BlogCard = ({ post, onClick, showTags = false, layout = 'vertical' }: BlogCardProps) => {
  const icon = getBlogIcon(post.title);

  if (layout === 'horizontal') {
    return (
      <Card className="hover-lift cursor-pointer bg-card border-border group transition-all duration-300 mb-6" onClick={onClick}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.date)}
                </div>
                {showTags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            <div className="w-14 h-14 rounded-full bg-gradient-teal flex items-center justify-center ml-6 flex-shrink-0 group-hover:scale-110 transition-transform">
              <span className="text-2xl">{icon}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Vertical layout (original with improvements)
  const gradients = [
    "bg-gradient-purple",
    "bg-gradient-teal", 
    "bg-gradient-warm",
    "bg-gradient-rose",
    "bg-gradient-blue",
    "bg-gradient-green"
  ];
  
  const gradientClass = gradients[Math.abs(post.slug.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % gradients.length];

  return (
    <Card 
      className="hover-lift cursor-pointer bg-card border-border group overflow-hidden transition-all duration-300"
      onClick={onClick}
    >
      <div className={`h-2 ${gradientClass}`}></div>
      
      {getBlogHeroImage(post.heroImage) && (
        <div className="aspect-video overflow-hidden">
          <img 
            src={getBlogHeroImage(post.heroImage)!} 
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const target = e.target as HTMLElement;
              const parent = target.parentElement;
              if (parent) {
                parent.style.display = 'none';
              }
            }}
          />
        </div>
      )}
      
      <CardHeader>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
          <Calendar className="w-4 h-4" />
          <span>{formatDate(post.date)}</span>
        </div>
        
        <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
          {post.title}
        </CardTitle>
        
        {showTags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {post.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="flex items-center text-primary font-medium group-hover:text-accent transition-colors">
          <span className="text-lg mr-2">{icon}</span>
          Read More
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;