
import React from 'react';
import { Navigation } from '../components/Navigation';
import { Mail, Phone, MapPin, Clock, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <Navigation />
      <div className="pt-20">
        <section className="py-20 bg-navy-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-cyan-400">Contact Us</h1>
                <p className="text-xl text-gray-300">
                  Get in touch with AstraM Lab for research collaborations, partnerships, or inquiries.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="bg-gradient-to-br from-navy-800/50 to-navy-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-cyan-400 mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-cyan-400/20 rounded-full border border-cyan-500/30">
                        <MapPin className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                        <p className="text-gray-300">AstraM Laboratory</p>
                        <p className="text-gray-300">Department of Aerospace Engineering</p>
                        <p className="text-gray-300">Indian Institute of Technology Hyderabad</p>
                        <p className="text-gray-300">Kandi, Sangareddy, Telangana 502285</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-cyan-400/20 rounded-full border border-cyan-500/30">
                        <Mail className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                        <a href="mailto:astramlab@iith.ac.in" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                          astramlab@iith.ac.in
                        </a>
                        <br />
                        <a href="mailto:himabindu@ae.iith.ac.in" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                          himabindu@ae.iith.ac.in
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-cyan-400/20 rounded-full border border-cyan-500/30">
                        <Phone className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                        <p className="text-gray-300">+91 40 2301 6032</p>
                        <p className="text-gray-300">+91 XXXXX XXXXX (Lab)</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-cyan-400/20 rounded-full border border-cyan-500/30">
                        <Globe className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
                        <a href="https://www.iith.ac.in" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                          www.iith.ac.in
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-cyan-400/20 rounded-full border border-cyan-500/30">
                        <Clock className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Office Hours</h3>
                        <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-300">Saturday: 9:00 AM - 1:00 PM</p>
                        <p className="text-gray-300">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Form */}
                <div className="bg-gradient-to-br from-navy-800/50 to-navy-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-cyan-400 mb-6">Quick Contact</h2>
                  
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 bg-navy-800 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 bg-navy-800 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-3 bg-navy-800 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                        placeholder="Inquiry subject"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-3 bg-navy-800 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-vertical"
                        placeholder="Your message..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-ocean text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
              
              {/* Additional Information */}
              <div className="mt-12 bg-gradient-to-r from-navy-800/30 to-navy-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Interested in Collaboration?</h3>
                <p className="text-gray-300 mb-6">
                  We welcome collaborations with industry partners, research institutions, and academic organizations. 
                  Contact us to discuss potential research partnerships and joint projects in unmanned systems technology.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="mailto:astramlab@iith.ac.in" className="bg-gradient-ocean text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                    Research Partnerships
                  </a>
                  <a href="mailto:astramlab@iith.ac.in" className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-navy-950 transition-all duration-300">
                    Industry Collaboration
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
