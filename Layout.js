
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Home, 
  Newspaper, 
  Calendar, 
  Info, 
  Users, 
  Menu, 
  X,
  MapPin,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { name: "HOME", url: createPageUrl("Home"), icon: Home },
  { name: "NEWS", url: createPageUrl("News"), icon: Newspaper },
  { name: "EVENTS", url: createPageUrl("Events"), icon: Calendar },
  { name: "CANDIDATES", url: createPageUrl("Candidates"), icon: Users },
  { name: "NJ MAP", url: createPageUrl("Map"), icon: MapPin },
  { name: "TAKE ACTION", url: createPageUrl("TakeAction"), icon: Target },
  { name: "ABOUT", url: createPageUrl("About"), icon: Info },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-slate-900">
      <style>{`
        :root {
          --nj-navy: #0a1f44;
          --nj-gold: #d4af37;
          --nj-buff: #f4e4c1;
          --usa-red: #b31942;
          --usa-blue: #0a3161;
        }
        
        .bg-nj-navy {
          background-color: #0a1f44;
        }
        
        .bg-nj-gold {
          background-color: #d4af37;
        }
        
        .text-nj-gold {
          color: #d4af37;
        }
        
        .border-nj-gold {
          border-color: #d4af37;
        }
        
        .bg-usa-blue {
          background-color: #0a3161;
        }
        
        .bg-usa-red {
          background-color: #b31942;
        }
        
        .text-usa-red {
          color: #b31942;
        }
        
        .bg-gradient-patriot {
          background: linear-gradient(135deg, #b31942 0%, #0a3161 50%, #0a1f44 100%);
        }
        
        .flag-pattern {
          background-image: 
            repeating-linear-gradient(
              0deg,
              #b31942,
              #b31942 20px,
              white 20px,
              white 40px
            );
        }
        
        .logo-glow {
          text-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
        }
        
        .logo-no-bg {
          mix-blend-mode: multiply;
          filter: contrast(1.2) saturate(1.3) brightness(1.1);
        }
      `}</style>
      
      {/* Top Alert Bar */}
      <div className="bg-gradient-patriot text-white text-center py-3 px-4 font-bold border-b-2 border-nj-gold">
        <div className="flex items-center justify-center gap-2">
          <span className="text-sm uppercase tracking-wider">
            🇺🇸 New Jersey's Conservative Voice • Garden State Patriots • Follow @GOPUSANJ on X
          </span>
        </div>
      </div>
      
      {/* Navigation Header */}
      <header className="bg-nj-navy text-white shadow-2xl sticky top-0 z-50 border-b-4 border-nj-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-3 group">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d9d7e00979ad0a8b81fbc6/cb6f1266f_ChatGPTImageOct2202503_52_12AM.png"
                alt="Stand Up! Jersey! Logo"
                className="h-24 w-auto transform group-hover:scale-105 transition-transform duration-200 logo-no-bg"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.url}
                  className={`flex items-center space-x-2 px-4 py-3 rounded font-bold text-sm tracking-wide transition-all duration-200 ${
                    location.pathname === item.url
                      ? "bg-nj-gold text-nj-navy"
                      : "text-nj-buff hover:bg-usa-blue"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
              
              <Button className="ml-4 bg-nj-gold hover:bg-yellow-500 text-nj-navy font-black px-6 py-3 transition-all duration-200 shadow-lg">
                DONATE
              </Button>
            </nav>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-nj-gold hover:bg-usa-blue"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-usa-blue">
              <nav className="flex flex-col space-y-2 mt-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.url}
                    className={`flex items-center space-x-2 px-4 py-3 rounded font-bold text-sm tracking-wide transition-all duration-200 ${
                      location.pathname === item.url
                        ? "bg-nj-gold text-nj-navy"
                        : "text-nj-buff hover:bg-usa-blue"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                ))}
                <Button className="bg-nj-gold hover:bg-yellow-500 text-nj-navy font-black py-3 w-full">
                  DONATE
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-nj-navy text-white border-t-4 border-nj-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d9d7e00979ad0a8b81fbc6/cb6f1266f_ChatGPTImageOct2202503_52_12AM.png"
                  alt="Stand Up! Jersey! Logo"
                  className="h-16 w-auto logo-no-bg"
                />
              </div>
              <p className="text-gray-300 max-w-md leading-relaxed font-semibold">
                Building New Jersey's conservative grassroots movement to defend Garden State values 
                and restore constitutional principles.
              </p>
            </div>
            
            <div>
              <h3 className="text-nj-gold font-black text-lg mb-4 uppercase">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to={createPageUrl("About")} className="text-gray-300 hover:text-nj-gold transition-colors font-semibold">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl("News")} className="text-gray-300 hover:text-nj-gold transition-colors font-semibold">
                    News
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl("Events")} className="text-gray-300 hover:text-nj-gold transition-colors font-semibold">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl("Register")} className="text-gray-300 hover:text-nj-gold transition-colors font-semibold">
                    Volunteer
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-nj-gold font-black text-lg mb-4 uppercase">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-nj-gold transition-colors font-semibold">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-nj-gold transition-colors font-semibold">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-nj-gold transition-colors font-semibold">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="mailto:info@standupjersey.org" className="text-gray-300 hover:text-nj-gold transition-colors font-semibold">
                    Email Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-usa-blue mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm font-semibold">
                © 2024 STAND UP! JERSEY! - 501(c)(4) Non-Profit Organization
              </p>
              <p className="text-nj-gold text-sm mt-2 md:mt-0 font-bold">
                🇺🇸 Liberty & Justice For All
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
