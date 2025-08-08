
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400 pb-2">
        My To-Do List
      </h1>
      <p className="text-slate-400">Stay organized, one task at a time.</p>
    </header>
  );
};

export default Header;
