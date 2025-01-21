import React from 'react';

const OrderBook = () => {
  return (
    <div className="w-80 flex flex-col">
      <div className="flex items-center h-16 px-4 border-b border-gray-200">
        <span className="text-lg">Order Book</span>
      </div>
      <div className="flex-1 overflow-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-500">
              <th className="px-4 py-2 text-left">Price (USD)</th>
              <th className="px-4 py-2 text-right">Size (Cont)</th>
              <th className="px-4 py-2 text-right">Sum (Cont)</th>
            </tr>
          </thead>
          <tbody>
            {/* Add order book entries */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderBook;