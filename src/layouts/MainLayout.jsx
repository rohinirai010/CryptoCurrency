import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen  w-full flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;