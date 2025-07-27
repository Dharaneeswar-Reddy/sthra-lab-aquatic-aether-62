import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ChevronDown, ChevronUp } from 'lucide-react';
const Team = () => {
  const [showFullBio, setShowFullBio] = useState(false);
  const principalInvestigator = {
    name: "Dr. Himabindu Allaka",
    role: "Principal Investigator",
    specialization: "Assistant Professor, Department of Mechanical and Aerospace Engineering",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?auto=format&fit=crop&w=400&q=80",
    education: "PhD (Gold Medal & Calder Prize - RINA, UK), MSc (Summa Cum Laude)",
    shortBio: "Dr. Himabindu Allaka is currently serving as an Assistant Professor in the Department of Mechanical and Aerospace Engineering (MAE) at the Indian Institute of Technology Hyderabad (IITH) since July 2024. She brings a rich interdisciplinary background spanning mechanical engineering, marine technologies, control systems, AI/ML, mechatronics, and robotics programming. Prior to joining IITH, she worked as a Manager at the Production Technology Development Centre, L&T Defence, where she was deeply involved in the development of AI/ML algorithms aimed at enhancing surveillance, target recognition, and autonomous navigation capabilities for aerial, surface, and underwater unmanned platforms.",
    fullBio: "Her academic journey began at Jawahar Navodaya Vidyalaya, followed by a B.Tech in Mechanical Engineering from JNTU Hyderabad. She then spent seven transformative years in Israel, engaged in graduate research at both the University of Haifa and the Technion – Israel Institute of Technology, completing her MSc (Summa Cum Laude) and PhD through the Hatter Department of Marine Technologies. Her master's research focused on the 'Motion Assessment of Planing Craft in Seaway (MAPCS),' a nonlinear motion prediction model for high-speed marine crafts. Inspired by this work, she pursued her doctoral thesis titled 'Methods for Enhancing the Operationability of Autonomous Planing Monohulls,' which received the Gold Medal and Calder Prize from the Royal Institute of Naval Architecture (RINA), UK, recognizing it as the best research in the field. In addition to her technical research, Dr. Allaka is a passionate STEM educator and outreach advocate. She has delivered numerous invited talks and is deeply committed to hands-on learning as a pedagogical philosophy. She works closely with school teachers (primary and secondary) through continuous professional development programs, helping them integrate robotics and technology to make mathematics and science more engaging. Through workshops, training programs, and interactive demonstrations, she empowers educators and students to move beyond theory into immersive learning experiences. She is also actively involved in rural development initiatives through the institute's outreach efforts—conducting robotics sessions and lectures, and providing exposure to engineering tools for school children in general, and specifically for Zilla Parishad and Navodaya students. Outside her formal role, she devotes her free time to educating children in her neighbourhood, often building fun robotic projects together with her kids to spark curiosity and foster creativity at the grassroots level. Her academic excellence has been consistently recognized with numerous honors, including the Lady Davis Fellowship, Yoel Carasso Scholarship, Maurice Hatter Scholarship, MERCI, Yoale Karasson Fellowships, and multiple best student awards throughout her early academic years."
  };
  const mastersStudents = [{
    name: "Arjun Sharma",
    specialization: "UAV Control Systems",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    shortBio: "Adaptive flight control algorithms for multi-rotor systems"
  }, {
    name: "Priya Patel",
    specialization: "Underwater Robotics",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    shortBio: "AI-based navigation for autonomous underwater vehicles"
  }, {
    name: "Raj Kumar",
    specialization: "GNSS Systems",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    shortBio: "High-precision positioning for marine applications"
  }];
  const interns = [{
    name: "Sneha Reddy",
    specialization: "Computer Vision",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    shortBio: "Object detection for autonomous systems"
  }, {
    name: "Vikram Singh",
    specialization: "Control Systems",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=crop&w=400&q=80",
    shortBio: "Robust control for underwater vehicles"
  }];
  const btechStudents = [{
    name: "Aditya Gupta",
    specialization: "Embedded Systems",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    shortBio: "Hardware development for ROV systems"
  }, {
    name: "Kavya Nair",
    specialization: "Machine Learning",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    shortBio: "AI algorithms for autonomous navigation"
  }, {
    name: "Rohit Verma",
    specialization: "Mechanical Design",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    shortBio: "Propulsion systems for unmanned vehicles"
  }];
  const TeamMemberCard = ({
    member,
    showEducation = false
  }) => <div className="academic-card p-6 hover:scale-105 transition-transform duration-200">
      <div className="mb-4">
        <img src={member.image} alt={member.name} className="w-full h-64 object-cover rounded-lg" />
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {member.name}
        </h3>
        {member.role && <p className="text-primary font-semibold mb-2">{member.role}</p>}
        <p className="text-gray-600 font-medium mb-3">{member.specialization}</p>
        
        <div className="border-t border-gray-200 pt-3">
          {showEducation && member.education && <p className="text-gray-500 text-sm mb-2">
              <span className="font-medium text-gray-700">Education:</span> {member.education}
            </p>}
          
          <div className="text-gray-500 text-sm leading-relaxed">
            <span className="font-medium text-gray-700">About:</span>
            <p className="mt-1">{member.shortBio}</p>
            
            {member.fullBio && <>
                {showFullBio && <p className="mt-3">{member.fullBio}</p>}
                <button onClick={() => setShowFullBio(!showFullBio)} className="flex items-center gap-2 mt-3 text-primary hover:text-primary/80 font-medium transition-colors duration-200">
                  {showFullBio ? 'Read Less' : 'Read More'}
                  {showFullBio ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </>}
          </div>
        </div>
      </div>
    </div>;
  return <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="container-width">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
                Our Team
              </h1>
              <p className="academic-body text-lg max-w-3xl mx-auto">
                Meet the brilliant minds driving innovation in unmanned systems research at AstraM Lab.
              </p>
            </div>

            {/* Principal Investigator */}
            <div className="mb-16">
              <h2 className="academic-subheading text-center mb-8">Principal Investigator</h2>
              <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="lg:col-span-1">
                  <img src={principalInvestigator.image} alt={principalInvestigator.name} className="w-full h-96 object-cover rounded-lg shadow-md" />
                </div>
                <div className="lg:col-span-2 flex flex-col justify-start">
                  <div className="border border-blue-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 bg-slate-50">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {principalInvestigator.name}
                    </h3>
                    <p className="text-primary font-semibold mb-2">{principalInvestigator.role}</p>
                    <p className="text-gray-600 font-medium mb-4">{principalInvestigator.specialization}</p>
                    
                    <div className="border-t border-gray-200 pt-4">
                      
                      
                      <div className="text-gray-500 text-sm leading-relaxed">
                        <span className="font-medium text-gray-700"></span>
                        <p className="mt-2 text-gray-900">{principalInvestigator.shortBio}</p>
                        
                        {showFullBio && <p className="mt-3 text-gray-900">{principalInvestigator.fullBio}</p>}
                        <button onClick={() => setShowFullBio(!showFullBio)} className="flex items-center gap-2 mt-4 text-primary hover:text-primary/80 font-medium transition-colors duration-200">
                          {showFullBio ? 'Read Less' : 'Read More'}
                          {showFullBio ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Master's Students */}
            <div className="mb-16">
              <h2 className="academic-subheading text-center mb-8">Master's Students</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mastersStudents.map((student, index) => <TeamMemberCard key={index} member={student} />)}
              </div>
            </div>

            {/* Interns */}
            <div className="mb-16">
              <h2 className="academic-subheading text-center mb-8">Interns</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {interns.map((intern, index) => <TeamMemberCard key={index} member={intern} />)}
              </div>
            </div>

            {/* B.Tech Students */}
            <div>
              <h2 className="academic-subheading text-center mb-8">B.Tech Students</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {btechStudents.map((student, index) => <TeamMemberCard key={index} member={student} />)}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>;
};
export default Team;