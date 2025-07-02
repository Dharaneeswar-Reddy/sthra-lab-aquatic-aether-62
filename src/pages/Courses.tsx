
import React from 'react';
import { Navigation } from '../components/Navigation';
import { Download, ExternalLink } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: "Autonomous Underwater Vehicle Design",
      instructor: "Dr. Rajesh Kumar",
      description: "Comprehensive course covering AUV design principles, hydrodynamics, control systems, and navigation algorithms for marine robotics applications.",
      pdfAvailable: true
    },
    {
      title: "Advanced Robotics and AI",
      instructor: "Dr. Priya Sharma",
      description: "Deep dive into artificial intelligence applications in robotics, machine learning for autonomous systems, and real-time decision making.",
      pdfAvailable: true
    },
    {
      title: "Marine Systems Engineering",
      instructor: "Dr. Anil Verma",
      description: "Engineering principles for marine environments, including sensor integration, communication systems, and environmental challenges.",
      pdfAvailable: false
    },
    {
      title: "Control Systems for Autonomous Vehicles",
      instructor: "Dr. Meera Patel",
      description: "Advanced control theory applications for autonomous navigation, path planning, and obstacle avoidance in dynamic environments.",
      pdfAvailable: true
    },
    {
      title: "Computer Vision for Robotics",
      instructor: "Dr. Suresh Reddy",
      description: "Image processing, object detection, and visual SLAM techniques for robotic perception and autonomous navigation systems.",
      pdfAvailable: true
    },
    {
      title: "Embedded Systems for Marine Applications",
      instructor: "Dr. Kavitha Singh",
      description: "Hardware design, real-time systems, and embedded programming for harsh marine environments and autonomous operations.",
      pdfAvailable: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Courses
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Explore our comprehensive curriculum designed to advance knowledge in autonomous systems, 
                robotics, and marine technology. Our courses combine theoretical foundations with hands-on experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <div 
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 p-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {course.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {course.instructor}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div className="flex flex-col space-y-2">
                    <button className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
                      <ExternalLink size={16} />
                      <span>Learn More</span>
                    </button>
                    
                    {course.pdfAvailable && (
                      <button className="flex items-center justify-center space-x-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300">
                        <Download size={16} />
                        <span>Download PDF</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Courses;
