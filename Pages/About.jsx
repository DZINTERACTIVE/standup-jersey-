import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Flag, Heart, Users, Target, Shield, Star } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Flag,
      title: "Constitutional Principles",
      description: "We defend the Constitution as the supreme law of the land and champion limited government that respects individual rights and freedoms."
    },
    {
      icon: Heart,
      title: "Traditional Values",
      description: "We stand for time-tested principles of family, faith, and community that have made America strong and prosperous."
    },
    {
      icon: Shield,
      title: "Personal Responsibility",
      description: "We believe in empowering individuals to take control of their lives and communities rather than relying on government solutions."
    },
    {
      icon: Star,
      title: "Garden State Pride",
      description: "We celebrate New Jersey's unique heritage while fighting to restore conservative values in Trenton and across all 21 counties."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <div className="bg-gradient-patriot text-white border-b-4 border-nj-gold relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="flag-pattern h-full w-full"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-nj-gold text-nj-navy rounded-lg font-black uppercase tracking-wider text-sm mb-6">
              501(c)(4) NON-PROFIT ORGANIZATION
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-nj-gold uppercase tracking-tight">
              ABOUT STAND UP
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto font-bold">
              A newly formed grassroots conservative non-profit dedicated to building 
              a movement that defends our freedoms and restores our founding principles in New Jersey.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16 bg-slate-800 border-b-4 border-nj-gold">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Target className="w-12 h-12 text-nj-gold mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-black text-nj-gold mb-6 uppercase tracking-tight">
              OUR MISSION
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed font-semibold">
              STAND UP is a new 501(c)(4) non-profit organization founded on the belief 
              that real change comes from the ground up. We're building a grassroots conservative 
              movement in New Jersey that empowers everyday patriots to take action in their communities, 
              hold elected officials accountable, and ensure that conservative voices are heard. 
              Through organizing, education, and civic engagement, we're creating a network 
              across all 21 counties that will preserve our constitutional republic for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-slate-900 border-b-4 border-usa-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-nj-gold mb-4 uppercase tracking-tight">
              OUR CORE VALUES
            </h2>
            <p className="text-xl text-gray-300 font-bold">
              The principles that guide our organization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-slate-800 border-2 border-nj-gold">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-usa-red rounded-lg flex items-center justify-center mr-4">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-black text-nj-gold uppercase tracking-wide">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed font-semibold">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Info */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-nj-gold mb-6 uppercase tracking-tight">
              ABOUT OUR ORGANIZATION
            </h2>
          </div>
          
          <div className="bg-gradient-patriot text-white rounded-lg p-8 mb-8 border-4 border-nj-gold">
            <h3 className="text-2xl font-black mb-4 uppercase tracking-wide text-nj-gold">
              NON-PROFIT STATUS
            </h3>
            <p className="text-lg font-bold mb-4">
              STAND UP is organized as a <strong>501(c)(4) social welfare organization</strong>, 
              which allows us to engage in unlimited lobbying and political advocacy while 
              maintaining our tax-exempt status.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <div className="font-black uppercase text-sm tracking-wide mb-1">Tax Status:</div>
                <div className="font-semibold">501(c)(4) Social Welfare</div>
              </div>
              <div>
                <div className="font-black uppercase text-sm tracking-wide mb-1">Founded:</div>
                <div className="font-semibold">2024</div>
              </div>
              <div>
                <div className="font-black uppercase text-sm tracking-wide mb-1">Focus:</div>
                <div className="font-semibold">New Jersey</div>
              </div>
              <div>
                <div className="font-black uppercase text-sm tracking-wide mb-1">Counties:</div>
                <div className="font-semibold">All 21 NJ Counties</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-usa-red text-white rounded-full flex items-center justify-center flex-shrink-0 font-black">
                1
              </div>
              <div>
                <h3 className="text-xl font-black text-nj-gold mb-2 uppercase">BUILDING OUR NETWORK</h3>
                <p className="text-gray-300 font-semibold">
                  As a new organization, we're focused on building local networks of 
                  conservative activists across all 21 New Jersey counties and training them to mobilize their communities.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-usa-red text-white rounded-full flex items-center justify-center flex-shrink-0 font-black">
                2
              </div>
              <div>
                <h3 className="text-xl font-black text-nj-gold mb-2 uppercase">CIVIC EDUCATION</h3>
                <p className="text-gray-300 font-semibold">
                  We're developing resources and training programs to help Garden State residents understand 
                  their constitutional rights and engage effectively in the political process.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-usa-red text-white rounded-full flex items-center justify-center flex-shrink-0 font-black">
                3
              </div>
              <div>
                <h3 className="text-xl font-black text-nj-gold mb-2 uppercase">ELECTORAL ENGAGEMENT</h3>
                <p className="text-gray-300 font-semibold">
                  We plan to support conservative candidates like Jack Ciattarelli through voter education, 
                  registration drives, and grassroots organizing across New Jersey.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-usa-red text-white rounded-full flex items-center justify-center flex-shrink-0 font-black">
                4
              </div>
              <div>
                <h3 className="text-xl font-black text-nj-gold mb-2 uppercase">POLICY ADVOCACY</h3>
                <p className="text-gray-300 font-semibold">
                  We're working to research, develop, and promote conservative policy solutions 
                  in Trenton and across New Jersey's 21 counties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
