import React from "react";
import { Calendar } from "lucide-react";

export default function Events() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <div className="bg-gradient-patriot text-white border-b-4 border-nj-gold relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="flag-pattern h-full w-full"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-nj-gold uppercase tracking-tight">
            UPCOMING EVENTS
          </h1>
          <p className="text-xl text-white font-bold">
            Join fellow conservatives at rallies, town halls, and community events across New Jersey
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center py-20 bg-slate-800 rounded-lg border-2 border-nj-gold">
          <Calendar className="w-20 h-20 text-nj-gold mx-auto mb-6" />
          <h3 className="text-3xl font-black text-white mb-4 uppercase">EVENTS COMING SOON</h3>
          <p className="text-gray-400 max-w-md mx-auto mb-6 font-semibold text-lg">
            We're organizing our first events across New Jersey. Check back soon for rallies, 
            town halls, and volunteer opportunities in your county!
          </p>
        </div>
      </div>
    </div>
  );
}
