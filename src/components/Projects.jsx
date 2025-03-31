import { useState } from 'react';
import { FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import tms1 from '../assets/images/TMS.png';
import tms2 from '../assets/images/tms 1.png';
import tms3 from '../assets/images/tms 2.png';
import vta1 from '../assets/images/Voyage to Australia.png';
import vta2 from '../assets/images/australia dashboard.png';
import vta3 from '../assets/images/australia profile (1).png';
import agas1 from '../assets/images/Agas.png';
import agas2 from '../assets/images/agas3.png';
import agas3 from '../assets/images/agas4.png';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);

  const projects = [
    {
      title: 'Transaction Management System (TMS)',
      shortDescription: 'Enterprise solution for handling financial transactions, approvals, and audits.',
      images: [
        tms1,
        tms2,
        tms3
      ],
      sections: [
        {
          title: 'Overview',
          content: `
            <p>The <strong>Transaction Management System (TMS)</strong> is a robust enterprise solution designed to efficiently handle financial transactions, approvals, and audits within an organization. Developed as part of my professional work, this system streamlines transaction processing, enhances security, and ensures compliance with financial policies.</p>
          `,
          expanded: true
        },
        {
          title: 'Key Features',
          content: `
            <ul>
              <li><strong>Transaction Processing:</strong> Secure and efficient handling of financial transactions.</li>
              <li><strong>Approval Workflow:</strong> Multi-level approval system with role-based access.</li>
              <li><strong>Audit Trail:</strong> Comprehensive tracking of all transactions for compliance and transparency.</li>
              <li><strong>User & Role Management:</strong> Granular permissions to ensure data security.</li>
              <li><strong>Reporting & Analytics:</strong> Real-time reports and insights on financial transactions.</li>
              <li><strong>Dashboard:</strong> Interactive dashboard for an overview of transaction statuses.</li>
              <li><strong>Error Handling & Validation:</strong> Ensures data integrity and prevents duplicate or invalid transactions.</li>
            </ul>
          `,
          expanded: false
        },
        {
          title: 'Technologies Used',
          content: `
            <ul>
              <li><strong>Frontend:</strong> React.js (Reusable components for tables, modals, and forms)</li>
              <li><strong>Backend:</strong> Node.js / Express.js</li>
              <li><strong>Database:</strong> PostgreSQL</li>
              <li><strong>Authentication:</strong> JWT-based authentication & session management</li>
              <li><strong>API Communication:</strong> RESTful APIs</li>
              <li><strong>UI Framework:</strong> Tailwind CSS for responsive and intuitive design</li>
            </ul>
          `,
          expanded: false
        },
        {
          title: 'My Contributions',
          content: `
            <ul>
              <li>Designed and developed the <strong>frontend architecture</strong>, ensuring a reusable and scalable component structure.</li>
              <li>Implemented the <strong>transaction table</strong>, integrating it with backend APIs for real-time updates.</li>
              <li>Built the <strong>modal system</strong>, making it dynamic and reusable across multiple screens.</li>
              <li>Worked on <strong>state management</strong> to handle transactions, approvals, and filtering efficiently.</li>
              <li>Integrated <strong>audit trail functionality</strong> to track transaction modifications.</li>
            </ul>
          `,
          expanded: false
        }
      ],
      tags: ['React.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS']
    },
    {
      title: 'Immigrant Platform',
      shortDescription: 'Comprehensive solution for student migrants in Australia with essential resources.',
      images: [
     vta1,
     vta2,
     vta3
      ],
      sections: [
        {
          title: 'Overview',
          content: `
            <p>The <strong>Immigrant Platform</strong> is a comprehensive solution designed to assist student migrants in Australia. It provides resources for part-time jobs, food and accommodation, tourism guides, and community support. The platform aims to simplify the migration process and enhance the overall experience for students.</p>
          `,
          expanded: true
        },
        {
          title: 'Key Features',
          content: `
            <ul>
              <li><strong>Part-Time Job Listings:</strong> Curated job opportunities for students.</li>
              <li><strong>Accommodation Assistance:</strong> Verified listings for affordable housing.</li>
              <li><strong>Food & Essentials:</strong> Discounts and guides for local food options.</li>
              <li><strong>Tourism Guides:</strong> Travel recommendations and itineraries.</li>
              <li><strong>Community Support:</strong> Forums and groups for networking and support.</li>
              <li><strong>User Dashboard:</strong> Personalized dashboard for managing applications and resources.</li>
              <li><strong>Multilingual Support:</strong> Accessibility for non-native speakers.</li>
            </ul>
          `,
          expanded: false
        },
        {
          title: 'Technologies Used',
          content: `
            <ul>
              <li><strong>Frontend:</strong> React.js with TypeScript for type-safe development.</li>
              <li><strong>Styling:</strong> Bootstrap for responsive and modern UI.</li>
              <li><strong>Backend:</strong> Node.js with Express.js for API development.</li>
              <li><strong>Database:</strong> postgres for storing user and resource data.</li>
              <li><strong>Authentication:</strong> JWT-based authentication for secure access.</li>
            </ul>
          `,
          expanded: false
        }
      ],
      tags: ['React.js', 'TypeScript', 'Node.js', 'postgres']
    },
    {
      title: 'AGAS International Australia',
      shortDescription: 'Gas booking and management system with web and mobile apps.',
      images: [
       agas1,
       agas2,
       agas3
      ],
      sections: [
        {
          title: 'Overview',
          content: `
            <p>The <strong>AGAS International Australia</strong> project is a comprehensive gas booking and management system designed to streamline operations for gas booking, driver and yard management, dispatch activities, and more. The platform includes a web application for managing all activities and a mobile app for drivers and yard members.</p>
          `,
          expanded: true
        },
        {
          title: 'Key Features',
          content: `
            <ul>
              <li><strong>Gas Booking:</strong> Easy and efficient gas booking system for customers.</li>
              <li><strong>Driver Management:</strong> Real-time tracking and management of drivers.</li>
              <li><strong>Yard Management:</strong> Efficient management of gas yards and inventory.</li>
              <li><strong>Dispatch Activities:</strong> Automated dispatch scheduling and tracking.</li>
              <li><strong>Mobile App:</strong> Dedicated app for drivers and yard members to manage tasks.</li>
              <li><strong>Reporting & Analytics:</strong> Real-time reports for gas sales, deliveries, and inventory.</li>
            </ul>
          `,
          expanded: false
        },
        {
          title: 'Technologies Used',
          content: `
            <ul>
              <li><strong>Frontend (Web):</strong> React.js for the admin dashboard.</li>
              <li><strong>Mobile App:</strong> Flutter for cross-platform driver and yard member apps.</li>
              <li><strong>Backend:</strong> Spring Boot for robust and scalable API development.</li>
              <li><strong>Database:</strong> MySQL for storing gas, driver, and inventory data.</li>
            </ul>
          `,
          expanded: false
        }
      ],
      tags: ['React.js', 'Flutter', 'Spring Boot', 'MySQL']
    }
  ];

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
          My <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => {
                setSelectedProject(project);
                setExpandedSection(0); // Expand first section by default
              }}
            >
              <div className="h-48 bg-indigo-200 dark:bg-indigo-900 flex items-center justify-center overflow-hidden">
                <img 
                  src={project.images[0]} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white dark:bg-gray-800 p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  {selectedProject.title}
                </h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  <FiX size={24} />
                </button>
              </div>
              
              <div className="p-6">
                {/* Image Gallery - 3 images vertically */}
                <div className="mb-8 space-y-4">
                  {selectedProject.images.map((image, idx) => (
                    <img 
                      key={idx}
                      src={image} 
                      alt={`${selectedProject.title} screenshot ${idx + 1}`}
                      className="w-full rounded-lg border border-gray-200 dark:border-gray-700"
                    />
                  ))}
                </div>

                {/* Expandable Content Sections */}
                <div className="space-y-6">
                  {selectedProject.sections.map((section, idx) => (
                    <div key={idx} className="border-b border-gray-200 dark:border-gray-700 pb-6">
                      <div 
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleSection(idx)}
                      >
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                          {section.title}
                        </h3>
                        {expandedSection === idx ? (
                          <FiChevronUp className="text-gray-500" />
                        ) : (
                          <FiChevronDown className="text-gray-500" />
                        )}
                      </div>
                      
                      {(expandedSection === idx || section.expanded) && (
                        <div 
                          className="prose dark:prose-invert max-w-none mt-4 dark:text-gray-400"
                          dangerouslySetInnerHTML={{ __html: section.content }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}