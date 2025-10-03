
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users, ExternalLink } from "lucide-react";
import { format } from "date-fns";

const eventTypeColors = {
  Rally: "bg-red-600 text-white font-black animate-pulse",
  "Town Hall": "bg-blue-600 text-white font-bold",
  Meeting: "bg-purple-600 text-white font-bold",
  Fundraiser: "bg-green-600 text-white font-bold",
  Volunteer: "bg-yellow-600 text-white font-bold",
  Other: "bg-gray-600 text-white font-bold"
};

export default function EventCard({ event }) {
  return (
    <Card className="hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] overflow-hidden border-l-8 border-l-red-600 bg-white group">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-3">
          <Badge className={`${eventTypeColors[event.event_type] || eventTypeColors.Other} px-3 py-1 text-xs uppercase tracking-wider`}>
            {event.event_type}
          </Badge>
          {event.registration_required && (
            <Badge className="bg-yellow-500 text-black font-black text-xs px-3 py-1 uppercase tracking-wider animate-bounce">
              🚨 REGISTER NOW
            </Badge>
          )}
        </div>
        
        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3 group-hover:text-red-600 transition-colors leading-tight">
          {event.title}
        </h3>
        
        <div className="space-y-2 text-sm font-semibold">
          <div className="flex items-center text-red-600">
            <Calendar className="w-4 h-4 mr-2" />
            {format(new Date(event.date), "EEEE, MMMM d, yyyy").toUpperCase()}
          </div>
          
          {event.time && (
            <div className="flex items-center text-blue-600">
              <Clock className="w-4 h-4 mr-2" />
              {event.time}
            </div>
          )}
          
          <div className="flex items-center text-gray-700">
            <MapPin className="w-4 h-4 mr-2" />
            {event.location}
          </div>
          
          {event.max_attendees && (
            <div className="flex items-center text-purple-600">
              <Users className="w-4 h-4 mr-2" />
              LIMITED TO {event.max_attendees} PATRIOTS
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-700 font-semibold mb-6 line-clamp-3 leading-relaxed">
          {event.description}
        </p>
        
        {event.contact_info && (
          <p className="text-sm text-gray-600 font-semibold mb-6 bg-gray-50 p-3 rounded-lg">
            <strong>CONTACT:</strong> {event.contact_info}
          </p>
        )}
        
        <div className="flex gap-3">
          <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-black text-sm uppercase tracking-wider transition-all duration-200 transform hover:scale-105">
            <ExternalLink className="w-4 h-4 mr-2" />
            GET DETAILS
          </Button>
          {event.registration_required && (
            <Button className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-black font-black text-sm uppercase tracking-wider transition-all duration-200 transform hover:scale-105">
              🎯 SECURE SPOT
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
