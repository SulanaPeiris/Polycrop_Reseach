import { Link } from 'react-router-dom';
import { FiWifi, FiActivity, FiCpu, FiDroplet, FiEye, FiSmartphone } from 'react-icons/fi';

const features = [
  {
    icon: <FiWifi className="w-8 h-8 text-emerald-500" />,
    title: 'LoRa Sensor Network',
    description: 'Real-time environmental monitoring using long-range, low-power LoRa technology for polytunnels.'
  },
  {
    icon: <FiActivity className="w-8 h-8 text-emerald-500" />,
    title: 'Disease & Water Stress Detection',
    description: 'AI-powered image analysis using YOLOv8 and CNN to detect Downy Mildew, Powdery Mildew, and water stress.'
  },
  {
    icon: <FiCpu className="w-8 h-8 text-emerald-500" />,
    title: 'RFID Scan & Spray Robot',
    description: 'Autonomous robotics identifying plants via RFID, capturing images, and executing precision spraying.'
  },
  {
    icon: <FiDroplet className="w-8 h-8 text-emerald-500" />,
    title: 'Automated Nutrition Management',
    description: 'Intelligent fertigation adjusting NPK and moisture levels based on real-time plant growth stages.'
  },
  {
    icon: <FiEye className="w-8 h-8 text-emerald-500" />,
    title: 'Cucumber Ripeness Detection',
    description: 'Computer vision framework to identify flower, fruit development, and optimum harvest time.'
  },
  {
    icon: <FiSmartphone className="w-8 h-8 text-emerald-500" />,
    title: 'Mobile Monitoring App',
    description: 'Comprehensive dashboard for farmers to receive alerts, monitor health, and control the system.'
  }
];

const Home = () => {
  return (
    <div className="w-full font-poppins">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-lime-50 -z-10" />
        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-lime-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-sm mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              Research Project 25-26J-306
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
              LoRa-Enabled <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-lime-500">Smart Cucumber</span> Polytunnel System
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              An intelligent agriculture solution integrating LoRa IoT, AI vision, autonomous robotics, and automated fertigation for cucumber farming in Sri Lanka.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/domain" 
                className="px-8 py-4 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-200 transition-all duration-200"
              >
                Explore Domain
              </Link>
              <Link 
                to="/about" 
                className="px-8 py-4 rounded-xl bg-white text-gray-700 font-semibold border border-gray-200 hover:border-emerald-200 hover:bg-emerald-50 transition-all duration-200"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Abstract/About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About The Project</h2>
          <p className="text-lg text-gray-600 leading-relaxed bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
            This research introduces a smart system for cucumber polytunnels combining IoT sensors, AI models, autonomous robots, and automated control systems. It enables early disease detection, optimized fertilization, water stress monitoring, and real-time decision-making for farmers. By integrating these advanced technologies, we aim to significantly improve crop health and yield in Sri Lankan agriculture.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core System Features</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Discover the interconnected modules that power our intelligent agriculture solution.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
