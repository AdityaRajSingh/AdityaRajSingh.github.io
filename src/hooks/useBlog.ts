import { useMemo } from 'react';
import { getAllPosts, getPostBySlug, getPostContent, getRecentPosts } from '@/lib/blog';

export const useBlogPosts = () => useMemo(getAllPosts, []);

export const useBlogPost = (slug?: string) => 
  useMemo(() => {
    if (!slug) return { post: null, content: '', notFound: true };
    
    const post = getPostBySlug(slug);
    if (!post) return { post: null, content: '', notFound: true };
    
    return { post, content: getPostContent(slug), notFound: false };
  }, [slug]);

export const useRecentPosts = (limit = 3) => useMemo(() => getRecentPosts(limit), [limit]);