import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Users, Calendar, Flag, Target } from "lucide-react";

const goals = [
  {
    icon: Users,
    title: "BUILD NETWORK",
    description: "Connecting NJ conservatives county by county",
    bg: "bg-usa-red"
  },
  {
    icon: Calendar,
    title: "HOST EVENTS",
    description: "Town halls and rallies across New Jersey",
    bg: "bg-usa-blue"
  },
  {
    icon: Flag,
    title: "DEFEND VALUES",
    description: "Fighting for conservative principles in Trenton",
    bg: "bg-nj-navy"
  },
  {
    icon: Target,
    title: "WIN ELECTIONS",
    description: "Supporting Jack Ciattarelli and conservatives statewide",
    bg: "bg-usa-red"
  }
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-slate-800 relative overflow-hidden border-t-4 border-nj-gold">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="flag-pattern h-full w-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-2 bg-usa-red text-white rounded-full text-sm font-black uppercase tracking-wider mb-6">
            <Target className="w-4 h-4 mr-2" />
            OUR MISSION IN NEW JERSEY
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-nj-gold mb-6 uppercase tracking-tight">
            BUILDING THE MOVEMENT
          </h2>
          <p className="text-xl md:text-2xl font-bold text-gray-300 max-w-3xl mx-auto">
            We're organizing conservatives across all 21 New Jersey counties to take back our state!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {goals.map((goal, index) => (
            <div 
              key={index} 
              className="text-center p-8 bg-slate-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-nj-gold group"
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 ${goal.bg} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <goal.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-xl font-black text-nj-gold mb-3 uppercase tracking-wider">
                {goal.title}
              </div>
              <div className="text-sm font-semibold text-gray-400 leading-relaxed">
                {goal.description}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-slate-900 rounded-2xl p-8 border-4 border-nj-gold max-w-2xl mx-auto">
            <div className="text-2xl font-black text-nj-gold mb-4 uppercase tracking-wider">
              🚀 HELP US GROW IN NJ!
            </div>
            <p className="text-lg font-bold text-white mb-6">
              As a new 501(c)(4) non-profit, we need Garden State patriots like you to help us build 
              the conservative movement from the ground up!
            </p>
            <Link to={createPageUrl("Register")}>
              <Button className="bg-nj-gold hover:bg-yellow-500 text-nj-navy font-black px-8 py-4 rounded-xl uppercase tracking-wider transform hover:scale-105 transition-all duration-200">
                VOLUNTEER NOW →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
