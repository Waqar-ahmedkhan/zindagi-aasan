'use client';

import React from 'react';
import { Wrench, Zap, Droplet, Thermometer, PaintBucket, Shield } from 'lucide-react';

const ServiceCard = ({ title, Icon, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
    <Icon className="w-12 h-12 text-orange-500 mb-4" />
    <h3 className="text-xl font-semibold text-orange-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HomeRepairServicesPage = () => {
  const services = [
    {
      title: "Plumbing",
      Icon: Droplet,
      description: "Expert plumbing services for leaks, clogs, installations, and repairs."
    },
    {
      title: "Electrical",
      Icon: Zap,
      description: "Professional electrical work including wiring, installations, and troubleshooting."
    },
    {
      title: "HVAC",
      Icon: Thermometer,
      description: "Heating, ventilation, and air conditioning repair and maintenance."
    },
    {
      title: "General Repairs",
      Icon: Wrench,
      description: "Handyman services for various home repairs and improvements."
    },
    {
      title: "Painting",
      Icon: PaintBucket,
      description: "Interior and exterior painting services to refresh your home."
    },
    {
      title: "Home Security",
      Icon: Shield,
      description: "Installation and maintenance of home security systems."
    }
  ];

  return (
    <div className="min-h-screen bg-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-orange-800">Home Repair Services</h1>
        <p className="text-xl text-center mb-12 text-orange-700">Professional solutions for all your home maintenance needs</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeRepairServicesPage;