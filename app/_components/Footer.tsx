'use client';

import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ShieldCheck, Twitter, Youtube } from 'lucide-react';
import { useState } from 'react';

const SocialIcon = ({ Icon, href, color }) => (
  <a href={href} className={`${color} h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2 mb-2 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg`}>
    <Icon size={20} />
  </a>
);

const ContactItem = ({ Icon, text }) => (
  <div className="flex items-center mb-3">
    <Icon size={16} className="mr-2 text-orange-200 flex-shrink-0" />
    <span className="text-sm">{text}</span>
  </div>
);

const ServiceItem = ({ text }) => (
  <div className="mb-2">
    <span className="text-sm before:content-['•'] before:mr-2 before:text-orange-200">{text}</span>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-orange-300 py-3">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-sm">{question}</span>
        <span className="text-orange-200">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <p className="mt-2 text-sm text-orange-100">{answer}</p>}
    </div>
  );
};

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-white">Zindagi</span>
              <span className="text-orange-200">Asaan</span>
            </h2>
            <p className="text-sm text-orange-100 mb-4">Simplifying your life, one service at a time</p>
            <div className="flex flex-wrap">
              <SocialIcon Icon={Facebook} href="#" color="bg-blue-600 text-white" />
              <SocialIcon Icon={Twitter} href="#" color="bg-sky-500 text-white" />
              <SocialIcon Icon={Instagram} href="https://www.instagram.com/invites/contact/?igsh=6vdv5x04fzk8&utm_content=usim66c" color="bg-pink-600 text-white" />
              <SocialIcon Icon={Linkedin} href="https://www.linkedin.com/in/zindagi-asaan-47a247312" color="bg-blue-700 text-white" />
              <SocialIcon Icon={Youtube} href="https://youtube.com/@zindagiasaan4207?si=1HdOqRy3LyLZsgrRhttps://www.instagram.com/invites/contact/?igsh=6vdv5x04fzk8&utm_content=usim66chttps://www.linkedin.com/in/zindagi-asaan-47a247312https://www.facebook.com/profile.php?id=61560789834446&mibextid=ZbWKwL" color="bg-blue-700 text-white" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-100">Contact Us</h3>
            <ContactItem Icon={Mail} text="zindagiasaan47@gmail.com" />
            <ContactItem Icon={Phone} text="03197752385" />
            <ContactItem Icon={MapPin} text="123 Main St, Kohat, Pakistan" />
            <ContactItem Icon={Clock} text="Mon-Fri: 9am-6pm, Sat: 10am-4pm" />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-100">Our Services</h3>
            <ServiceItem text="Home Cleaning" />
            <ServiceItem text="Appliance Repair" />
            <ServiceItem text="Plumbing Services" />
            <ServiceItem text="Electrical Work" />
            <ServiceItem text="Painting Services" />
            <ServiceItem text="Pest Control" />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-100">Stay Updated</h3>
            <p className="mb-4 text-sm text-orange-100">Subscribe to our newsletter for exclusive offers and tips.</p>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="py-2 px-4 rounded-md text-orange-800 mb-2 text-sm"
                required
              />
              <button type="submit" className="bg-white text-orange-500 py-2 px-4 rounded-md hover:bg-orange-100 transition-colors duration-300 text-sm font-semibold">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4 text-orange-100">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <FAQItem 
              question="Do you offer any guarantees?" 
              answer="We offer a 100% satisfaction guarantee. If you're not happy with the service, we'll make it right or refund your money."
            />
          </div>
        </div>

        <div className="border-t border-orange-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Zindagi Asaan. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <ShieldCheck size={16} className="text-orange-200" />
              <a href="#" className="text-sm hover:text-orange-200 transition-colors duration-300">Privacy Policy</a>
              <span className="text-orange-200">|</span>
              <a href="#" className="text-sm hover:text-orange-200 transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;