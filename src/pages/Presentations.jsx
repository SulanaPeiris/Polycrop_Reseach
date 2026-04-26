import { FiMonitor, FiPlayCircle } from 'react-icons/fi';

const presentations = [
  { title: 'Proposal Presentation', desc: 'Slides from the initial project proposal defense.', date: 'Feb 2025' },
  { title: 'Progress Presentation 1', desc: 'Slides showing 50% completion and initial integrations.', date: 'May 2025' },
  { title: 'Progress Presentation 2', desc: 'Slides showing 90% completion and system testing.', date: 'Aug 2025' },
  { title: 'Final Presentation', desc: 'Comprehensive slide deck for final project evaluation.', date: 'Oct 2025' }
];

const Presentations = () => {
  return (
    <div className="py-24 bg-white min-h-screen font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Presentations</h1>
          <p className="text-xl text-gray-500">Slide decks from our project evaluations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {presentations.map((pres, idx) => (
            <div key={idx} className="flex flex-col bg-slate-50 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="h-48 bg-emerald-100/50 flex items-center justify-center relative group cursor-pointer">
                <div className="absolute inset-0 bg-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <FiPlayCircle size={48} className="text-white drop-shadow-md" />
                </div>
                <FiMonitor size={64} className="text-emerald-300" />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{pres.title}</h3>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full whitespace-nowrap ml-2">
                    {pres.date}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-6 flex-grow">{pres.desc}</p>
                <button className="w-full py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-emerald-500 hover:text-emerald-600 transition-colors">
                  View Slides
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Presentations;
