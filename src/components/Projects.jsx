import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      title: 'E-commerce Website',
      description: 'A full-featured e-commerce platform with React, Node.js, and MongoDB.',
      tags: ['React', 'Node.js', 'MongoDB'],
      github: '#',
      live: '#',
      image: '/placeholder-project1.jpg'
    },
    {
      title: 'Task Management App',
      description: 'A productivity app for managing tasks with drag-and-drop functionality.',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      github: '#',
      live: '#',
      image: '/placeholder-project2.jpg'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with React and Tailwind CSS.',
      tags: ['React', 'Tailwind CSS'],
      github: '#',
      live: '#',
      image: '/placeholder-project3.jpg'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          My <span className="text-indigo-600">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-indigo-200 flex items-center justify-center text-gray-600">
                {/* Replace with project image */}
                Project Image
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-600 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}