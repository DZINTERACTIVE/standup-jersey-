
import React, { useState } from "react";
import { Member } from "@/entities/all";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Users, Flag } from "lucide-react";

export default function Register() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip_code: "",
    volunteer_interests: [],
    membership_type: "Basic"
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const volunteerOptions = [
    "Phone Banking",
    "Door Knocking", 
    "Event Planning",
    "Social Media",
    "Fundraising",
    "Research",
    "Other"
  ];

  const states = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
    "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
    "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
    "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
    "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleVolunteerInterestChange = (interest, checked) => {
    setFormData(prev => ({
      ...prev,
      volunteer_interests: checked 
        ? [...prev.volunteer_interests, interest]
        : prev.volunteer_interests.filter(item => item !== interest)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await Member.create(formData);
      setIsSuccess(true);
    } catch (error) {
      console.error("Error registering member:", error);
      alert("There was an error submitting your registration. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="flag-pattern h-full w-full"></div>
        </div>
        
        <Card className="max-w-lg w-full text-center shadow-2xl border-4 border-nj-gold relative z-10 bg-slate-800">
          <CardContent className="p-12">
            <div className="text-8xl mb-6">🇺🇸</div>
            <h2 className="text-4xl font-black text-nj-gold mb-6 uppercase tracking-wider">
              WELCOME TO THE MOVEMENT!
            </h2>
            <p className="text-xl font-bold text-white mb-8 leading-relaxed">
              You're now part of New Jersey's newest conservative grassroots organization! 
              Get ready for action alerts and ways to make a difference in the Garden State! 🇺🇸
            </p>
            <div className="bg-gradient-patriot border-2 border-nj-gold rounded-xl p-6 mb-8">
              <div className="text-nj-gold font-black text-lg mb-2 uppercase tracking-wider">
                🚨 NEXT STEPS 🚨
              </div>
              <div className="text-white font-semibold">
                Check your email for your <span className="text-nj-gold font-black">welcome packet</span> 
                and upcoming volunteer opportunities in your county!
              </div>
            </div>
            <Button 
              onClick={() => window.location.href = "/"}
              className="bg-nj-gold hover:bg-yellow-500 text-nj-navy font-black px-8 py-4 text-lg uppercase tracking-wider rounded-xl shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              🎯 GET STARTED →
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <div className="bg-gradient-patriot text-white relative overflow-hidden border-b-4 border-nj-gold">
        {/* Background Animation */}
        <div className="absolute inset-0 flag-pattern opacity-10"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-nj-gold text-nj-navy rounded-full text-sm font-black uppercase tracking-wider mb-6">
              🚨 JOIN THE MOVEMENT 🚨
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-nj-gold">
              BECOME A
              <span className="block text-white">VOLUNTEER</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold text-white max-w-3xl mx-auto leading-relaxed">
              🇺🇸 Join our grassroots conservative movement and help us take back New Jersey!
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <Card className="shadow-2xl border-4 border-nj-gold bg-slate-800">
          <CardHeader className="text-center pb-6 bg-gradient-patriot border-b-4 border-nj-gold">
            <div className="text-6xl mb-4">🎯</div>
            <CardTitle className="text-3xl font-black text-nj-gold uppercase tracking-wider">
              VOLUNTEER REGISTRATION
            </CardTitle>
            <p className="text-lg font-bold text-white mt-3">
              Fill out the form below to JOIN THE FIGHT for New Jersey's future!
            </p>
          </CardHeader>
          
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <div className="bg-gradient-patriot border-2 border-nj-gold rounded-xl p-4">
                  <h3 className="text-xl font-black text-nj-gold uppercase tracking-wider mb-4">
                    🔥 PERSONAL INFO
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="first_name" className="font-bold text-white uppercase text-sm tracking-wider">
                      First Name *
                    </Label>
                    <Input
                      id="first_name"
                      value={formData.first_name}
                      onChange={(e) => handleInputChange('first_name', e.target.value)}
                      required
                      className="mt-2 border-2 border-gray-300 focus:border-nj-gold font-semibold"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="last_name" className="font-bold text-white uppercase text-sm tracking-wider">
                      Last Name *
                    </Label>
                    <Input
                      id="last_name"
                      value={formData.last_name}
                      onChange={(e) => handleInputChange('last_name', e.target.value)}
                      required
                      className="mt-2 border-2 border-gray-300 focus:border-nj-gold font-semibold"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="font-bold text-white uppercase text-sm tracking-wider">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="mt-2 border-2 border-gray-300 focus:border-nj-gold font-semibold"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="font-bold text-white uppercase text-sm tracking-wider">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="mt-2 border-2 border-gray-300 focus:border-nj-gold font-semibold"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              {/* Address Information */}
              <div className="space-y-6">
                <div className="bg-gradient-patriot border-2 border-nj-gold rounded-xl p-4">
                  <h3 className="text-xl font-black text-nj-gold uppercase tracking-wider mb-4">
                    📍 LOCATION
                  </h3>
                </div>
                
                <div>
                  <Label htmlFor="address" className="font-bold text-white uppercase text-sm tracking-wider">
                    Street Address
                  </Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="mt-2 border-2 border-gray-300 focus:border-nj-gold font-semibold"
                    placeholder="123 Main Street"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="city" className="font-bold text-white uppercase text-sm tracking-wider">
                      City
                    </Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="mt-2 border-2 border-gray-300 focus:border-nj-gold font-semibold"
                      placeholder="Your city"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state" className="font-bold text-white uppercase text-sm tracking-wider">
                      State
                    </Label>
                    <Select value={formData.state} onValueChange={(value) => handleInputChange('state', value)}>
                      <SelectTrigger className="mt-2 border-2 border-gray-300 focus:border-nj-gold font-semibold">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        {states.map(state => (
                          <SelectItem key={state} value={state}>
                            {state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="zip_code" className="font-bold text-white uppercase text-sm tracking-wider">
                      ZIP Code
                    </Label>
                    <Input
                      id="zip_code"
                      value={formData.zip_code}
                      onChange={(e) => handleInputChange('zip_code', e.target.value)}
                      className="mt-2 border-2 border-gray-300 focus:border-nj-gold font-semibold"
                      placeholder="12345"
                    />
                  </div>
                </div>
              </div>

              {/* Volunteer Interests */}
              <div className="space-y-6">
                <div className="bg-gradient-patriot border-2 border-nj-gold rounded-xl p-4">
                  <h3 className="text-xl font-black text-nj-gold uppercase tracking-wider mb-4">
                    🎖️ HOW CAN YOU HELP?
                  </h3>
                </div>
                <p className="text-sm font-semibold text-white">
                  Select all areas where you'd like to volunteer (optional)
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {volunteerOptions.map(option => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox
                        id={option}
                        checked={formData.volunteer_interests.includes(option)}
                        onCheckedChange={(checked) => handleVolunteerInterestChange(option, checked)}
                        className="border-nj-gold data-[state=checked]:bg-nj-gold data-[state=checked]:text-white"
                      />
                      <Label htmlFor={option} className="text-sm font-semibold text-white">
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t-4 border-nj-gold">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-nj-gold hover:bg-yellow-500 text-nj-navy font-black px-8 py-6 text-2xl rounded-xl shadow-xl hover:shadow-3xl transition-all duration-200 transform hover:scale-105 uppercase tracking-wider"
                >
                  {isSubmitting ? (
                    <>🔄 PROCESSING...</>
                  ) : (
                    <>🚀 JOIN THE MOVEMENT!</>
                  )}
                </Button>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-patriot border-2 border-nj-gold rounded-xl p-6">
                  <div className="text-nj-gold font-black text-lg mb-2 uppercase tracking-wider">
                    ⚡ VOLUNTEER STATUS ⚡
                  </div>
                  <div className="text-white font-semibold">
                    Register now as a volunteer and be part of building 
                    <span className="text-nj-gold font-black"> New Jersey's conservative movement</span> 
                    from day one! 🏆
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
