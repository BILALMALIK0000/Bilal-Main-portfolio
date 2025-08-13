import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { calculateAge } from '../utils/ageCalculator';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const age = calculateAge('2005-08-17');

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'bilalmalik0938@gmail.com', href: 'bilalmalik0938@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+92 310 6990938', href: 'tel:+923433452279' },
    { icon: MapPin, label: 'Location', value: 'Pakistan', href: null },
    { icon: Calendar, label: 'Age', value: `${age} years old`, href: null },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
      I’m <span className="font-semibold text-blue-600 dark:text-blue-400">Muhammad Bilal Nadir</span>, a 
      <span className="font-medium">{` ${age}-year-old`}</span> technology enthusiast with a passion for crafting 
      <strong> high-impact, intelligent digital experiences</strong>. I specialize in turning ideas into scalable, 
      user-focused solutions through modern web development and AI-powered innovation.
    </p>

    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
      My core expertise lies in building <strong>smart chatbots, full-stack applications, and automation systems</strong> 
      using the latest tools and frameworks. I thrive on solving complex problems through <strong>artificial intelligence, 
      machine learning, and clean, scalable code</strong>.
    </p>

    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
      Outside of development, I’m constantly exploring <strong>emerging technologies</strong> and pushing boundaries 
      to design smarter, more efficient systems. My long-term vision is to <strong>become a leading IT professional</strong> 
      who drives real-world impact through innovative and meaningful tech solutions.
    </p>
  </div>
          </motion.div>

          {/* Right Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Contact Information
            </h3>

            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="flex items-center space-x-4"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <info.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-gray-900 dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-900 dark:text-white font-semibold">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 1 }}
              className="mt-8"
            >
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Languages Known
              </h4>
              <div className="flex flex-wrap gap-2">
                {['English', 'Urdu', 'Basic German'].map((language, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full text-sm font-medium"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
