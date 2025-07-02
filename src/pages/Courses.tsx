
import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Download, ExternalLink } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: "Autonomous Underwater Vehicle Design",
      instructor: "Dr. Himabindu Allaka",
      description: "Comprehensive course covering AUV design principles, hydrodynamics, control systems, and navigation algorithms for marine robotics applications.",
      pdfAvailable: true
    },
    {
      title: "Advanced Robotics and AI",
      instructor: "Dr. Himabindu Allaka",
      description: "Deep dive into artificial intelligence applications in robotics, machine learning for autonomous systems, and real-time decision making.",
      pdfAvailable: true
    },
    {
      title: "Marine Systems Engineering",
      instructor: "Dr. Himabindu Allaka",
      description: "Engineering principles for marine environments, including sensor integration, communication systems, and environmental challenges.",
      pdfAvailable: false
    },
    {
      title: "Control Systems for Autonomous Vehicles",
      instructor: "Dr. Himabindu Allaka",
      description: "Advanced control theory applications for autonomous navigation, path planning, and obstacle avoidance in dynamic environments.",
      pdfAvailable: true
    },
    {
      title: "Computer Vision for Robotics",
      instructor: "Dr. Himabindu Allaka",
      description: "Image processing, object detection, and visual SLAM techniques for robotic perception and autonomous navigation systems.",
      pdfAvailable: true
    },
    {
      title: "Embedded Systems for Marine Applications",
      instructor: "Dr. Himabindu Allaka",
      description: "Hardware design, real-time systems, and embedded programming for harsh marine environments and autonomous operations.",
      pdfAvailable: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="container-width">
            <div className="text-center mb-12">
              <h1 className="academic-heading">
                Courses
              </h1>
              <p className="academic-body text-lg max-w-4xl mx-auto">
                Explore our comprehensive curriculum designed to advance knowledge in autonomous systems, 
                robotics, and marine technology. Our courses combine theoretical foundations with hands-on experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <div 
                  key={index}
                  className="academic-card p-6 hover:scale-105 transition-transform duration-200"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {course.title}
                  </h3>
                  <p className="text-primary font-semibold mb-3">
                    {course.instructor}
                  </p>
                  <p className="academic-body mb-6">
                    {course.description}
                  </p>
                  
                  <div className="flex flex-col space-y-2">
                    <button className="academic-button-primary flex items-center justify-center space-x-2">
                      <ExternalLink size={16} />
                      <span>Learn More</span>
                    </button>
                    
                    {course.pdfAvailable && (
                      <button className="academic-button-secondary flex items-center justify-center space-x-2">
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
      <Footer />
    </div>
  );
};

export default Courses;
