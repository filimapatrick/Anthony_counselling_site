import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

function ContactSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-light text-gray-800 mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8">
              We're here to help. Contact us to schedule your consultation or 
              learn more about our services.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-rose-600 mr-4" />
                <span className="text-gray-700">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-rose-600 mr-4" />
                <span className="text-gray-700">contact@counseling.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-rose-600 mr-4" />
                <span className="text-gray-700">123 Therapy Street, Suite 100<br />New York, NY 10001</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 text-rose-600 mr-4" />
                <span className="text-gray-700">Mon-Fri: 9:00 AM - 7:00 PM<br />Sat: 10:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-600 focus:border-transparent"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-600 focus:border-transparent"
                />
              </div>
              <div>
                <textarea 
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-600 focus:border-transparent"
                />
              </div>
              <button className="w-full bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;