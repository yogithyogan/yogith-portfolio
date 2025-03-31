import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

export default function Footer() {
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/yogithyogan' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/yogith-yogan' },
    { icon: <FiTwitter />, url: 'https://x.com/YoganYogith' },
    { icon: <FiInstagram />, url: 'https://www.instagram.com/__yoyo._jmr__/' },
  ];

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-white">Portfolio</a>
            <p className="mt-2 text-gray-400">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-xl"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}