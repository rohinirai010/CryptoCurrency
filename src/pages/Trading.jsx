import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Dashboard from '../components/Dashboard/Dashboard';

const Trading = () => {
  return (
    <MainLayout>
      <div className="flex h-[calc(100vh-4rem)] overflow-auto bg-gray-50 dark:bg-[#0B0E11]">
        <Dashboard />
      </div>
    </MainLayout>
  );
};

export default Trading;