'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Droplet, PaintBucket, Phone, Shield, Thermometer, Wrench, Zap } from 'lucide-react';
import { useState } from 'react';

const ServiceCard = ({ title, Icon, description, details }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      layout
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Icon className="w-8 h-8 text-orange-500 mr-3" />
          <h3 className="text-xl font-semibold text-orange-800">{title}</h3>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-orange-500 hover:text-orange-700"
        >
          {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            <button className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition-colors duration-300 flex items-center">
              <Phone size={18} className="mr-2" />
              Schedule Service
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const HomeRepairServicesPage = () => {
  const services = [
    {
      title: "Plumbing",
      Icon: Droplet,
      description: "Expert plumbing services for leaks, clogs, installations, and repairs.",
      details: [
        "24/7 emergency plumbing services",
        "Pipe repair and replacement",
        "Drain cleaning and unclogging",
        "Water heater installation and repair"
      ]
    },
    {
      title: "Electrical",
      Icon: Zap,
      description: "Professional electrical work including wiring, installations, and troubleshooting.",
      details: [
        "Electrical panel upgrades",
        "Wiring and rewiring services",
        "Lighting installation and repair",
        "Surge protection installation"
      ]
    },
    {
      title: "HVAC",
      Icon: Thermometer,
      description: "Heating, ventilation, and air conditioning repair and maintenance.",
      details: [
        "AC and furnace repair and maintenance",
        "Ductwork cleaning and repair",
        "Thermostat installation and programming",
        "Energy-efficient system upgrades"
      ]
    },
    {
      title: "General Repairs",
      Icon: Wrench,
      description: "Handyman services for various home repairs and improvements.",
      details: [
        "Drywall repair and installation",
        "Door and window repairs",
        "Flooring repairs and installation",
        "Cabinet and furniture assembly"
      ]
    },
    {
      title: "Painting",
      Icon: PaintBucket,
      description: "Interior and exterior painting services to refresh your home.",
      details: [
        "Interior and exterior painting",
        "Color consultation services",
        "Wallpaper removal and installation",
        "Deck and fence staining"
      ]
    },
    {
      title: "Home Security",
      Icon: Shield,
      description: "Installation and maintenance of home security systems.",
      details: [
        "Smart home security system installation",
        "Video doorbell and camera setup",
        "Lock installation and rekeying",
        "24/7 monitoring services"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 text-orange-800">Home Repair Services</h1>
        <p className="text-xl text-center mb-12 text-orange-700">Professional solutions for all your home maintenance needs</p>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HomeRepairServicesPage;