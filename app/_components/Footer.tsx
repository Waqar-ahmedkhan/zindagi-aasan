'use client';

import { ChevronDown, ChevronUp, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

const SocialIcon = ({ Icon, href }) => (
  <a href={href} className="bg-white text-orange-500 h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2 mb-2 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:bg-orange-100">
    <Icon size={20} />
  </a>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-orange-300 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && <p className="mt-2 text-orange-100">{answer}</p>}
    </div>
  );
};

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the newsletter subscription
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
          <div className="mb-8 lg:mb-0 lg:w-1/4">
            <h2 className="text-4xl font-bold mb-2">
              <span className="text-white">Zindagi</span>
              <span className="text-orange-200">Asaan</span>
            </h2>
            <p className="text-sm text-orange-100 mb-4">Simplifying your life, one service at a time</p>
            <div className="flex space-x-4">
              <SocialIcon Icon={Facebook} href="#" />
              <SocialIcon Icon={Twitter} href="#" />
              <SocialIcon Icon={Instagram} href="#" />
              <SocialIcon Icon={Linkedin} href="#" />
            </div>
          </div>

          <div className="lg:w-2/5">
            <h3 className="text-xl font-semibold mb-4 text-orange-100">Frequently Asked Questions</h3>
            <FAQItem 
              question="How do I book a service?" 
              answer="You can book a service through our website or mobile app. Simply select the service you need and choose a convenient time slot."
            />
            <FAQItem 
              question="What's your cancellation policy?" 
              answer="You can cancel or reschedule a service up to 24 hours before the appointment without any charge."
            />
            <FAQItem 
              question="Are your service providers vetted?" 
              answer="Yes, all our service providers undergo thorough background checks and are professionally trained."
            />
          </div>

          <div className="lg:w-1/4 mt-8 lg:mt-0">
            <h3 className="text-xl font-semibold mb-4 text-orange-100">Stay Updated</h3>
            <p className="mb-4 text-orange-100">Subscribe to our newsletter for exclusive offers and tips.</p>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="py-2 px-4 rounded-md text-orange-800 mb-2"
                required
              />
              <button type="submit" className="bg-white text-orange-500 py-2 px-4 rounded-md hover:bg-orange-100 transition-colors duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-orange-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Zindagi Asan. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm hover:text-orange-200 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-orange-200 transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;