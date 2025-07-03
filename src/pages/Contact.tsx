import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Mail, Phone, MapPin, Clock, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="academic-heading">Contact Us</h1>
                <p className="academic-body text-lg">
                  Get in touch with AstraM Lab for research collaborations, partnerships, or inquiries.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="academic-card p-8">
                  <h2 className="text-2xl font-bold text-blue-800 mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full border border-blue-200">
                        <MapPin className="w-6 h-6 text-blue-800" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-blue-800 mb-2">Address</h3>
                        <p className="text-blue-700">AstraM Laboratory</p>
                        <p className="text-blue-700">Department of Aerospace Engineering</p>
                        <p className="text-blue-700">Indian Institute of Technology Hyderabad</p>
                        <p className="text-blue-700">Kandi, Sangareddy, Telangana 502285</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full border border-blue-200">
                        <Mail className="w-6 h-6 text-blue-800" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-blue-800 mb-2">Email</h3>
                        <a href="mailto:astramlab@iith.ac.in" className="text-blue-800 hover:text-blue-700 transition-colors duration-300">
                          astramlab@iith.ac.in
                        </a>
                        <br />
                        <a href="mailto:himabindu@ae.iith.ac.in" className="text-blue-800 hover:text-blue-700 transition-colors duration-300">
                          himabindu@ae.iith.ac.in
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full border border-blue-200">
                        <Phone className="w-6 h-6 text-blue-800" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-blue-800 mb-2">Phone</h3>
                        <p className="text-blue-700">+91 40 2301 6032</p>
                        <p className="text-blue-700">+91 XXXXX XXXXX (Lab)</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full border border-blue-200">
                        <Globe className="w-6 h-6 text-blue-800" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-blue-800 mb-2">Website</h3>
                        <a href="https://www.iith.ac.in" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-700 transition-colors duration-300">
                          www.iith.ac.in
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full border border-blue-200">
                        <Clock className="w-6 h-6 text-blue-800" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-blue-800 mb-2">Office Hours</h3>
                        <p className="text-blue-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-blue-700">Saturday: 9:00 AM - 1:00 PM</p>
                        <p className="text-blue-700">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Form */}
                <div className="academic-card p-8">
                  <h2 className="text-2xl font-bold text-blue-800 mb-6">Quick Contact</h2>
                  
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-blue-800 font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg text-blue-800 placeholder-blue-400 focus:border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-blue-800 font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg text-blue-800 placeholder-blue-400 focus:border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-blue-800 font-medium mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg text-blue-800 placeholder-blue-400 focus:border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                        placeholder="Inquiry subject"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-blue-800 font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg text-blue-800 placeholder-blue-400 focus:border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all duration-300 resize-vertical"
                        placeholder="Your message..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="academic-button-primary w-full"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
              
              {/* Additional Information */}
              <div className="mt-12 academic-card p-8 text-center">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Interested in Collaboration?</h3>
                <p className="academic-body mb-6">
                  We welcome collaborations with industry partners, research institutions, and academic organizations. 
                  Contact us to discuss potential research partnerships and joint projects in unmanned systems technology.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="mailto:astramlab@iith.ac.in" className="academic-button-primary">
                    Research Partnerships
                  </a>
                  <a href="mailto:astramlab@iith.ac.in" className="academic-button-secondary">
                    Industry Collaboration
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
