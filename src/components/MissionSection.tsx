
import React from 'react';

export const MissionSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="academic-heading">
            Our Mission
          </h2>
          
          <div className="academic-card p-8 mb-12">
            <p className="text-2xl md:text-3xl leading-relaxed font-light text-blue-800">
              "Advancing frontier research in unmanned systems across air, water, and underwater domains."
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="academic-card p-6">
              <h3 className="text-xl font-bold mb-3 text-blue-800">Innovation</h3>
              <p className="academic-body">
                Pioneering cutting-edge technologies for autonomous navigation and control systems.
              </p>
            </div>
            
            <div className="academic-card p-6">
              <h3 className="text-xl font-bold mb-3 text-blue-800">Excellence</h3>
              <p className="academic-body">
                Maintaining the highest standards in research quality and scientific rigor.
              </p>
            </div>
            
            <div className="academic-card p-6">
              <h3 className="text-xl font-bold mb-3 text-blue-800">Impact</h3>
              <p className="academic-body">
                Creating solutions that address real-world challenges in unmanned systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
