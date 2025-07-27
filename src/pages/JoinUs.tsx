import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Mail, Phone, MapPin, Clock, Globe, Send } from 'lucide-react';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      message: ''
    });
  };

  const positions = [
    {
      title: "Research Intern - Autonomous Systems",
      type: "Internship",
      description: "Summer internship opportunity for undergraduate students interested in autonomous systems research.",
      requirements: [
        "B.Tech student (3rd/4th year)",
        "Interest in robotics and control systems",
        "Basic programming knowledge"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-800">
                Join Us
              </h1>
              <p className="text-xl text-gray-900 max-w-3xl mx-auto">
                Be part of cutting-edge research in unmanned systems. We're always looking for passionate researchers and students.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Available Positions */}
              <div>
                <h2 className="text-3xl font-bold text-blue-800 mb-8">Available Positions</h2>
                <div className="space-y-6">
                  {positions.map((position, index) => (
                    <div key={index} className="bg-white border border-blue-200 rounded-2xl p-6 hover:border-blue-300 transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-blue-800">{position.title}</h3>
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-600 text-white">
                          {position.type}
                        </span>
                      </div>
                      
                      <p className="text-gray-900 mb-4 leading-relaxed">
                        {position.description}
                      </p>
                      
                      <div>
                        <h4 className="text-gray-900 font-medium mb-2">Requirements:</h4>
                        <ul className="text-gray-900 text-sm space-y-1">
                          {position.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start">
                              <span className="text-blue-800 mr-2">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Application Form */}
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-blue-800 mb-6">Apply Now</h3>
                  <div className="bg-white border border-blue-200 rounded-2xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-900 font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-blue-300 rounded-lg text-gray-900 placeholder-gray-400 focus:border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-gray-900 font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-blue-300 rounded-lg text-gray-900 placeholder-gray-400 focus:border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-gray-900 font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white border border-blue-300 rounded-lg text-gray-900 placeholder-gray-400 focus:border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>

                      <div>
                        <label htmlFor="position" className="block text-gray-900 font-medium mb-2">
                          Position of Interest *
                        </label>
                        <select
                          id="position"
                          name="position"
                          value={formData.position}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-blue-300 rounded-lg text-gray-900 focus:border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                        >
                          <option value="">Select a position</option>
                          <option value="intern">Research Intern</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-gray-900 font-medium mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="w-full px-4 py-3 bg-white border border-blue-300 rounded-lg text-gray-900 placeholder-gray-400 focus:border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-vertical"
                          placeholder="Tell us about your background, research interests, and why you'd like to join AstraM Lab..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-blue-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-900 transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Send className="w-5 h-5" />
                        <span>Submit Application</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-blue-800 mb-8">Contact Information</h2>
                <div className="bg-white border border-blue-800 rounded-2xl p-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full border border-blue-800">
                        <MapPin className="w-6 h-6 text-blue-800" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-blue-800 mb-2">Address</h3>
                        <p className="text-gray-900">Dr. Himabindu Allaka</p>
                        <p className="text-gray-900">Academic Block, C – 604</p>
                        <p className="text-gray-900">Mechanical and Aerospace Engineering</p>
                        <p className="text-gray-900">Indian Institute of Technology, Hyderabad</p>
                        <p className="text-gray-900">Sangareddy, 502284</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full border border-blue-800">
                        <Mail className="w-6 h-6 text-blue-800" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-blue-800 mb-2">Email</h3>
                        <a href="mailto:Himabindu.allaka@mae.iith.ac.in" className="text-blue-700 hover:text-blue-900 transition-colors duration-300">
                          Himabindu.allaka@mae.iith.ac.in
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full border border-blue-800">
                        <Phone className="w-6 h-6 text-blue-800" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-blue-800 mb-2">Phone</h3>
                        <p className="text-gray-900">+91 40 2301 6032</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full border border-blue-800">
                        <Globe className="w-6 h-6 text-blue-800" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-blue-800 mb-2">Website</h3>
                        <a href="https://www.iith.ac.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition-colors duration-300">
                          www.iith.ac.in
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full border border-blue-800">
                        <Clock className="w-6 h-6 text-blue-800" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-blue-800 mb-2">Office Hours</h3>
                        <p className="text-gray-900">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-900">Saturday: 9:00 AM - 1:00 PM</p>
                        <p className="text-gray-900">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Additional Information */}
                <div className="mt-8 bg-white border border-blue-800 rounded-2xl p-6 text-center">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">Interested in Collaboration?</h3>
                  <p className="text-gray-900 mb-4">
                    We welcome collaborations with industry partners, research institutions, and academic organizations. 
                    Contact us to discuss potential research partnerships and joint projects in unmanned systems technology.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a href="mailto:Himabindu.allaka@mae.iith.ac.in" className="bg-blue-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-900 transition-all duration-300">
                      Research Partnerships
                    </a>
                    <a href="mailto:Himabindu.allaka@mae.iith.ac.in" className="border-2 border-blue-800 text-blue-800 px-4 py-2 rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition-all duration-300">
                      Industry Collaboration
                    </a>
                  </div>
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

export default JoinUs;