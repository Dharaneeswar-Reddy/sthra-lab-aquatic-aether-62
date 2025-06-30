
import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, this would send the data to a server
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
      title: "PhD Position - Autonomous Underwater Systems",
      type: "PhD",
      description: "Research position focusing on AI-powered navigation systems for autonomous underwater vehicles.",
      requirements: ["M.Tech/MS in Robotics/Electrical Engineering", "Strong background in control systems", "Programming experience in Python/C++"]
    },
    {
      title: "Research Intern - UAV Control Systems",
      type: "Internship",
      description: "Summer internship opportunity for undergraduate students interested in UAV research.",
      requirements: ["B.Tech student (3rd/4th year)", "Interest in robotics and control systems", "Basic programming knowledge"]
    },
    {
      title: "Post-Doctoral Researcher - GNSS Systems",
      type: "Post-Doc",
      description: "Post-doctoral position in high-precision GNSS applications for marine robotics.",
      requirements: ["PhD in relevant field", "Experience with GNSS/GPS systems", "Publications in top-tier journals"]
    },
    {
      title: "M.Tech Thesis Student - Mars Rover Navigation",
      type: "M.Tech",
      description: "Thesis opportunity in autonomous navigation systems for planetary exploration.",
      requirements: ["M.Tech student in relevant discipline", "Strong mathematical background", "Interest in space robotics"]
    }
  ];

  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <Navigation />
      <div className="pt-20">
        <section className="py-20 bg-gradient-to-b from-navy-950 to-navy-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-tech-yellow bg-clip-text text-transparent">
                Join Our Team
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Be part of cutting-edge research in unmanned systems. We're always looking for passionate researchers and students.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Available Positions */}
              <div>
                <h2 className="text-3xl font-bold text-cyan-400 mb-8">Available Positions</h2>
                <div className="space-y-6">
                  {positions.map((position, index) => (
                    <div 
                      key={index}
                      className="bg-gradient-to-r from-navy-800/50 to-navy-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-white">{position.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          position.type === 'PhD' ? 'bg-cyan-400 text-navy-950' :
                          position.type === 'Post-Doc' ? 'bg-tech-yellow text-navy-950' :
                          position.type === 'Internship' ? 'bg-ocean-400 text-white' :
                          'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        }`}>
                          {position.type}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {position.description}
                      </p>
                      
                      <div>
                        <h4 className="text-cyan-400 font-medium mb-2">Requirements:</h4>
                        <ul className="text-gray-400 text-sm space-y-1">
                          {position.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start">
                              <span className="text-cyan-400 mr-2">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Application Form */}
              <div>
                <h2 className="text-3xl font-bold text-cyan-400 mb-8">Apply Now</h2>
                <div className="bg-gradient-to-r from-navy-800/50 to-navy-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-navy-800 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-navy-800 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-gray-300 font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-navy-800 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="position" className="block text-gray-300 font-medium mb-2">
                        Position of Interest *
                      </label>
                      <select
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-navy-800 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      >
                        <option value="">Select a position</option>
                        <option value="phd">PhD Position</option>
                        <option value="postdoc">Post-Doctoral Researcher</option>
                        <option value="mtech">M.Tech Thesis Student</option>
                        <option value="intern">Research Intern</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-navy-800 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-vertical"
                        placeholder="Tell us about your background, research interests, and why you'd like to join AstraM Lab..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-ocean text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Submit Application</span>
                    </button>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="mt-8 bg-gradient-to-r from-navy-800/30 to-navy-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-cyan-400 mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-cyan-400" />
                      <a href="mailto:astramlab@iith.ac.in" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                        astramlab@iith.ac.in
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">+91 XXXXX XXXXX</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">IIT Hyderabad, Telangana, India</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Careers;
