import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import LINKS from '../../static/index';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header id="header" className="fixed top-0 left-0 w-full shadow-md z-50">
      <nav
        className={`flex items-center justify-between px-6 py-4 ${
          pathname === '/about' ? 'bg-blue-500' : 'bg-black'
        }`}
      >
        <div className="text-white text-xl font-bold">
          <span className="text-blue-500">{'{'}</span> Finsweet{' '}
          <span className="text-blue-500">{'}'}</span>
        </div>

        <div className="flex items-center gap-6">
          {LINKS.LINKS.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              className={`text-sm transition-all duration-300 ${
                pathname === link.path
                  ? 'text-white font-semibold underline underline-offset-4'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
