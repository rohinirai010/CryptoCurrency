import React from 'react';

const TradeHistory = () => {
  return (
    <div className="h-72 border-t border-gray-200">
      <div className="flex items-center h-12 px-4 border-b border-gray-200">
        <span className="text-sm font-medium">Trade History</span>
      </div>
      <div className="overflow-auto h-[calc(100%-3rem)]">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-500">
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-right">Amount</th>
              <th className="px-4 py-2 text-right">Time</th>
            </tr>
          </thead>
          <tbody>
            {/* Add trade history entries */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TradeHistory;