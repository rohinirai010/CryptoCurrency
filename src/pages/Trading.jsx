import React from 'react';
import MainLayout from '../layouts/MainLayout';
import TradingView from '../components/Dashboard/TradingView';
import OrderBook from '../components/Dashboard/OrderBook';
import TradeHistory from '../components/Dashboard/TradeHistory';
import Dashboard from '../components/Dashboard/Dashboard';

const Trading = () => {
  return (
    <MainLayout>
      <div className="flex h-[calc(100vh-4rem)]">
        <Dashboard />
      </div>
    </MainLayout>
  );
};

export default Trading;