import { FiFileText, FiDownload } from 'react-icons/fi';

const docs = [
  { title: 'Project Charter', desc: 'Official authorization of the project including scope, objectives, and stakeholders.', type: 'PDF' },
  { title: 'Proposal Document', desc: 'Detailed research proposal submitted for initial approval.', type: 'PDF' },
  { title: 'Check List Documents', desc: 'Status checklists for various evaluation phases.', type: 'PDF' },
  { title: 'Research Paper', desc: 'Draft/Final research paper prepared for publication.', type: 'PDF' },
  { title: 'Final Thesis', desc: 'Complete research thesis book including all findings and methodology.', type: 'PDF' },
  { title: 'Final Report', desc: 'Summary report of the project outcomes and future work.', type: 'PDF' }
];

const Documents = () => {
  return (
    <div className="py-24 bg-slate-50 min-h-screen font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Project Documents</h1>
          <p className="text-xl text-gray-500">Downloadable resources and deliverables</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {docs.map((doc, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-emerald-100 transition-all group">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FiFileText size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{doc.title}</h3>
              <p className="text-gray-500 text-sm mb-6 line-clamp-2">{doc.desc}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded-md">{doc.type}</span>
                <a href="#" className="flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 bg-emerald-50 px-4 py-2 rounded-xl transition-colors">
                  <FiDownload /> Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documents;
