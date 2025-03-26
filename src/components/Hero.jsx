export default function Hero() {
    return (
      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                Hi, I'm <span className="text-indigo-600">Yogith yogan </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
                SoftWare Developer
              </h2>
              <p className="text-gray-600 mb-8 max-w-lg">
                I build exceptional digital experiences with modern technologies.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Contact Me
                </a>
                <a 
                  href="#projects" 
                  className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
                >
                  View Work
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-indigo-100 rounded-full overflow-hidden">
                {/* Replace with your image */}
                <div className="w-full h-full bg-indigo-300 flex items-center justify-center text-white text-4xl">
                  Your Photo
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }