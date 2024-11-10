
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-[--primary] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[--primary] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[--primary] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[--primary] focus:border-transparent"
                ></textarea>
              </div>
              <button className="w-full btn-primary">Send Message</button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[--primary] text-white rounded-lg">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-600">137 Juniper Street, Woodstock,<br />Cape Town, South Africa</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[--primary] text-white rounded-lg">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600">contact@lineageglobal.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[--primary] text-white rounded-lg">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">+27 67 828 0287</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;