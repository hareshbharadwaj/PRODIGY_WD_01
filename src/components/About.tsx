import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Our Company
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Founded in 2023, our mission is to create beautiful, functional, and accessible websites that help businesses succeed online. We combine cutting-edge technology with timeless design principles to deliver exceptional digital experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Our team of designers and developers work collaboratively to ensure that every project exceeds expectations, delivering value to both businesses and their users.
            </p>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
              Learn More
            </button>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl shadow-xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team working together" 
                className="w-full h-full object-cover mix-blend-overlay opacity-75"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-xl z-0 opacity-70 dark:opacity-50"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-600 rounded-xl z-0 opacity-70 dark:opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;