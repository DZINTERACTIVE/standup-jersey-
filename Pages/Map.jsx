import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, TrendingUp, MapPin } from "lucide-react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Create custom county marker based on priority
const createCountyIcon = (priority) => {
  const color = priority === "High" ? "#dc2626" : priority === "Medium" ? "#f59e0b" : "#16a34a";
  return L.divIcon({
    className: "custom-county-marker",
    html: `<div style="background: ${color}; width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });
};

// New Jersey Counties Data
const njCounties = [
  {
    name: "Bergen County",
    center: [40.9264, -74.0776],
    population: "955,732",
    description: "NJ's most populous county - critical for statewide victories",
    status: "Active Organizing",
    priority: "High",
    members: "Growing"
  },
  {
    name: "Essex County",
    center: [40.7857, -74.2349],
    population: "863,728",
    description: "Includes Newark - building conservative voices in urban areas",
    status: "Building Network",
    priority: "High",
    members: "Growing"
  },
  {
    name: "Middlesex County",
    center: [40.4452, -74.4121],
    population: "863,162",
    description: "Central NJ powerhouse - key suburban battleground",
    status: "Active Organizing",
    priority: "High",
    members: "Strong"
  },
  {
    name: "Monmouth County",
    center: [40.3140, -74.1500],
    population: "643,615",
    description: "Conservative stronghold along the Jersey Shore",
    status: "Strong Network",
    priority: "Medium",
    members: "Strong"
  },
  {
    name: "Ocean County",
    center: [39.9526, -74.2938],
    population: "637,229",
    description: "Red county with strong conservative base",
    status: "Strong Network",
    priority: "Medium",
    members: "Very Strong"
  },
  {
    name: "Morris County",
    center: [40.8568, -74.5746],
    population: "509,285",
    description: "Affluent suburbs with conservative lean",
    status: "Active Organizing",
    priority: "High",
    members: "Strong"
  },
  {
    name: "Union County",
    center: [40.6582, -74.3118],
    population: "575,345",
    description: "Diverse county needing conservative outreach",
    status: "Building Network",
    priority: "High",
    members: "Growing"
  },
  {
    name: "Passaic County",
    center: [41.0362, -74.2738],
    population: "524,118",
    description: "Northern gateway - organizing working families",
    status: "Building Network",
    priority: "Medium",
    members: "Growing"
  },
  {
    name: "Hudson County",
    center: [40.7453, -74.0632],
    population: "724,854",
    description: "Jersey City metro - expanding conservative presence",
    status: "Building Network",
    priority: "High",
    members: "Growing"
  },
  {
    name: "Camden County",
    center: [39.8014, -74.9487],
    population: "523,485",
    description: "South Jersey's largest - key organizing target",
    status: "Active Organizing",
    priority: "High",
    members: "Growing"
  },
  {
    name: "Burlington County",
    center: [39.8734, -74.7093],
    population: "461,860",
    description: "Suburban sprawl with conservative potential",
    status: "Active Organizing",
    priority: "Medium",
    members: "Growing"
  },
  {
    name: "Gloucester County",
    center: [39.7087, -75.1318],
    population: "302,294",
    description: "South Jersey swing county - crucial battleground",
    status: "Active Organizing",
    priority: "High",
    members: "Growing"
  },
  {
    name: "Somerset County",
    center: [40.5965, -74.6182],
    population: "345,361",
    description: "Affluent central county with conservative values",
    status: "Strong Network",
    priority: "Medium",
    members: "Strong"
  },
  {
    name: "Mercer County",
    center: [40.2678, -74.7196],
    population: "387,340",
    description: "Trenton area - fighting for conservative principles at the capital",
    status: "Building Network",
    priority: "High",
    members: "Growing"
  },
  {
    name: "Atlantic County",
    center: [39.4549, -74.5746],
    population: "274,534",
    description: "Atlantic City region - economic freedom message resonates",
    status: "Active Organizing",
    priority: "Medium",
    members: "Growing"
  },
  {
    name: "Sussex County",
    center: [41.1373, -74.6893],
    population: "144,221",
    description: "Northwestern stronghold - deepest red in NJ",
    status: "Strong Network",
    priority: "Low",
    members: "Very Strong"
  },
  {
    name: "Warren County",
    center: [40.8590, -75.0393],
    population: "109,632",
    description: "Rural conservative base on PA border",
    status: "Strong Network",
    priority: "Low",
    members: "Strong"
  },
  {
    name: "Hunterdon County",
    center: [40.5715, -74.9304],
    population: "128,947",
    description: "Rural affluent area with strong conservative values",
    status: "Strong Network",
    priority: "Low",
    members: "Strong"
  },
  {
    name: "Cape May County",
    center: [39.0845, -74.9104],
    population: "95,263",
    description: "Southern tip - tourism and conservative families",
    status: "Active Organizing",
    priority: "Low",
    members: "Strong"
  },
  {
    name: "Cumberland County",
    center: [39.3774, -75.1693],
    population: "154,152",
    description: "Agricultural heartland needing mobilization",
    status: "Building Network",
    priority: "Medium",
    members: "Growing"
  },
  {
    name: "Salem County",
    center: [39.5718, -75.4099],
    population: "64,837",
    description: "Small but mighty - rural conservative voices",
    status: "Building Network",
    priority: "Low",
    members: "Growing"
  }
];

export default function Map() {
  const [selectedCounty, setSelectedCounty] = useState(null);

  const njCenter = [40.0583, -74.4057]; // Center of New Jersey
  const defaultZoom = 8;

  // Group counties by priority for sidebar
  const highPriority = njCounties.filter(c => c.priority === "High");
  const mediumPriority = njCounties.filter(c => c.priority === "Medium");
  const lowPriority = njCounties.filter(c => c.priority === "Low");

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <div className="bg-gradient-patriot text-white border-b-4 border-nj-gold relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="flag-pattern h-full w-full"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-nj-gold text-nj-navy rounded font-black uppercase tracking-wider text-sm mb-6">
              <Target className="w-4 h-4 mr-2" />
              NEW JERSEY COUNTIES
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight text-nj-gold">
              WHERE WE'RE ORGANIZING
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto font-bold">
              Building conservative grassroots power across all 21 counties in New Jersey
            </p>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-slate-800 border-b-2 border-nj-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-black text-nj-gold mb-1">21</div>
              <div className="text-sm font-bold text-gray-300 uppercase tracking-wide">NJ Counties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-usa-red mb-1">{highPriority.length}</div>
              <div className="text-sm font-bold text-gray-300 uppercase tracking-wide">High Priority</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-white mb-1">GROWING</div>
              <div className="text-sm font-bold text-gray-300 uppercase tracking-wide">Statewide Network</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden shadow-xl border-2 border-nj-gold bg-slate-800">
              <CardContent className="p-0">
                <div className="h-[700px] relative">
                  <MapContainer
                    center={njCenter}
                    zoom={defaultZoom}
                    className="h-full w-full"
                    scrollWheelZoom={true}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      className="map-tiles"
                    />
                    
                    {/* County Markers */}
                    {njCounties.map((county) => (
                      <Marker
                        key={county.name}
                        position={county.center}
                        icon={createCountyIcon(county.priority)}
                        eventHandlers={{
                          click: () => setSelectedCounty(county),
                        }}
                      >
                        <Popup>
                          <div className="p-3 min-w-[280px]">
                            <div className="flex items-center justify-between mb-3">
                              <h3 className="text-lg font-black text-gray-900">
                                {county.name}
                              </h3>
                              <Badge className={`font-bold text-xs ${
                                county.priority === "High" ? "bg-red-600" : 
                                county.priority === "Medium" ? "bg-yellow-600" : "bg-green-600"
                              } text-white`}>
                                {county.priority}
                              </Badge>
                            </div>
                            <div className="mb-3 text-sm text-gray-600 font-semibold">
                              Population: {county.population}
                            </div>
                            <p className="text-sm text-gray-700 font-semibold mb-3">
                              {county.description}
                            </p>
                            <div className="space-y-2">
                              <div className="flex items-center text-xs font-bold text-gray-900">
                                <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
                                Status: {county.status}
                              </div>
                              <div className="flex items-center text-xs font-bold text-gray-900">
                                <Users className="w-4 h-4 mr-2 text-blue-600" />
                                Members: {county.members}
                              </div>
                            </div>
                          </div>
                        </Popup>
                      </Marker>
                    ))}
                  </MapContainer>
                </div>
              </CardContent>
            </Card>

            {/* Map Legend */}
            <div className="mt-4 bg-slate-800 border-2 border-nj-gold rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-5 h-5 text-nj-gold" />
                <div className="flex-1">
                  <div className="font-black text-sm text-nj-gold uppercase">NJ County Map</div>
                  <div className="text-xs text-gray-300 font-semibold">Click markers to see county details and organizing efforts</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs font-bold text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-600 border-2 border-white"></div>
                  <span>High Priority</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-600 border-2 border-white"></div>
                  <span>Medium Priority</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-600 border-2 border-white"></div>
                  <span>Strong Base</span>
                </div>
              </div>
            </div>
          </div>

          {/* Counties List Sidebar */}
          <div className="space-y-4 max-h-[800px] overflow-y-auto">
            <div className="bg-gradient-patriot text-white rounded-lg p-6 border-4 border-nj-gold sticky top-0 z-10">
              <h2 className="text-2xl font-black uppercase tracking-wide mb-3">
                NJ COUNTIES
              </h2>
              <p className="text-sm font-bold text-nj-buff">
                We're organizing in every county across New Jersey
              </p>
            </div>

            {/* High Priority Counties */}
            {highPriority.length > 0 && (
              <div>
                <h3 className="text-sm font-black text-usa-red uppercase tracking-wider mb-2 px-2">
                  🔥 High Priority
                </h3>
                <div className="space-y-2">
                  {highPriority.map((county) => (
                    <Card 
                      key={county.name}
                      className={`cursor-pointer hover:shadow-lg transition-all duration-200 border-l-4 border-red-600 bg-slate-800 ${
                        selectedCounty?.name === county.name 
                          ? 'shadow-lg border-nj-gold' 
                          : 'hover:border-nj-gold'
                      }`}
                      onClick={() => setSelectedCounty(county)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-base font-black text-white">
                            {county.name}
                          </h4>
                          <Badge className="bg-red-600 text-white font-bold text-xs">
                            {county.priority}
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-400 font-semibold mb-2">
                          Pop: {county.population}
                        </p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-gray-300">{county.status}</span>
                          <span className="font-black text-nj-gold">{county.members}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Medium Priority Counties */}
            {mediumPriority.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-black text-yellow-600 uppercase tracking-wider mb-2 px-2">
                  ⚡ Medium Priority
                </h3>
                <div className="space-y-2">
                  {mediumPriority.map((county) => (
                    <Card 
                      key={county.name}
                      className={`cursor-pointer hover:shadow-lg transition-all duration-200 border-l-4 border-yellow-600 bg-slate-800 ${
                        selectedCounty?.name === county.name 
                          ? 'shadow-lg border-nj-gold' 
                          : 'hover:border-nj-gold'
                      }`}
                      onClick={() => setSelectedCounty(county)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-base font-black text-white">
                            {county.name}
                          </h4>
                          <Badge className="bg-yellow-600 text-white font-bold text-xs">
                            {county.priority}
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-400 font-semibold mb-2">
                          Pop: {county.population}
                        </p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-gray-300">{county.status}</span>
                          <span className="font-black text-nj-gold">{county.members}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Low Priority / Strong Base Counties */}
            {lowPriority.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-black text-green-600 uppercase tracking-wider mb-2 px-2">
                  ✓ Strong Conservative Base
                </h3>
                <div className="space-y-2">
                  {lowPriority.map((county) => (
                    <Card 
                      key={county.name}
                      className={`cursor-pointer hover:shadow-lg transition-all duration-200 border-l-4 border-green-600 bg-slate-800 ${
                        selectedCounty?.name === county.name 
                          ? 'shadow-lg border-nj-gold' 
                          : 'hover:border-nj-gold'
                      }`}
                      onClick={() => setSelectedCounty(county)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-base font-black text-white">
                            {county.name}
                          </h4>
                          <Badge className="bg-green-600 text-white font-bold text-xs">
                            STRONG
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-400 font-semibold mb-2">
                          Pop: {county.population}
                        </p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-gray-300">{county.status}</span>
                          <span className="font-black text-nj-gold">{county.members}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .map-tiles {
          filter: brightness(0.9) contrast(1.1);
        }
        .leaflet-container {
          font-family: inherit;
          background: #1e293b;
        }
        .leaflet-popup-content-wrapper {
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .leaflet-popup-content {
          margin: 0;
        }
      `}</style>
    </div>
  );
}
