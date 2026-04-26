import { Link } from 'react-router-dom';
import { PiPlantBold } from 'react-icons/pi';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-emerald-500 p-2 rounded-lg text-white inline-flex">
                <PiPlantBold size={24} />
              </div>
              <span className="font-bold text-xl text-gray-800">PolyCrop</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              LoRa-Enabled Smart Cucumber Polytunnel System for Disease Detection, Fertilization, and Water Stress Management.
            </p>
            <div className="text-sm font-semibold text-emerald-600">
              Project ID: 25-26J-306
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/domain" className="text-gray-500 hover:text-emerald-600 text-sm transition-colors">Research Domain</Link></li>
              <li><Link to="/milestones" className="text-gray-500 hover:text-emerald-600 text-sm transition-colors">Project Milestones</Link></li>
              <li><Link to="/documents" className="text-gray-500 hover:text-emerald-600 text-sm transition-colors">Documents</Link></li>
              <li><Link to="/about" className="text-gray-500 hover:text-emerald-600 text-sm transition-colors">Our Team</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>Sri Lanka Institute of Information Technology (SLIIT)</li>
              <li>New Kandy Road, Malabe</li>
              <li>Sri Lanka</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} PolyCrop Research Group. All rights reserved.
          </p>
          <div className="text-sm text-gray-400">
            Final Year Research Project
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
