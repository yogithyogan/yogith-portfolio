import { useState, useEffect } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true' || 
           (window.matchMedia('(prefers-color-scheme: dark)').matches && 
            localStorage.getItem('darkMode') !== 'false');
  });
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const createFlowers = (e) => {
    const rect = e.target.getBoundingClientRect();
    const flowersArray = Array(15).fill().map((_, i) => ({
      id: i,
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
      rotation: Math.random() * 360,
      delay: i * 100,
      size: Math.random() * 10 + 5,
      color: `hsl(${Math.random() * 60 + (darkMode ? 250 : 10)}, 80%, 60%)`
    }));
    setFlowers(flowersArray);
    
    // Clear flowers after animation
    setTimeout(() => setFlowers([]), 2000);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm z-50">
      {/* Flower particles */}
      {flowers.map(flower => (
        <div
          key={flower.id}
          className="fixed pointer-events-none text-xl"
          style={{
            left: `${flower.x}px`,
            top: `${flower.y}px`,
            transform: `rotate(${flower.rotation}deg)`,
            fontSize: `${flower.size}px`,
            color: flower.color,
            animation: `flower-fall ${Math.random() * 1 + 1}s ease-in forwards`,
            animationDelay: `${flower.delay}ms`
          }}
        >
          {['🌸', '🌼', '🌻', '🌺', '🏵️', '💮'][Math.floor(Math.random() * 6)]}
        </div>
      ))}

      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={createFlowers}
            className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 hover:scale-105 transition-transform"
          >
            &lt;yogithyogan/&gt;
          </button>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-full focus:outline-none text-gray-700 dark:text-gray-300"
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>
          </nav>
          
          <button 
            className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        
        {isOpen && (
          <nav className="md:hidden mt-4 space-y-4 pb-4">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="block text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="block text-gray-700 dark:text-gray-300"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </nav>
        )}
      </div>

      <style jsx global>{`
        @keyframes flower-fall {
          0% {
            opacity: 1;
            transform: translate(0, 0) rotate(0deg);
          }
          100% {
            opacity: 0;
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 100 + 100}px) rotate(${Math.random() * 360}deg);
          }
        }
      `}</style>
    </header>
  );
}