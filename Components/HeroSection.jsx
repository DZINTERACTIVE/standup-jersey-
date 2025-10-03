import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Flag } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-patriot text-white overflow-hidden border-b-4 border-nj-gold">
      <div className="absolute inset-0 opacity-10">
        <div className="flag-pattern h-full w-full"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-5xl">
          {/* Urgent Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-nj-gold text-nj-navy rounded-lg font-black uppercase tracking-wider text-sm shadow-2xl">
              <Flag className="w-5 h-5 mr-2" />
              501(c)(4) NON-PROFIT • THE GARDEN STATE
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight uppercase text-nj-gold drop-shadow-2xl">
            NEW JERSEY NEEDS YOU TO
            <span className="block text-white">STAND UP!</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-white mb-10 leading-relaxed max-w-4xl font-bold drop-shadow-lg">
            Join New Jersey's newest grassroots conservative movement. We're mobilizing 
            patriots across all 21 counties to defend Garden State values and take back Trenton.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mb-12 pb-10 border-b-4 border-nj-gold">
            <div className="bg-slate-900 bg-opacity-80 rounded-lg px-6 py-4 border-2 border-nj-gold">
              <div className="text-5xl font-black text-nj-gold">21</div>
              <div className="text-sm text-nj-buff uppercase tracking-wide font-bold">NJ Counties</div>
            </div>
            <div className="bg-slate-900 bg-opacity-80 rounded-lg px-6 py-4 border-2 border-nj-gold">
              <div className="text-5xl font-black text-nj-gold">GROWING</div>
              <div className="text-sm text-nj-buff uppercase tracking-wide font-bold">Membership</div>
            </div>
            <div className="bg-slate-900 bg-opacity-80 rounded-lg px-6 py-4 border-2 border-nj-gold">
              <div className="text-5xl font-black text-nj-gold">2025</div>
              <div className="text-sm text-nj-buff uppercase tracking-wide font-bold">Governor Race</div>
            </div>
            <div className="bg-slate-900 bg-opacity-80 rounded-lg px-6 py-4 border-2 border-nj-gold">
              <div className="text-5xl font-black text-nj-gold">45%</div>
              <div className="text-sm text-nj-buff uppercase tracking-wide font-bold">Ciattarelli Polling</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link to={createPageUrl("Register")}>
              <Button className="bg-nj-gold hover:bg-yellow-500 text-nj-navy px-10 py-7 text-xl font-black uppercase tracking-wider transition-all duration-200 shadow-2xl border-4 border-white">
                JOIN THE MOVEMENT
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </Link>
            
            <Link to={createPageUrl("Map")}>
              <Button variant="outline" className="bg-slate-950 text-white px-8 py-6 text-lg font-black uppercase inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 border-2 border-white hover:bg-white hover:text-red-600 tracking-wider transition-all duration-200">
                <Target className="w-5 h-5 mr-2" />
                VIEW COUNTY MAP
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Bottom Angled Cut */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V120L1200,0Z" fill="#0f172a"></path>
        </svg>
      </div>
    </section>
  );
}
