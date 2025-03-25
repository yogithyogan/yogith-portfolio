export default function About() {
    return (
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            About <span className="text-indigo-600">Me</span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg">
                {/* Replace with your image */}
                <div className="w-full h-full bg-indigo-200 flex items-center justify-center text-gray-600">
                  About Image
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 md:pl-12">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                Who am I?
              </h3>
              <p className="text-gray-600 mb-4">
                I'm a passionate frontend developer with expertise in React.js and modern web technologies. 
                I love creating beautiful, responsive, and user-friendly websites and applications.
              </p>
              <p className="text-gray-600 mb-6">
                With a background in design and development, I bring a unique perspective to every project, 
                ensuring both aesthetic appeal and technical excellence.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div>
                  <h4 className="font-medium text-gray-700">Name:</h4>
                  <p className="text-gray-600">Your Name</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Email:</h4>
                  <p className="text-gray-600">your.email@example.com</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">From:</h4>
                  <p className="text-gray-600">Your Location</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Experience:</h4>
                  <p className="text-gray-600">X+ Years</p>
                </div>
              </div>
              
              <a 
                href="/path/to/resume.pdf" 
                download 
                className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }