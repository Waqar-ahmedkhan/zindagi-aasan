import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const SocialIcon = ({ Icon, color }) => (
  <a href="#" className={`${color} shadow-lg font-normal h-12 w-12 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2 mb-2 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl`}>
    <Icon size={24} />
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-300 via-orange-200 to-orange-200 text-white pt-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-4xl font-extrabold mb-4 text-white drop-shadow-md"><span className='text-black font-bold'>Zindagi</span><span className='text-orange-500 font-medium'>Asaan</span></h4>
            <h5 className="text-xl mb-6 font-light text-orange-100">
              Simplifying your life, one service at a time
            </h5>
            <div className="mt-6 flex flex-wrap">
              <SocialIcon Icon={Facebook} color="bg-blue-600 hover:bg-blue-700" />
              <SocialIcon Icon={Twitter} color="bg-blue-400 hover:bg-blue-500" />
              <SocialIcon Icon={Linkedin} color="bg-blue-700 hover:bg-blue-800" />
              <SocialIcon Icon={Instagram} color="bg-pink-600 hover:bg-pink-700" />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4 mt-12 lg:mt-0">
            <div className="flex flex-wrap items-top">
              <div className="w-full sm:w-6/12 lg:w-4/12 px-4 ml-auto mb-8 lg:mb-0">
                <span className="block uppercase text-orange-500 text-sm font-bold mb-4">Services</span>
                <ul className="list-none">
                  {['Plumbing', 'Electrical', 'Cleaning', 'Home Repairs'].map((service, index) => (
                    <li key={index}>
                      <a className="text-white hover:text-orange-500 font-medium block pb-2 text-sm transition-colors duration-300" href="#">{service}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full sm:w-6/12 lg:w-4/12 px-4">
                <span className="block uppercase text-orange-500 text-sm font-bold mb-4">Company</span>
                <ul className="list-none">
                  {['About Us', 'Our Team', 'Testimonials', 'Contact'].map((item, index) => (
                    <li key={index}>
                      <a className="text-white hover:text-orange-400 font-medium block pb-2 text-sm transition-colors duration-300" href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-10 border-orange-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center mb-6 md:mb-0">
            <div className="text-sm text-orange-200 font-medium py-1">
              © {new Date().getFullYear()} Zindagi Asan. All rights reserved.
            </div>
          </div>
          <div className="w-full md:w-8/12 px-4 mx-auto">
            <div className="flex flex-wrap justify-center md:justify-end">
              {[
                { Icon: Phone, text: '(123) 456-7890', href: 'tel:+1234567890' },
                { Icon: Mail, text: 'info@zindagiasan.com', href: 'mailto:info@zindagiasan.com' },
                { Icon: MapPin, text: '123 Service St, Easy City, EC 12345', href: '#' }
              ].map(({ Icon, text, href }, index) => (
                <a key={index} href={href} className="flex items-center text-orange-100 hover:text-white mr-6 mb-2 md:mb-0 transition-colors duration-300">
                  <Icon size={18} className="mr-2" />
                  <span className="text-sm font-medium">{text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
