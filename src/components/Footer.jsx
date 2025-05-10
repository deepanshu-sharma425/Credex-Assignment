import Logo from './Logo';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Logo />
            <p className="mt-4 text-gray-400 max-w-xs">
              The premier marketplace for reselling enterprise software licenses. Turn your unused assets into cash.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-gray-400 hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">For Enterprises</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">For SMBs</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">License Compliance</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Software Asset Management</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-gray-400 mt-1 mr-3" />
                <span className="text-gray-400">Deepanshu Sharma<br />Newton School of Technology</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-gray-400 mr-3" />
                <a href="tel:+917678233524" className="text-gray-400 hover:text-white transition-colors">+91 76782 33524</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-gray-400 mr-3" />
                <a href="mailto:chuiwaldeepanshu@gmail.com" className="text-gray-400 hover:text-white transition-colors">chuiwaldeepanshu@gmail.com                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} SoftSell. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;