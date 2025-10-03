import React, { useState, useEffect } from "react";
import { NewsArticle } from "@/entities/all";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Newspaper, MapPin, Users, Target } from "lucide-react";

import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import NewsCard from "../components/NewsCard";
import TwitterFeed from "../components/TwitterFeed";

export default function Home() {
  const [latestNews, setLatestNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const news = await NewsArticle.filter({ published: true }, "-created_date", 3);
      setLatestNews(news);
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <HeroSection />
      <StatsSection />
      
      {/* NJ Focus Section */}
      <section className="py-16 bg-slate-900 border-t-4 border-usa-red relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="flag-pattern h-full w-full"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-2 bg-nj-gold text-nj-navy rounded-full text-sm font-black uppercase tracking-wider mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              THE GARDEN STATE
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-nj-gold mb-6 uppercase tracking-tight">
              WHY NEW JERSEY MATTERS
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 border-2 border-nj-gold rounded-xl p-6 hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl font-black text-usa-red mb-4">9.3M</div>
              <div className="text-sm font-bold text-nj-gold uppercase tracking-wider mb-2">Garden State Residents</div>
              <p className="text-gray-300 font-semibold">The 11th most populous state - every vote counts in NJ!</p>
            </div>
            
            <div className="bg-slate-800 border-2 border-nj-gold rounded-xl p-6 hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl font-black text-usa-red mb-4">21</div>
              <div className="text-sm font-bold text-nj-gold uppercase tracking-wider mb-2">NJ Counties</div>
              <p className="text-gray-300 font-semibold">From Sussex to Cape May - organizing across the entire Garden State</p>
            </div>
            
            <div className="bg-slate-800 border-2 border-nj-gold rounded-xl p-6 hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl font-black text-usa-red mb-4">2025</div>
              <div className="text-sm font-bold text-nj-gold uppercase tracking-wider mb-2">Governor's Race</div>
              <p className="text-gray-300 font-semibold">Jack Ciattarelli can win - we came within 3 points last time!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Twitter Feed & News Section */}
      <section className="py-20 bg-slate-800 relative overflow-hidden border-t-4 border-nj-gold">
        <div className="absolute inset-0 opacity-5">
          <div className="flag-pattern h-full w-full"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* News Section */}
            <div className="lg:col-span-2">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-6 py-2 bg-usa-red text-white rounded-full text-sm font-black uppercase tracking-wider mb-6">
                  <Newspaper className="w-4 h-4 mr-2" />
                  GARDEN STATE NEWS
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-nj-gold mb-6 uppercase tracking-tight">
                  LATEST FROM NEW JERSEY
                </h2>
              </div>
              
              {isLoading ?
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2].map((i) =>
                <div key={i} className="animate-pulse">
                      <div className="bg-gray-700 h-48 rounded-lg mb-4"></div>
                      <div className="h-4 bg-gray-700 rounded mb-2"></div>
                      <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                    </div>
                )}
                </div> :
              latestNews.length > 0 ?
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {latestNews.slice(0, 2).map((article) =>
                <NewsCard key={article.id} article={article} />
                )}
                </div> :

              <div className="text-center py-12 bg-slate-900 rounded-lg border-2 border-nj-gold mb-8">
                  <Newspaper className="w-16 h-16 text-nj-gold mx-auto mb-4" />
                  <h3 className="text-xl font-black text-white mb-2 uppercase">COMING SOON</h3>
                  <p className="text-gray-400 max-w-md mx-auto font-semibold">
                    Breaking news from across the Garden State - stay tuned!
                  </p>
                </div>
              }
              
              <div className="text-center">
                <Link to={createPageUrl("News")}>
                  <Button className="bg-usa-red hover:bg-red-700 text-white font-black px-8 py-3 uppercase tracking-wider border-2 border-nj-gold">
                    ALL NJ NEWS
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Twitter Feed */}
            <div className="lg:col-span-1">
              <TwitterFeed />
            </div>
          </div>
        </div>
      </section>
      
      {/* NJ Counties CTA */}
      <section className="py-16 bg-slate-900 border-t-4 border-usa-red relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="flag-pattern h-full w-full"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Target className="w-16 h-16 text-nj-gold mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-black text-nj-gold mb-6 uppercase tracking-tight">
            ORGANIZING THE GARDEN STATE
          </h2>
          <p className="text-xl text-white mb-8 font-bold max-w-2xl mx-auto">
            From Bergen County to Cape May, we're building conservative power in every corner of New Jersey!
          </p>
          <Link to={createPageUrl("Map")}>
            <Button className="bg-nj-gold hover:bg-yellow-500 text-nj-navy px-12 py-6 text-xl font-black uppercase tracking-wider border-4 border-white">
              <MapPin className="w-5 h-5 mr-2" />
              EXPLORE NJ COUNTY MAP
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-patriot text-white border-t-4 border-nj-gold relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="flag-pattern h-full w-full"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight text-nj-gold">
            JOIN THE FIGHT FOR NJ
          </h2>
          
          <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto font-bold">
            The Garden State needs you! Help us build a conservative movement from Sussex to Cape May.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link to={createPageUrl("Register")}>
              <Button className="bg-nj-gold hover:bg-yellow-500 text-nj-navy px-12 py-6 text-xl font-black uppercase tracking-wider transition-all duration-200 border-4 border-white">
                VOLUNTEER IN NJ
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            
            <Link to={createPageUrl("About")}>
              <Button className="border-4 border-white text-white hover:bg-white hover:text-usa-red px-12 py-6 text-xl font-black uppercase tracking-wider transition-all duration-200">
                LEARN MORE
              </Button>
            </Link>
          </div>
          
          <div className="bg-slate-900 bg-opacity-80 backdrop-blur-sm rounded-lg p-8 border-2 border-nj-gold">
            <h3 className="text-lg font-black mb-2 uppercase tracking-wider text-nj-gold">
              🇺🇸 GARDEN STATE VOLUNTEER 🇺🇸
            </h3>
            <p className="text-lg font-bold text-white">
              Join fellow New Jersey patriots and help shape the future of the Garden State!
            </p>
          </div>
        </div>
      </section>
    </div>);

}
