import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Copy, Check, Linkedin, Twitter, Share2 } from "lucide-react";
import { getShareUrls } from "@/lib/blog";
import { useToast } from "@/hooks/use-toast";

interface ShareFooterProps {
  title: string;
  url: string;
}

const ShareFooter = ({ title, url }: ShareFooterProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const shareUrls = getShareUrls(title, url);

  const copyToClipboard = async () => {
    if (!navigator.clipboard) {
      toast({
        title: "Copy not supported",
        description: "Please copy the link manually from the address bar.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast({
        title: "Link copied!",
        description: "The blog post link has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Failed to copy",
        description: "Please try copying the link manually.",
        variant: "destructive",
      });
    }
  };

  const openShare = (shareUrl: string) => {
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="border-t border-border pt-8 mt-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Share2 className="w-4 h-4" />
          <span className="font-medium">Enjoy this note? Feel free to share!</span>
        </div>
        
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={copyToClipboard}
            className="flex items-center gap-2"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy Link
              </>
            )}
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => openShare(shareUrls.linkedin)}
            className="flex items-center gap-2"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => openShare(shareUrls.twitter)}
            className="flex items-center gap-2"
          >
            <Twitter className="w-4 h-4" />
            Twitter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShareFooter;