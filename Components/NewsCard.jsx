import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { User, Calendar, ArrowRight, Zap } from "lucide-react";
import { format } from "date-fns";

const categoryStyles = {
  "Breaking News": "bg-red-600 text-white font-black animate-pulse",
  "Politics": "bg-blue-600 text-white font-bold",
  "Local Action": "bg-green-600 text-white font-bold", 
  "Opinion": "bg-purple-600 text-white font-bold",
  "Policy": "bg-yellow-600 text-white font-bold"
};

export default function NewsCard({ article, featured = false }) {
  const cardClass = featured 
    ? "col-span-full md:col-span-2 md:row-span-2 border-4 border-red-600"
    : "col-span-1 border-2 border-gray-200 hover:border-red-400";
    
  const imageClass = featured 
    ? "h-64 md:h-80" 
    : "h-48";

  return (
    <Card className={`${cardClass} group cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] overflow-hidden bg-white`}>
      {article.featured_image && (
        <div className={`${imageClass} overflow-hidden bg-gray-900 relative`}>
          <img 
            src={article.featured_image} 
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {featured && (
            <div className="absolute top-4 left-4">
              <Badge className="bg-red-600 text-white font-black px-3 py-1 text-sm uppercase tracking-wider animate-pulse">
                <Zap className="w-3 h-3 mr-1" />
                BREAKING
              </Badge>
            </div>
          )}
        </div>
      )}
      
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-4">
          <Badge className={`${categoryStyles[article.category] || categoryStyles.Policy} px-3 py-1 text-xs uppercase tracking-wider`}>
            {article.category}
          </Badge>
          <div className="flex items-center text-xs text-gray-500 font-semibold uppercase tracking-wider">
            <Calendar className="w-3 h-3 mr-1" />
            {format(new Date(article.created_date), "MMM d")}
          </div>
        </div>
        
        <h3 className={`font-black text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 leading-tight ${
          featured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
        }`}>
          {article.title}
        </h3>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className={`text-gray-700 font-semibold mb-6 line-clamp-3 leading-relaxed ${featured ? "text-base md:text-lg" : "text-sm"}`}>
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-xs text-gray-600 font-bold uppercase tracking-wider">
            <User className="w-3 h-3 mr-1" />
            {article.author}
          </div>
          
          <Button className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2 rounded-lg uppercase tracking-wider transition-all duration-200 transform group-hover:scale-105">
            READ MORE
            <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
