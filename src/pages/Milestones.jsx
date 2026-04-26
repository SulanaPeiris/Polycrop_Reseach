import { FiCheckCircle, FiClock } from 'react-icons/fi';

const milestones = [
  {
    title: 'Project Proposal',
    date: 'February 2025',
    marks: '10%',
    desc: 'Initial research idea, problem definition, objectives, and proposed solution were presented to the evaluation panel.',
    status: 'Completed'
  },
  {
    title: 'Progress Presentation 1',
    date: 'May 2025',
    marks: '15%',
    desc: 'Demonstration of 50% project completion including hardware integration, basic UI, and initial AI model training.',
    status: 'Pending'
  },
  {
    title: 'Progress Presentation 2',
    date: 'August 2025',
    marks: '15%',
    desc: 'Demonstration of 90% project completion. Full system integration and testing results presentation.',
    status: 'Pending'
  },
  {
    title: 'Final Assessment',
    date: 'October 2025',
    marks: '40%',
    desc: 'Final demonstration of the complete working prototype, research paper evaluation, and final thesis submission.',
    status: 'Pending'
  },
  {
    title: 'Viva',
    date: 'November 2025',
    marks: '20%',
    desc: 'Individual oral examination regarding the research contribution and technical knowledge.',
    status: 'Pending'
  }
];

const Milestones = () => {
  return (
    <div className="py-24 bg-white min-h-screen font-poppins">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Project Milestones</h1>
          <p className="text-xl text-gray-500">Timeline and evaluation criteria for the research project</p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-emerald-500 before:via-emerald-200 before:to-transparent">
          {milestones.map((item, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 ${item.status === 'Completed' ? 'bg-emerald-500 text-white' : 'bg-white text-gray-300'}`}>
                {item.status === 'Completed' ? <FiCheckCircle size={18} /> : <FiClock size={18} />}
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${item.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                    {item.status}
                  </span>
                </div>
                <div className="flex gap-4 text-sm font-medium text-gray-500 mb-4">
                  <span>📅 {item.date}</span>
                  <span className="text-emerald-600">🎯 Marks: {item.marks}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Milestones;
