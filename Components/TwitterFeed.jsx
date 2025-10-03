import React, { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Twitter, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TwitterFeed() {
  useEffect(() => {
    // Clean up any existing scripts
    const existingScripts = document.querySelectorAll('script[src*="platform.twitter.com"]');
    existingScripts.forEach(script => script.remove());

    // Load Twitter widget script
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const scripts = document.querySelectorAll('script[src*="platform.twitter.com"]');
      scripts.forEach(script => {
        if (script.parentNode) script.parentNode.removeChild(script);
      });
    };
  }, []);

  return (
    <Card className="bg-slate-800 border-2 border-nj-gold">
      <CardHeader className="bg-gradient-patriot border-b-2 border-nj-gold">
        <CardTitle className="flex items-center gap-3 text-nj-gold font-black uppercase tracking-wider">
          <Twitter className="w-6 h-6" />
          FOLLOW @GOPUSANJ
        </CardTitle>
        <p className="text-sm text-white font-semibold mt-2">
          Latest from NJ Republicans on X
        </p>
      </CardHeader>
      <CardContent className="p-4">
        <div className="mb-4">
          <a 
            href="https://twitter.com/GOPUSANJ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
          >
            <Button className="w-full bg-nj-gold hover:bg-yellow-500 text-nj-navy font-black">
              <Twitter className="w-4 h-4 mr-2" />
              VIEW @GOPUSANJ ON X
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
        
        <div className="bg-slate-900 rounded-lg p-4 border border-nj-gold">
          <a 
            className="twitter-timeline" 
            data-height="500"
            data-theme="dark"
            href="https://twitter.com/GOPUSANJ"
          >
            Tweets by @GOPUSANJ
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
