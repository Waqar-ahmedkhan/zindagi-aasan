'use client';

import { Droplet, Hammer, PaintBucket, Scissors, Thermometer, TreePine, Truck, Wrench, Zap } from 'lucide-react';
import Image from 'next/image';

const IconComponents : any = {
  PaintBucket,
  Droplet,
  Zap,
  Thermometer,
  Wrench,
  Hammer,
  TreePine,
  Scissors,
  Truck,
};

const ProjectCard = ({ title, iconName, description, imageUrl }:any) => {
  const Icon = IconComponents[iconName];
  return (
    <div className="bg-gradient-to-b rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="relative h-56 overflow-hidden">
        <Image src={imageUrl} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
        <div className="absolute bottom-4 left-4 flex items-center">
          {Icon && <Icon className="w-8 h-8 text-orange-500 mr-2" />}
          <h3 className="text-xl font-bold text-orange-100">{title}</h3>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  const projects = [
    {
      title: "Interior Painting",
      iconName: "PaintBucket",
      description: "Transform your indoor spaces with our expert color consultation and painting services.",
      imageUrl: ""
    },
    {
      title: "Bathroom Remodeling",
      iconName: "Droplet",
      description: "Complete bathroom renovations, from layout changes to fixture installations.",
      imageUrl: "/api/placeholder/800/600"
    },
    {
      title: "Smart Home Installation",
      iconName: "Zap",
      description: "Integration of smart home devices, including lighting, security, and home automation systems.",
      imageUrl: "/api/placeholder/800/600"
    },
    {
      title: "HVAC Maintenance",
      iconName: "Thermometer",
      description: "Regular servicing and repairs for heating, ventilation, and air conditioning systems.",
      imageUrl: "/api/placeholder/800/600"
    },
    {
      title: "Kitchen Renovation",
      iconName: "Wrench",
      description: "Full kitchen remodels, including cabinetry, countertops, and appliance installations.",
      imageUrl: "/api/placeholder/800/600"
    },
    {
      title: "Roof Repair & Replacement",
      iconName: "Hammer",
      description: "Comprehensive roofing services, from minor repairs to full roof replacements.",
      imageUrl: "/api/placeholder/800/600"
    },
    {
      title: "Landscaping Design",
      iconName: "TreePine",
      description: "Custom landscape design and installation, including hardscaping and plant selection.",
      imageUrl: "/api/placeholder/800/600"
    },
    {
      title: "Window Treatments",
      iconName: "Scissors",
      description: "Custom window treatments, including blinds, shades, and drapery installation.",
      imageUrl: "/api/placeholder/800/600"
    },
    {
      title: "Moving & Relocation",
      iconName: "Truck",
      description: "Professional packing, moving, and unpacking services for residential and commercial clients.",
      imageUrl: "/api/placeholder/800/600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-orange-800">Our Expertise</h1>
        <p className="text-xl text-center mb-12 text-orange-900">Discover our wide range of professional home improvement services</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;