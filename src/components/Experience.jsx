import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Experience() {
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const experiences = [
    {
      title: "First Step in My Career",
      date: "March 2024 - Present",
      company: "Software Developer",
      description: "Started my professional journey as a software developer, working with multiple technologies and frameworks to build modern applications.",
      skills: ["React", "React Native", "Flutter", "Spring Boot", "Node.js"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "Skill Development",
      date: "Ongoing",
      company: "Self-Learning",
      description: "Continuously expanding my skill set by learning new technologies, frameworks, and best practices in software development.",
      skills: ["Database Management", "API Design", "State Management", "UI/UX Principles"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Future Aspirations",
      date: "Next Steps",
      company: "Career Goals",
      description: "Aiming to take on more complex projects, mentor others, and contribute to open-source while specializing in full-stack development.",
      skills: ["Advanced Architectures", "Performance Optimization", "Team Leadership", "DevOps"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  return (
    <section id="experience" className="py-12 md:py-20 bg-white dark:bg-gray-900 w-full">
      <div className="w-full px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12 md:mb-16 relative">
            My <span className="text-indigo-600 dark:text-indigo-400">Journey</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 md:w-20 h-1 bg-indigo-500 dark:bg-indigo-400 rounded-full"></span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Progress line - hidden on mobile */}
            {!isMobile && (
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700">
                <motion.div 
                  className="h-full bg-indigo-600 dark:bg-indigo-500 origin-top"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: (activeStep + 1) / experiences.length }}
                  transition={{ duration: 1 }}
                />
              </div>
            )}

            {/* Steps */}
            <div className="space-y-8 md:space-y-16">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`relative ${isMobile ? 'pl-8' : ''}`}
                  onMouseEnter={!isMobile ? () => setActiveStep(index) : undefined}
                  onClick={isMobile ? () => setActiveStep(index) : undefined}
                >
                  {/* Mobile timeline dot */}
                  {isMobile && (
                    <div className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-white dark:bg-gray-900 border-4 border-indigo-600 dark:border-indigo-500 z-10">
                      <span className={`text-xs font-bold ${activeStep >= index ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400'}`}>
                        {index + 1}
                      </span>
                    </div>
                  )}

                  {/* Content - different layout for desktop vs mobile */}
                  {isMobile ? (
                    <motion.div 
                      className={`p-6 rounded-xl shadow-lg ${activeStep === index ? 
                        'bg-indigo-600 dark:bg-indigo-800 text-white' : 
                        'bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200'} transition-all duration-300`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      <div className="flex items-center mb-3">
                        <div className={`p-2 rounded-full mr-3 ${activeStep === index ? 
                          'bg-white text-indigo-600' : 
                          'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300'}`}>
                          {exp.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold">{exp.title}</h3>
                          <p className="text-xs opacity-80">{exp.date}</p>
                        </div>
                      </div>
                      <h4 className="font-medium mb-1 text-sm">{exp.company}</h4>
                      <p className="mb-3 text-sm">{exp.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {exp.skills.map((skill, i) => (
                          <span 
                            key={i}
                            className={`px-2 py-0.5 rounded-full text-xs font-medium ${activeStep === index ? 
                              'bg-white text-indigo-600' : 
                              'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300'}`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <div className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-start justify-between gap-8`}>
                      {/* Left/Right content alternating */}
                      <motion.div 
                        className={`w-5/12 p-8 rounded-xl shadow-lg ${activeStep === index ? 
                          'bg-indigo-600 dark:bg-indigo-800 text-white' : 
                          'bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200'} transition-all duration-300`}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                      >
                        <div className="flex items-center mb-4">
                          <div className={`p-3 rounded-full mr-4 ${activeStep === index ? 
                            'bg-white text-indigo-600' : 
                            'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300'}`}>
                            {exp.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{exp.title}</h3>
                            <p className="text-sm opacity-80">{exp.date}</p>
                          </div>
                        </div>
                        <h4 className="font-medium mb-2">{exp.company}</h4>
                        <p className="mb-4">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <span 
                              key={i}
                              className={`px-3 py-1 rounded-full text-xs font-medium ${activeStep === index ? 
                                'bg-white text-indigo-600' : 
                                'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300'}`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>

                      {/* Desktop circle marker */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-900 border-4 border-indigo-600 dark:border-indigo-500 z-10">
                        <span className={`text-lg font-bold ${activeStep >= index ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400'}`}>
                          {index + 1}
                        </span>
                      </div>

                      {/* Date on opposite side */}
                      <div className="w-5/12 flex justify-center pt-4">
                        <motion.div
                          className={`px-6 py-3 rounded-lg ${activeStep === index ? 
                            'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300' : 
                            'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'} font-medium`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.2 + 0.3 }}
                        >
                          {exp.date}
                        </motion.div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step navigation - always visible */}
          <div className="flex justify-center mt-8 md:mt-16 space-x-2 md:space-x-4">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all ${activeStep === index ? 
                  'bg-indigo-600 dark:bg-indigo-400 w-4 md:w-6' : 
                  'bg-gray-300 dark:bg-gray-600 hover:bg-indigo-400'}`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

