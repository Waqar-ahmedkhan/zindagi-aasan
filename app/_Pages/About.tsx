"use client"
import { Brush, Check, ChevronDown, ChevronUp, Package, Shirt, ShowerHead, Wrench, Zap } from 'lucide-react';
import { useState } from 'react';

const services = [
  { name: 'Painting', icon: Brush, description: 'Transform your space with our expert painting services.' },
  { name: 'Cleaning', icon: ShowerHead, description: 'Well make your home sparkle from top to bottom.' },
  { name: 'Laundry', icon: Shirt, description: 'Fresh, clean clothes without the hassle.' },
  { name: 'Moving', icon: Package, description: 'Stress-free relocation services for your peace of mind.' },
  { name: 'Plumbing', icon: Wrench, description: 'Swift solutions for all your plumbing needs.' },
  { name: 'Electrical', icon: Zap, description: 'Powering your home safely and efficiently.' },
];

const features = [
  {
    title: 'Professional and experienced team',
    description: 'Our team consists of highly skilled professionals with years of experience in the industry. We continuously train and update our knowledge to provide you with the best service possible.',
    details: ['Average 10+ years of experience', '100% certified professionals', 'Regular training and skill updates']
  },
  {
    title: 'Affordable and transparent pricing',
    description: 'We believe in fair and transparent pricing. No hidden fees or surprise charges. Get a detailed quote upfront and pay only for what you need.',
    details: ['Competitive market rates', 'Detailed itemized invoices', 'Flexible payment options']
  },
  {
    title: '100% satisfaction guarantee',
    description: 'Your satisfaction is our top priority. If youre not completely satisfied with our service, well make it right or your money back.',
    details: ['No questions asked refund policy', '24/7 customer support', 'Follow-up service checks']
  },
  {
    title: 'Flexible scheduling to fit your needs',
    description: 'We understand that your time is valuable. Thats why we offer flexible scheduling options to ensure our services fit seamlessly into your busy life.',
    details: ['Evening and weekend appointments', 'Emergency services available', 'Online scheduling system']
  }
];

const FeatureItem = ({ feature }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white bg-opacity-90 rounded-lg p-4 shadow-md transition-all duration-300 ease-in-out hover:shadow-lg">
     
      <div 
        className="flex items-center cursor-pointer" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-4">
          <Check className="w-6 h-6 text-white" />
        </div>
        <p className="text-orange-800 font-semibold flex-grow">{feature.title}</p>
        {isExpanded ? (
          <ChevronUp className="w-6 h-6 text-orange-500" />
        ) : (
          <ChevronDown className="w-6 h-6 text-orange-500" />
        )}
      </div>
      {isExpanded && (
        <div className="mt-4 pl-14">
          <p className="text-gray-600 mb-2">{feature.description}</p>
          <ul className="list-disc pl-5 text-gray-600">
            {feature.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const AboutUs = () => {
  return (
    <>


    <div className="min-h-screen bg-gradient-to-b from-orange-200 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-extrabold mb-4 animate-fade-in">
            <span className="text-orange-500">About Us</span>
          </h1>
          <div className="w-40 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-2xl text-orange-900 max-w-3xl mx-auto animate-slide-up">
            We're more than just a service - we're your partners in creating a comfortable, 
            beautiful, and functional home. Our team of experts is dedicated to making your life easier, 
            one task at a time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-90 rounded-lg overflow-hidden animate-fade-in hover:transform hover:scale-105 transition-all duration-300 shadow-lg"
              style={{animationDelay: `${index * 150}ms`}}
            >
              <div className="p-8 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-orange-800 mb-4">{service.name}</h2>
                <p className="text-orange-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center animate-fade-in" style={{animationDelay: '900ms'}}>
          <h2 className="text-4xl font-bold text-orange-800 mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {features.map((feature, index) => (
              <FeatureItem key={index} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
    
    </>

  );
};

export default AboutUs;