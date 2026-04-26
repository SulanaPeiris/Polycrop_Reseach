import { FiTarget, FiSearch, FiLayers, FiActivity, FiCpu, FiWifi } from 'react-icons/fi';

const Domain = () => {
  return (
    <div className="py-24 bg-white font-poppins">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Research Domain</h1>
          <p className="text-xl text-gray-500">Exploring the problem space and proposed solution</p>
        </div>

        <div className="space-y-16">
          {/* Section 1 */}
          <section className="bg-emerald-50/50 p-8 rounded-3xl border border-emerald-100/50">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="p-2 bg-emerald-100 text-emerald-600 rounded-lg"><FiSearch /></span>
              Literature Survey
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Existing smart agriculture and IoT farming systems provide basic environmental monitoring but lack integrated solutions for cucumber polytunnels. Current implementations primarily focus on open-field farming or single-variable monitoring, creating a significant gap in comprehensive, automated care for sensitive crops like cucumbers that require precise climate and nutrient management.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="p-2 bg-rose-100 text-rose-600 rounded-lg"><FiLayers /></span>
              Research Gap
            </h2>
            <p className="text-gray-600 mb-4">Existing systems lack integration of key technologies. Our research addresses the absence of a unified system that combines:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {['AI disease detection (Downy/Powdery Mildew)', 'Water stress analysis via CNN', 'RFID plant identification for specific care', 'LoRa communication for remote polytunnels', 'Automated fertigation based on growth stage'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3 */}
          <section className="bg-slate-50 p-8 rounded-3xl border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="p-2 bg-amber-100 text-amber-600 rounded-lg"><FiTarget /></span>
              Research Problem
            </h2>
            <p className="text-xl font-medium text-gray-800 leading-relaxed italic border-l-4 border-amber-400 pl-6 py-2">
              "How can diseases be detected early, water stress accurately monitored, and fertilization efficiently managed in cucumber cultivation within Sri Lankan polytunnels to improve crop health and yield?"
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Research Objectives</h2>
            
            <div className="bg-emerald-600 text-white p-6 rounded-2xl mb-6 shadow-md shadow-emerald-200">
              <h3 className="font-bold text-lg mb-2 text-emerald-50">Main Objective</h3>
              <p className="text-emerald-50 leading-relaxed">
                Design and implement a LoRa-based smart polytunnel system that integrates real-time environmental monitoring, machine vision for disease detection, automated fertigation and irrigation management, and a mobile app for farmers to optimize cucumber cultivation in Sri Lanka.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Develop a LoRa-based sensor network for monitoring.',
                'Train AI models (YOLOv8, CNN) to detect diseases & water stress.',
                'Implement an RFID-based IoT robot for precision spraying.',
                'Develop automated nutrition management using NPK sensors.',
                'Detect cucumber growth stage and ripeness.',
                'Develop a dashboard/mobile app for farmer alerts.'
              ].map((obj, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold shrink-0">{i+1}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{obj}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="p-2 bg-blue-100 text-blue-600 rounded-lg"><FiActivity /></span>
              Methodology
            </h2>
            <div className="relative border-l-2 border-emerald-200 pl-8 space-y-8 ml-4">
              {[
                { title: 'Data Collection', desc: 'LoRa-enabled IoT nodes collect temperature, humidity, soil moisture, and NPK data.' },
                { title: 'AI Processing', desc: 'Camera-based AI pipeline detects diseases, water stress, flowers, and fruits.' },
                { title: 'Autonomous Intervention', desc: 'RFID robot identifies plants, scans leaves, and precision sprays affected areas.' },
                { title: 'Automated Control', desc: 'Fertigation system mixes nutrients according to detected plant growth stage.' },
                { title: 'Monitoring & Alerts', desc: 'Cloud backend processes data and provides real-time insights via mobile interface.' }
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-emerald-500 border-4 border-white shadow-sm" />
                  <h3 className="font-bold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 mt-1">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="p-2 bg-purple-100 text-purple-600 rounded-lg"><FiCpu /></span>
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {['React / Vite', 'Firebase', 'ESP32', 'LoRa SX1278', 'RFID MFRC522', 'YOLOv8', 'CNN', 'NPK Sensors', 'Camera Module', 'Tailwind CSS'].map((tech, i) => (
                <span key={i} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-slate-700 font-medium text-sm hover:bg-slate-100 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Domain;
