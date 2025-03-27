import myimage from '../assets/images/yogith.jpg';
import { useEffect } from 'react';
import { motion } from 'framer-motion'; // For animations
import { FiDownload, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'; // Social icons

export default function Hero() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content (Left Side) */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4"
              variants={itemVariants}
            >
              Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Yogith Yogan</span>
            </motion.h1>

            <motion.h2 
              className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Software Developer
              </span>
            </motion.h2>

            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
              variants={itemVariants}
            >
              I build <span className="font-semibold">exceptional digital experiences</span> with modern technologies like React, Node.js, and more.
            </motion.p>

            <motion.div 
              className="flex space-x-4 mb-8"
              variants={itemVariants}
            >
              <a 
                href="#contact" 
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-500/30"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors"
              >
                View Work
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex space-x-4"
              variants={itemVariants}
            >
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <FiGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <FiLinkedin size={24} />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <FiTwitter size={24} />
              </a>
            </motion.div>
          </div>

          {/* Image (Right Side) */}
          <motion.div 
            className="md:w-1/2 flex justify-center"
            variants={itemVariants}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Circular Image with Gradient Border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 p-1 animate-spin-slow">
                <div className="h-full w-full rounded-full bg-white dark:bg-gray-900 p-1">
                  <img 
                    src={myimage} 
                    alt="Yogith Yogan" 
                    className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800"
                  />
                </div>
              </div>

              {/* Floating Tech Icons (Optional) */}
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg">
                <span className="text-xl">⚛️</span>
              </div>
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg">
                <span className="text-xl">💻</span>
              </div>
              
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}