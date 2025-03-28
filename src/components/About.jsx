export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
          About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg">
              {/* Replace with your image */}
              <div className="w-full h-full bg-indigo-200 dark:bg-indigo-900 flex items-center justify-center text-gray-600 dark:text-gray-300">
                About Image
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 md:pl-12">
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
  Who am I?
</h3>
<p className="text-gray-600 dark:text-gray-300 mb-4">
  I'm a versatile software developer with expertise in React, React Native, Flutter, Spring Boot, Node.js, and modern web and mobile technologies.  
  I specialize in building scalable, high-performance applications across multiple platforms.
</p>
<p className="text-gray-600 dark:text-gray-300 mb-6">
  With experience in full-stack development, databases like MySQL and PostgreSQL, and tools like Postman, Git, and Docker,  
  I thrive in cross-functional teams, delivering innovative solutions that blend technical excellence with seamless user experiences.
</p>

            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300">Name:</h4>
                <p className="text-gray-600 dark:text-gray-400">Yogith yogan j</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300">Email:</h4>
                <p className="text-gray-600 dark:text-gray-400">yogithyoganx@gmail.com</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300">From:</h4>
                <p className="text-gray-600 dark:text-gray-400">Chennai,India</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300">Experience:</h4>
                <p className="text-gray-600 dark:text-gray-400">1+ Years</p>
              </div>
            </div>
            
            <a 
              href="/path/to/resume.pdf" 
              download 
              className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-lg transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}