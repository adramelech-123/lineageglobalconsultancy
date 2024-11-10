import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-[--primary] rounded-lg opacity-10"></div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
              alt="Team collaboration"
              className="relative rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Driving Innovation Through Technology
            </h2>
            <div className="w-20 h-1 bg-[--primary] mb-8"></div>
            <p className="text-gray-600 text-lg mb-8">
              Since our inception, Lineage Global Consultancy has been at the forefront of digital innovation. We combine deep technical expertise with strategic thinking to help businesses thrive in the digital age.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-5xl font-bold text-[--primary] mb-2">12+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-5xl font-bold text-[--primary] mb-2">200+</h3>
                <p className="text-gray-600">Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;