import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useBackgroundColor } from '../hooks/useBackgroundColor';
const Contact: React.FC = () => {
  const background = useBackgroundColor(7000);
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoverColor, setHoverColor] = useState('');

  const colors = [
    'text-purple-600',
    'text-pink-600',
    'text-blue-600',
    'text-green-600',
    'text-yellow-600',
    'text-red-600'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const handleMouseEnter = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setHoverColor(randomColor);
  };

  return (
    <section id="contact" className={`py-20 ${background} dark:from-gray-900 dark:to-gray-800 transition-all duration-1000`}>
    <section id="contact" className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-teal-900 dark:to-gray-800 transition-all duration-1000">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 hover:text-teal-600 hover:scale-105 transition-all duration-300 cursor-default hover:font-extrabold">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 hover:text-emerald-600 hover:font-semibold transition-all duration-300 cursor-default">
            Have a question or want to work together? Reach out to us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-500">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 hover:text-purple-600 hover:font-extrabold transition-all duration-300 cursor-default">Send Us a Message</h3>
            
            {isSubmitted ? (
              <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6 hover:scale-105 transition-all duration-300">
                <p className="text-green-700 dark:text-green-300 font-medium hover:font-bold transition-all duration-300">
                  Thank you for your message! We'll get back to you soon.
                </p>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 hover:text-purple-600 hover:font-bold transition-all duration-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 hover:text-purple-600 hover:font-bold transition-all duration-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 hover:text-purple-600 hover:font-bold transition-all duration-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  placeholder="How can we help?"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 hover:text-purple-600 hover:font-bold transition-all duration-300">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 resize-none hover:scale-105 hover:shadow-lg"
                  placeholder="Tell us what you need..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 hover:font-bold ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                      <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </div>
          
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8 hover:shadow-2xl hover:scale-105 transition-all duration-500">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 hover:text-purple-600 hover:font-extrabold transition-all duration-300 cursor-default">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4 hover:bg-purple-500 hover:text-white hover:scale-125 transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1 hover:text-purple-600 hover:font-bold transition-all duration-300">Email</h4>
                    <a href="mailto:info@example.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:font-bold">
                      info@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4 hover:bg-green-500 hover:text-white hover:scale-125 transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1 hover:text-green-600 hover:font-bold transition-all duration-300">Phone</h4>
                    <a href="tel:+1234567890" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:font-bold">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4 hover:bg-red-500 hover:text-white hover:scale-125 transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1 hover:text-red-600 hover:font-bold transition-all duration-300">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300 hover:text-purple-600 hover:font-medium transition-all duration-300">
                      123 Design Street, San Francisco, CA 94107
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-500">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 hover:text-purple-600 hover:font-extrabold transition-all duration-300 cursor-default">Office Hours</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between hover:scale-105 transition-all duration-300 cursor-default">
                  <span className="text-gray-600 dark:text-gray-300 hover:text-blue-600 hover:font-medium transition-all duration-300">Monday - Friday:</span>
                  <span className="font-medium text-gray-900 dark:text-white hover:text-green-600 hover:font-bold transition-all duration-300">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between hover:scale-105 transition-all duration-300 cursor-default">
                  <span className="text-gray-600 dark:text-gray-300 hover:text-blue-600 hover:font-medium transition-all duration-300">Saturday:</span>
                  <span className="font-medium text-gray-900 dark:text-white hover:text-yellow-600 hover:font-bold transition-all duration-300">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between hover:scale-105 transition-all duration-300 cursor-default">
                  <span className="text-gray-600 dark:text-gray-300 hover:text-blue-600 hover:font-medium transition-all duration-300">Sunday:</span>
                  <span className="font-medium text-gray-900 dark:text-white hover:text-red-600 hover:font-bold transition-all duration-300">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section></section>
  );
};

export default Contact;