import { FiMapPin, FiMail, FiSend } from 'react-icons/fi';

const Contact = () => {
  return (
    <div className="py-24 bg-slate-50 min-h-screen font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-500">Get in touch with our research team</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Contact Info */}
          <div>
            <div className="bg-emerald-600 text-white rounded-3xl p-10 h-full shadow-lg shadow-emerald-200">
              <h2 className="text-2xl font-bold mb-6">Research Group Information</h2>
              <p className="text-emerald-50 mb-10 leading-relaxed">
                We are undergraduate researchers from SLIIT working on smart agriculture solutions to improve cucumber farming in Sri Lanka.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-500 rounded-xl shrink-0"><FiMapPin size={20} /></div>
                  <div>
                    <h4 className="font-bold">University</h4>
                    <p className="text-emerald-100 text-sm">Sri Lanka Institute of Information Technology (SLIIT), New Kandy Road, Malabe.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-500 rounded-xl shrink-0"><FiMail size={20} /></div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-emerald-100 text-sm">research.polycrop@example.com</p>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-emerald-500/50">
                  <h4 className="font-bold text-sm text-emerald-200 mb-2">PROJECT ID</h4>
                  <p className="text-2xl font-black tracking-wider">25-26J-306</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  placeholder="Inquiry about research"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows="4" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors"
              >
                <FiSend /> Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
