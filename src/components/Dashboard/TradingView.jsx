import React from 'react';

const TradingView = () => {
  return (
    <div className="flex-1 h-full flex flex-col">
      <div className="flex items-center h-16 px-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-medium">BTCUSD CM</span>
          <span className="px-2 py-0.5 text-xs bg-gray-100 rounded">Qty 0328</span>
        </div>
        <div className="ml-4 text-red-500">
          <span className="text-lg">104787.3</span>
          <span className="ml-2 text-sm">-2,667.5 -2.48%</span>
        </div>
      </div>
      <div className="flex-1 p-4">
        {/* Chart container */}
        <div className="w-full h-full bg-gray-50 rounded" />
      </div>
    </div>
  );
};

export default TradingView;