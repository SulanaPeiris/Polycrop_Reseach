import { FiMail } from 'react-icons/fi';

const teamMembers = [
  {
    id: "IT22305978",
    name: "T.W.M.J.C Wijethunga",
    role: "RFID-Based IoT Robot and Precision Spraying",
    desc: "Focuses on autonomous cucumber plant identification using RFID tags, real-time leaf scanning, and precision spraying.",
    color: "emerald"
  },
  {
    id: "IT22892294",
    name: "Thotahewa A.H.T.P.P.",
    role: "Disease and Water Stress Detection",
    desc: "Detects Downy Mildew, Powdery Mildew, and water stress using AI-based image processing with YOLOv8 and CNN.",
    color: "blue"
  },
  {
    id: "IT22925190",
    name: "Chandrasekara D.D.",
    role: "Nutrition Management and Growth Monitoring",
    desc: "Manages plant nutrition using NPK sensors, flower/fruit detection, and automated fertigation based on growth stage.",
    color: "amber"
  },
  {
    id: "IT22326386",
    name: "Peiris P.S.S.",
    role: "LoRa Networking and Ripe Detection",
    desc: "Creates a reliable LoRa-based communication framework and implements cucumber ripeness detection.",
    color: "purple"
  }
];

const About = () => {
  return (
    <div className="py-24 bg-slate-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Research Team</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">Meet the researchers behind the LoRa-Enabled Smart Cucumber Polytunnel System.</p>
        </div>

        {/* Supervisors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full mb-4 flex items-center justify-center border-4 border-emerald-50">
              <span className="text-gray-400 text-sm">Photo</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Dr. Supervisor Name</h3>
            <p className="text-emerald-600 font-medium mb-2">Supervisor</p>
            <p className="text-gray-500 text-sm">Sri Lanka Institute of Information Technology</p>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full mb-4 flex items-center justify-center border-4 border-lime-50">
              <span className="text-gray-400 text-sm">Photo</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Mr. Co-Supervisor Name</h3>
            <p className="text-lime-600 font-medium mb-2">Co-Supervisor</p>
            <p className="text-gray-500 text-sm">Sri Lanka Institute of Information Technology</p>
          </div>
        </div>

        {/* Team Members */}
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">Group Members (25-26J-306)</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className={`h-32 bg-${member.color}-100 w-full relative`}>
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-full p-1 shadow-sm">
                  <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-gray-400 text-xs">Photo</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-14 pb-8 px-6 text-center flex-grow flex flex-col">
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full my-2 mx-auto">
                  {member.id}
                </span>
                <p className={`text-sm font-medium text-${member.color}-600 mb-4`}>
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm flex-grow mb-6">
                  {member.desc}
                </p>
                
                <button className="w-full py-2 flex items-center justify-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors mt-auto">
                  <FiMail /> Contact
                </button>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default About;
