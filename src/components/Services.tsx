import React from 'react';
import { Code2, Globe2, Shield, Laptop2 } from 'lucide-react';

const services = [
  {
    icon: <Code2 size={32} />,
    title: 'Custom Software Development',
    description: 'Tailored solutions that drive business growth and operational efficiency.'
  },
  {
    icon: <Globe2 size={32} />,
    title: 'AI & Machine Learning Solutions',
    description: 'We specialize in delivering cutting-edge AI and Machine learning modeling services and solutions tailored to meet the unique needs of your organization.'
  },
  {
    icon: <Shield size={32} />,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets.'
  },
  {
    icon: <Laptop2 size={32} />,
    title: 'IT Infrastructure',
    description: 'Scalable and reliable infrastructure solutions for your business.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-[--primary] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="text-[--primary] mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;