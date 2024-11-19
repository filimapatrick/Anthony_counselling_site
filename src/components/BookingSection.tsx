import React from 'react';
import { Calendar, Clock, Phone, Mail } from 'lucide-react';

function BookingSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-rose-50 to-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-light text-gray-800 mb-6">
              Want to Make a Booking?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Take the first step towards your emotional well-being. Schedule a consultation with our experienced therapists and begin your journey to a healthier, happier life.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Calendar className="w-8 h-8 text-rose-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600">Choose from various available time slots that suit your schedule</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Clock className="w-8 h-8 text-rose-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Session Duration</h3>
                <p className="text-gray-600">50-minute individual sessions tailored to your needs</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <Phone className="w-5 h-5 text-rose-600 mr-3" />
                <span>Call us: +1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Mail className="w-5 h-5 text-rose-600 mr-3" />
                <span>Email: appointments@counseling.com</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-light text-gray-800 mb-6">Schedule Your Session</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-600 focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-600 focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-600 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-600 focus:border-transparent"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-600 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type of Session</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-600 focus:border-transparent">
                  <option value="">Select a session type</option>
                  <option value="individual">Individual Therapy</option>
                  <option value="couples">Couples Counseling</option>
                  <option value="family">Family Therapy</option>
                  <option value="group">Group Session</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-600 focus:border-transparent"
                  placeholder="Tell us briefly about your concerns..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg transition-all font-medium"
              >
                Schedule Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingSection;