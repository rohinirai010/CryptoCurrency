import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import CustomSlider from '../Common/CustomSlider';

const OrderForm = () => {
  const [orderType, setOrderType] = useState('Limit');
  const [price] = useState(105040.2);

  const renderOrderContent = () => {
    switch (orderType) {
      case 'Limit':
        return (
          <>
            <div className="px-4 pt-4">
              <div className="flex items-center">
                <span className="text-sm text-gray-600 dark:text-gray-300">Avbl - BTC</span>
                <button className="ml-auto text-gray-400 dark:text-gray-500">½</button>
              </div>
            </div>

            <div className="px-4 pt-2">
              <label className="block text-sm text-gray-600 dark:text-gray-300">Price</label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={price.toLocaleString('en-US', { minimumFractionDigits: 1 })}
                  readOnly
                  className="flex-grow p-2 bg-white dark:bg-gray-800 border rounded text-sm text-gray-900 dark:text-gray-100"
                />
              </div>
            </div>

            <div className="px-4 pt-2">
              <label className="block text-sm text-gray-600 dark:text-gray-300">Size</label>
              <div className="relative flex items-center space-x-2">
                <input
                  type="text"
                  value="24%"
                  className=" flex-grow p-2 bg-white dark:bg-gray-800 border rounded text-sm text-gray-900 dark:text-gray-100"
                />
                <button className="absolute flex items-center right-0 px-2 py-1 text-sm font-medium text-gray-600 dark:text-gray-400">Cont <IoMdArrowDropdown className='w-4 h-4' /></button>
              </div>
            </div>
          </>
        );

      case 'Market':
        return (
          <>
            <div className="px-4 pt-4">
              <div className="flex items-center">
                <span className="text-sm text-gray-600 dark:text-gray-300">Avbl - BTC</span>
                <button className="ml-auto text-gray-400 dark:text-gray-500">½</button>
              </div>
            </div>

            <div className="px-4 pt-2">
              <label className="block text-sm text-gray-600 dark:text-gray-300">Size</label>
              <div className="relative flex items-center space-x-2">
                <input
                  type="text"
                  value="1 Cont = 100 USD"
                  className=" flex-grow p-2 bg-white dark:bg-gray-800 border rounded text-sm text-gray-900 dark:text-gray-100"
                  readOnly
                />
                <button className="absolute flex items-center right-0 px-2 py-1 text-sm font-medium text-gray-600 dark:text-gray-400">Cont <IoMdArrowDropdown className='w-4 h-4' /></button>
              </div>
            </div>
          </>
        );

      case 'TrailingStop':
        return (
          <>
            <div className="px-4 pt-4">
              <div className="flex items-center">
                <span className="text-sm text-gray-600 dark:text-gray-300">Avbl - BTC</span>
                <button className="ml-auto text-gray-400 dark:text-gray-500">½</button>
              </div>
            </div>

            <div className="px-4 pt-2">
              <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Callback Rate</label>
              <div className="flex items-center space-x-1">
                <input
                  type="text"
                  placeholder="%"
                  className="flex-grow p-2 bg-white dark:bg-gray-800 border rounded text-sm text-gray-900 dark:text-gray-100"
                />
                <button className="px-1 py-1 text-sm border rounded text-gray-600 dark:text-gray-400">1%</button>
                <button className="px-1 py-1 text-sm border rounded text-gray-600 dark:text-gray-400">2%</button>
              </div>
            </div>

            <div className="px-4 pt-2">
              <label className="block text-sm text-gray-600 dark:text-gray-300">Activation Price</label>
              <div className="relative flex items-center space-x-2">
                <input
                  type="text"
                  className=" flex-grow p-2 bg-white dark:bg-gray-800 border rounded text-sm text-gray-900 dark:text-gray-100"
                />
                <button className="absolute flex items-center right-0 px-2 py-1 text-sm font-medium text-gray-600 dark:text-gray-400">Mark <IoMdArrowDropdown className='w-4 h-4' /></button>
              </div>
            </div>

            <div className="px-4 pt-2">
              <label className="block text-sm text-gray-600 dark:text-gray-300">Size</label>
              <div className="relative  flex items-center space-x-2">
                <input
                  type="text"
                  value="1 Cont = 100 USD"
                  className="flex-grow p-2 bg-white dark:bg-gray-800 border rounded text-sm text-gray-900 dark:text-gray-100"
                  readOnly
                />
                <button className="absolute flex items-center right-0 px-2 py-1 text-sm font-medium text-gray-600 dark:text-gray-400">Cont <IoMdArrowDropdown className='w-4 h-4' /></button>
              </div>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full  bg-white dark:bg-gray-900 rounded-lg border border-gray dark:border-gray-700 ">
      {/* Header Controls */}
      <div className="flex items-center space-x-2 px-4 py-2 border-b border-gray-200 dark:border-gray-700">
        <button className="px-2 py-1 text-gray-400 dark:text-gray-500 text-sm">Cross</button>
        <button className="px-2 py-1 text-gray-400 dark:text-gray-500 text-sm">20x</button>
        <button className="ml-auto px-2 py-1 text-gray-400 dark:text-gray-500">•••</button>
      </div>

      {/* Order Type Tabs */}
      <div className="px-4 pt-2">
        <div className="flex space-x-4 py-2">
          <button 
            className={`text-sm font-medium ${orderType === 'Limit' ? 'text-black dark:text-white border-b-2 border-yellow-400' : 'text-gray-500 dark:text-gray-300'}`}
            onClick={() => setOrderType('Limit')}
          >
            Limit
          </button>
          <button 
            className={`text-sm font-medium ${orderType === 'Market' ? 'text-black dark:text-white border-b-2 border-yellow-400' : 'text-gray-500 dark:text-gray-300'}`}
            onClick={() => setOrderType('Market')}
          >
            Market
          </button>
          <button 
            className={`text-sm font-medium ${orderType === 'TrailingStop' ? 'text-black dark:text-white border-b-2 border-yellow-400' : 'text-gray-500 dark:text-gray-300'}`}
            onClick={() => setOrderType('TrailingStop')}
          >
            Trailing Stop
          </button>
          <button className="ml-auto px-1 py-1 text-gray-400 dark:text-gray-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Dynamic Content based on Order Type */}
      {renderOrderContent()}

      {/* Position Slider */}
      <CustomSlider />

      {/* Action Buttons */}
      <div className="flex flex-col items-center text-center gap-2 mt-6 mb-6 px-4">
        <a
          href="/register"
          className="w-full py-3 text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-500 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          Register Now
        </a>
        <a
          href="/login"
          className="w-full py-3 text-sm font-medium text-gray-700 hover:text-white bg-gray-300 hover:bg-gray-500 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          Log In
        </a>
      </div>
    </div>
  );
};

export default OrderForm;
