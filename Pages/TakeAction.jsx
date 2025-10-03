import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Vote, 
  Share2, 
  Phone, 
  Mail, 
  DollarSign,
  Target,
  ArrowRight,
  AlertCircle
} from "lucide-react";

export default function TakeAction() {
  const actions = [
    {
      icon: Users,
      title: "JOIN AS A VOLUNTEER",
      description: "Sign up to volunteer and get connected with your local county organizers",
      cta: "Sign Up Now",
      link: createPageUrl("Register"),
      color: "bg-usa-red"
    },
    {
      icon: Vote,
      title: "REGISTER TO VOTE",
      description: "Make sure you're registered and ready to vote in the 2025 governor's race",
      cta: "Check Registration",
      link: "https://voter.svrs.nj.gov/registration-check",
      color: "bg-usa-blue",
      external: true
    },
    {
      icon: Share2,
      title: "SPREAD THE WORD",
      description: "Share our mission on social media and help grow the conservative movement",
      cta: "Share on Social",
      link: "#",
      color: "bg-nj-navy"
    },
    {
      icon: Phone,
      title: "PHONE BANKING",
      description: "Help us reach voters across New Jersey through phone banking campaigns",
      cta: "Learn More",
      link: "#",
      color: "bg-usa-red"
    },
    {
      icon: Mail,
      title: "CONTACT OFFICIALS",
      description: "Let your state representatives know where you stand on key issues",
      cta: "Find Your Rep",
      link: "https://www.njleg.state.nj.us/legislative-roster",
      color: "bg-usa-blue",
      external: true
    },
    {
      icon: DollarSign,
      title: "DONATE",
      description: "Support our grassroots organizing efforts across all 21 counties",
      cta: "Donate Now",
      link: "#",
      color: "bg-nj-navy"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <div className="bg-gradient-patriot text-white border-b-4 border-nj-gold relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="flag-pattern h-full w-full"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-nj-gold text-nj-navy rounded-lg font-black uppercase tracking-wider text-sm mb-6">
              <AlertCircle className="w-5 h-5 mr-2" />
              GET INVOLVED TODAY
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight text-nj-gold">
              TAKE ACTION
            </h1>
            <p className="text-2xl text-white max-w-3xl mx-auto font-bold mb-8">
              Every action counts. Here's how you can make a difference for New Jersey's conservative movement.
            </p>
          </div>
        </div>
      </div>

      {/* Urgent CTA */}
      <div className="bg-slate-800 border-b-4 border-usa-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-gradient-patriot rounded-xl p-8 border-2 border-nj-gold text-center">
            <Target className="w-12 h-12 text-nj-gold mx-auto mb-4" />
            <h2 className="text-3xl font-black text-white mb-4 uppercase">
              THE 2025 RACE IS HEATING UP!
            </h2>
            <p className="text-lg text-white font-bold mb-6 max-w-2xl mx-auto">
              Jack Ciattarelli is only 3 points behind. Your action today could tip the scales 
              and bring conservative leadership back to Trenton!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Register")}>
                <Button className="bg-nj-gold hover:bg-yellow-500 text-nj-navy font-black px-8 py-4 text-lg uppercase tracking-wider">
                  VOLUNTEER NOW
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button className="bg-white text-usa-red hover:bg-gray-100 font-black px-8 py-4 text-lg uppercase tracking-wider">
                DONATE TODAY
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Action Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <Card 
              key={index} 
              className="bg-slate-800 border-2 border-nj-gold hover:border-usa-red hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 ${action.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <action.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-nj-gold mb-3 uppercase tracking-wide">
                  {action.title}
                </h3>
                <p className="text-gray-300 font-semibold mb-6 leading-relaxed">
                  {action.description}
                </p>
                {action.external ? (
                  <a href={action.link} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-usa-red hover:bg-red-700 text-white font-bold uppercase tracking-wide">
                      {action.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                ) : (
                  <Link to={action.link}>
                    <Button className="w-full bg-usa-red hover:bg-red-700 text-white font-bold uppercase tracking-wide">
                      {action.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-patriot border-t-4 border-nj-gold relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="flag-pattern h-full w-full"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-4xl font-black text-nj-gold mb-6 uppercase">
            EVERY VOICE MATTERS
          </h2>
          <p className="text-xl text-white font-bold mb-8 max-w-2xl mx-auto">
            Whether you can volunteer for 2 hours a week or just share on social media, 
            your contribution helps build a stronger New Jersey.
          </p>
          <Link to={createPageUrl("About")}>
            <Button className="border-4 border-white text-white hover:bg-white hover:text-usa-red px-12 py-6 text-xl font-black uppercase tracking-wider transition-all duration-200">
              LEARN MORE ABOUT US
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
