export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 w-full">
      <div className="w-full px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-16 relative">
            About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-indigo-500 dark:bg-indigo-400 rounded-full"></span>
          </h2>
        </div>

        <div className="w-full bg-white dark:bg-gray-800 py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="w-full">
              <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                Who am I?
              </h3>
              
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  I'm a <span className="font-medium text-indigo-600 dark:text-indigo-400">versatile software developer</span> with expertise in React, React Native, Flutter, Spring Boot, Node.js, and modern web and mobile technologies. I specialize in building scalable, high-performance applications across multiple platforms.
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  With experience in full-stack development, databases like MySQL and PostgreSQL, and tools like Postman, Git, and Docker, I thrive in cross-functional teams, delivering innovative solutions that blend technical excellence with seamless user experiences.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-500 dark:text-gray-400 text-sm">Name</h4>
                    <p className="text-gray-700 dark:text-gray-200 font-medium">Yogith Yogan J</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-500 dark:text-gray-400 text-sm">Email</h4>
                    <p className="text-gray-700 dark:text-gray-200 font-medium">yogithyoganx@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-500 dark:text-gray-400 text-sm">Location</h4>
                    <p className="text-gray-700 dark:text-gray-200 font-medium">Chennai, India</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-500 dark:text-gray-400 text-sm">Experience</h4>
                    <p className="text-gray-700 dark:text-gray-200 font-medium">1+ Years</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 flex justify-center">
                <a 
href="/Yogith_SDE_Resume .pdf"                  download 
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg hover:shadow-xl text-lg font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}