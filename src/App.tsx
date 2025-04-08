import './App.css'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Education', path: '/education' },
    { name: 'Work History', path: '/work-history' },
    { name: 'Tech Stack', path: '/tech-stack' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div>
      {/* Header Section */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cyan-800 text-white shadow-md">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="text-lg font-bold"></div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? (
                <XIcon className="h-6 w-6 bg-cyan-800 text-white" />
              ) : (
                <MenuIcon className="h-6 w-6 bg-cyan-800 text-white" />
              )}
            </button>
          </div>
          <ul id="nav" className={`md:flex ${isOpen ? 'block' : 'hidden'} md:block`}>
            {navItems.map((item, index, array) => (
              <li key={item.name} className={`px-4 py-2 ${index < array.length - 1 ? 'border-r' : ''}`}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? 'text-blue-400' : 'text-white hover:text-blue-200'
                  }
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main Content Section */}
      <main className="mx-auto p-4 pt-16 max-w-screen-2xl w-full">
        {/* Routes will be rendered here */}
      </main>
    </div>
  );
};

export default App;