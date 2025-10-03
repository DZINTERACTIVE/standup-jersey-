import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, TrendingDown, Target } from "lucide-react";

export default function Candidates() {
  const ciattarelli = {
    name: "Jack Ciattarelli",
    party: "Republican",
    position: "Former Assemblyman",
    bio: "Jack Ciattarelli is a businessman and former New Jersey Assemblyman who served from 2011 to 2018. He ran for governor in 2021, coming within 3 points of defeating Phil Murphy. Ciattarelli is running again in 2025, focusing on affordability, public safety, and restoring common sense to Trenton.",
    photo_url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800",
    key_issues: ["Lower Taxes", "Public Safety", "Affordability", "Education Choice", "Small Business"],
    website: "https://www.jackciattarelli.com",
    polling_percentage: 45,
    polling_trend: "Up 2% from last month",
    endorsed: true
  };

  const sherrill = {
    name: "Mikie Sherrill",
    party: "Democrat",
    position: "U.S. Representative",
    bio: "Mikie Sherrill is a U.S. Navy veteran and current Congresswoman representing New Jersey's 11th district since 2019. A former federal prosecutor, Sherrill is seeking to become New Jersey's next governor in 2025, running on her record of bipartisan accomplishment.",
    photo_url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800",
    key_issues: ["Healthcare Access", "Climate Action", "Gun Safety", "Women's Rights", "Infrastructure"],
    website: "https://www.mikiesherrill.com",
    polling_percentage: 48,
    polling_trend: "Down 1% from last month"
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <div className="bg-gradient-patriot text-white border-b-4 border-nj-gold relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="flag-pattern h-full w-full"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-nj-gold text-nj-navy rounded-lg font-black uppercase tracking-wider text-sm mb-6 shadow-lg">
              <Target className="w-5 h-5 mr-2" />
              NJ GOVERNOR'S RACE 2025
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight text-nj-gold drop-shadow-lg">
              KNOW THE CANDIDATES
            </h1>
            <p className="text-2xl text-white max-w-3xl mx-auto font-bold mb-8">
              New Jersey's next governor will shape our state's future for the next four years
            </p>
            
            {/* Polling Data */}
            <div className="bg-slate-900 bg-opacity-90 rounded-xl p-6 max-w-4xl mx-auto border-2 border-nj-gold">
              <div className="text-nj-gold font-black text-sm uppercase tracking-wider mb-4">
                LATEST POLLING AVERAGE
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-900 bg-opacity-50 rounded-lg p-4 border-2 border-red-600">
                  <div className="text-white font-bold text-lg mb-2">Jack Ciattarelli (R)</div>
                  <div className="text-5xl font-black text-red-400 mb-2">45%</div>
                  <div className="flex items-center justify-center gap-2 text-green-400 font-bold text-sm">
                    <TrendingUp className="w-4 h-4" />
                    +2% from last month
                  </div>
                </div>
                <div className="bg-blue-900 bg-opacity-50 rounded-lg p-4 border-2 border-blue-600">
                  <div className="text-white font-bold text-lg mb-2">Mikie Sherrill (D)</div>
                  <div className="text-5xl font-black text-blue-400 mb-2">48%</div>
                  <div className="flex items-center justify-center gap-2 text-red-400 font-bold text-sm">
                    <TrendingDown className="w-4 h-4" />
                    -1% from last month
                  </div>
                </div>
              </div>
              <div className="mt-4 text-gray-400 text-sm font-semibold">
                7% Undecided • Margin of Error: ±3.5%
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Republican Candidate */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 flex-1 bg-gradient-to-r from-transparent to-red-600"></div>
            <h2 className="text-3xl font-black text-nj-gold uppercase tracking-wide">
              🇺🇸 Republican Candidate
            </h2>
            <div className="h-1 flex-1 bg-gradient-to-l from-transparent to-red-600"></div>
          </div>
          
          <Card className="bg-slate-800 border-2 border-red-600 hover:border-nj-gold hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-4 bg-gradient-to-r from-red-900 to-slate-800 border-b-2 border-red-600">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-lg overflow-hidden h-80 bg-gray-900 border-4 border-nj-gold">
                  <img 
                    src={ciattarelli.photo_url} 
                    alt={ciattarelli.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="md:col-span-2 flex flex-col justify-center">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-4xl font-black text-white mb-3">
                        {ciattarelli.name}
                      </h3>
                      <p className="text-lg font-bold text-red-300 uppercase tracking-wide mb-2">
                        {ciattarelli.position}
                      </p>
                      <Badge className="bg-red-600 text-white font-black text-sm px-4 py-2">
                        REPUBLICAN
                      </Badge>
                    </div>
                    <Badge className="bg-nj-gold text-nj-navy font-black text-lg px-6 py-3 animate-pulse">
                      ⭐ ENDORSED
                    </Badge>
                  </div>
                  
                  <div className="bg-slate-900 rounded-lg p-4 mb-4 border-2 border-red-600">
                    <div className="text-red-300 font-bold text-sm mb-2 uppercase">Current Poll Position</div>
                    <div className="text-5xl font-black text-red-400">{ciattarelli.polling_percentage}%</div>
                    <div className="text-gray-400 text-sm mt-1 font-semibold">{ciattarelli.polling_trend}</div>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-8 bg-slate-800 text-white">
              <p className="text-lg text-gray-300 font-semibold mb-6 leading-relaxed">
                {ciattarelli.bio}
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-black text-nj-gold uppercase tracking-wider mb-3">
                  KEY ISSUES:
                </h4>
                <div className="flex flex-wrap gap-3">
                  {ciattarelli.key_issues.map((issue, idx) => (
                    <Badge key={idx} className="bg-usa-blue text-white border-2 border-nj-gold font-bold text-sm px-4 py-2">
                      {issue}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <Button 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-lg py-6 border-2 border-nj-gold shadow-lg"
                onClick={() => window.open(ciattarelli.website, '_blank')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Visit Campaign Website
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Democrat Candidate */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 flex-1 bg-gradient-to-r from-transparent to-blue-600"></div>
            <h2 className="text-3xl font-black text-nj-gold uppercase tracking-wide">
              Democrat Candidate
            </h2>
            <div className="h-1 flex-1 bg-gradient-to-l from-transparent to-blue-600"></div>
          </div>
          
          <Card className="bg-slate-800 border-2 border-blue-600 hover:border-nj-gold hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-4 bg-gradient-to-r from-blue-900 to-slate-800 border-b-2 border-blue-600">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-lg overflow-hidden h-80 bg-gray-900 border-4 border-nj-gold">
                  <img 
                    src={sherrill.photo_url} 
                    alt={sherrill.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="md:col-span-2 flex flex-col justify-center">
                  <div className="mb-4">
                    <h3 className="text-4xl font-black text-white mb-3">
                      {sherrill.name}
                    </h3>
                    <p className="text-lg font-bold text-blue-300 uppercase tracking-wide mb-2">
                      {sherrill.position}
                    </p>
                    <Badge className="bg-blue-600 text-white font-black text-sm px-4 py-2">
                      DEMOCRAT
                    </Badge>
                  </div>
                  
                  <div className="bg-slate-900 rounded-lg p-4 mb-4 border-2 border-blue-600">
                    <div className="text-blue-300 font-bold text-sm mb-2 uppercase">Current Poll Position</div>
                    <div className="text-5xl font-black text-blue-400">{sherrill.polling_percentage}%</div>
                    <div className="text-gray-400 text-sm mt-1 font-semibold">{sherrill.polling_trend}</div>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-8 bg-slate-800 text-white">
              <p className="text-lg text-gray-300 font-semibold mb-6 leading-relaxed">
                {sherrill.bio}
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-black text-nj-gold uppercase tracking-wider mb-3">
                  KEY ISSUES:
                </h4>
                <div className="flex flex-wrap gap-3">
                  {sherrill.key_issues.map((issue, idx) => (
                    <Badge key={idx} className="bg-usa-blue text-white border-2 border-nj-gold font-bold text-sm px-4 py-2">
                      {issue}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black text-lg py-6 border-2 border-nj-gold shadow-lg"
                onClick={() => window.open(sherrill.website, '_blank')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Visit Campaign Website
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
