// import React, { useState, useCallback } from "react";
// import { LineChart } from "lucide-react";

// const TradingDashboard = () => {
//   const [components, setComponents] = useState({
//     chart: true,
//     orderBook: true,
//     trades: true,
//     orderForm: true,
//   });

//   const [btcPrice, setBtcPrice] = useState(104516.7);
//   const [priceChange, setPriceChange] = useState(-5.55);

//   // Add resize handler for components
//   const useResizable = (initialHeight = 400) => {
//     const [height, setHeight] = useState(initialHeight);
//     const [isResizing, setIsResizing] = useState(false);
//     const [startY, setStartY] = useState(0); // Store initial mouse position

//     const startResizing = useCallback((e) => {
//       e.preventDefault();
//       setIsResizing(true);
//       setStartY(e.clientY); // Capture initial mouse position
//       window.addEventListener("mousemove", resize);
//       window.addEventListener("mouseup", stopResizing);
//     }, []);

//     const stopResizing = useCallback(() => {
//       setIsResizing(false);
//       window.removeEventListener("mousemove", resize);
//       window.removeEventListener("mouseup", stopResizing);
//     }, []);

//     const resize = useCallback(
//       (e) => {
//         if (isResizing) {
//           const deltaY = e.clientY - startY; // Calculate change in vertical position
//           setHeight((prevHeight) => Math.max(prevHeight + deltaY, 100)); // Set height with a minimum of 100px
//           setStartY(e.clientY); // Update start position for continuous resizing
//         }
//       },
//       [isResizing, startY]
//     );

//     return {
//       height,
//       startResizing,
//       isResizing,
//     };
//   };

//   const PriceHeader = () => (
//     <div className="flex items-center space-x-6 p-2 text-sm border-b">
//       <div className="flex items-center space-x-2">
//         <span className="font-semibold">BTCUSDT</span>
//         <span className="text-red-500">{priceChange}%</span>
//       </div>
//     </div>
//   );

//   const Chart = () => {
//     const { height, startResizing } = useResizable(400);

//     return (
//       <div
//         className="relative p-4 bg-white rounded-lg shadow-sm border resizable"
//         style={{ height: `${height}px` }}
//       >
//         <div className="flex justify-between items-center mb-4">
//           <div className="flex space-x-4">
//             <button className="px-3 py-1 text-sm border-b-2 border-yellow-400">
//               Chart
//             </button>
//             <button className="px-3 py-1 text-sm text-gray-500">Info</button>
//             <button className="px-3 py-1 text-sm text-gray-500">
//               Trading Data
//             </button>
//           </div>
//           <button
//             onClick={() => removeComponent("chart")}
//             className="text-gray-400 hover:text-gray-600"
//           >
//             ×
//           </button>
//         </div>
//         <div className="flex space-x-2 text-sm mb-4">
//           <select className="border rounded px-2 py-1">
//             <option>Time 1D</option>
//           </select>
//         </div>
//         <div className="h-64 bg-gray-50 flex items-center justify-center">
//           <LineChart className="w-8 h-8 text-gray-400" />
//           <span className="ml-2 text-gray-500">Chart View</span>
//         </div>
//         <div
//           className="absolute bottom-0 right-0 w-4 h-4 cursor-ns-resize"
//           onMouseDown={startResizing}
//         />
//       </div>
//     );
//   };

//   const OrderBook = () => {
//     const { height, startResizing } = useResizable(300);

//     return (
//       <div
//         className="relative bg-white rounded-lg shadow-sm border resizable"
//         style={{ height: `${height}px` }}
//       >
//         <div className="flex justify-between items-center p-2 border-b">
//           <h3 className="font-medium">Order Book</h3>
//           <button
//             onClick={() => removeComponent("orderBook")}
//             className="text-gray-400 hover:text-gray-600"
//           >
//             ×
//           </button>
//         </div>
//         <div className="p-2">
//           <div className="grid grid-cols-3 text-sm text-gray-500 mb-2">
//             <div>Price (USD)</div>
//             <div>Size (Cont)</div>
//             <div>Sum (Cont)</div>
//           </div>
//           {[...Array(8)].map((_, i) => (
//             <div key={i} className="grid grid-cols-3 text-sm mb-1">
//               <div className="text-red-500">104505.3</div>
//               <div>28</div>
//               <div>695</div>
//             </div>
//           ))}
//         </div>
//         <div
//           className="absolute bottom-0 right-0 w-4 h-4 cursor-ns-resize"
//           onMouseDown={startResizing}
//         />
//       </div>
//     );
//   };

//   const Trades = () => {
//     const { height, startResizing } = useResizable(200);

//     return (
//       <div
//         className="relative bg-white rounded-lg shadow-sm border resizable"
//         style={{ height: `${height}px` }}
//       >
//         <div className="flex justify-between items-center p-2 border-b">
//           <h3 className="font-medium">Trades</h3>
//           <button
//             onClick={() => removeComponent("trades")}
//             className="text-gray-400 hover:text-gray-600"
//           >
//             ×
//           </button>
//         </div>
//         <div className="p-2">
//           <div className="grid grid-cols-3 text-sm text-gray-500 mb-2">
//             <div>Price(USD)</div>
//             <div>Amount(Cont)</div>
//             <div>Time</div>
//           </div>
//           {[...Array(5)].map((_, i) => (
//             <div key={i} className="grid grid-cols-3 text-sm mb-1">
//               <div className="text-green-500">104522.6</div>
//               <div>3</div>
//               <div>14:03:30</div>
//             </div>
//           ))}
//         </div>
//         <div
//           className="absolute bottom-0 right-0 w-4 h-4 cursor-ns-resize"
//           onMouseDown={startResizing}
//         />
//       </div>
//     );
//   };

//   const OrderForm = () => {
//     const { height, startResizing } = useResizable(380);

//     return (
//       <div
//         className="relative bg-white rounded-lg shadow-sm border resizable h-[40rem]"
//         style={{ height: `${height}px` }}
//       >
//         <div className="p-4">
//           <div className="space-y-4">
//             <div className="flex space-x-2">
//               <button className="px-4 py-2 bg-gray-100 rounded">Limit</button>
//               <button className="px-4 py-2">Market</button>
//               <button className="px-4 py-2">Stop Limit</button>
//             </div>
//             <div>
//               <label className="block text-sm text-gray-600 mb-1">Price</label>
//               <input
//                 type="text"
//                 value="104711.6"
//                 className="w-full p-2 border rounded"
//                 readOnly
//               />
//             </div>
//             <div>
//               <label className="block text-sm text-gray-600 mb-1">Size</label>
//               <input
//                 type="text"
//                 value="1 Cont = 100 USD"
//                 className="w-full p-2 border rounded"
//                 readOnly
//               />
//             </div>
//             <div className="flex flex-col items-center text-center gap-2">
//             <a
//               href="/register"
//               className="w-full py-2 text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-500 rounded-lg transition-all duration-300 transform hover:scale-105"
//             >
//               Register Now
//             </a>
//             <a
//               href="/login"
//               className="w-full py-2 text-sm font-medium text-gray-700 hover:text-[white] bg-gray-300 hover:bg-gray-500 dark:text-gray-300 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 transform hover:scale-105"
//             >
//               Log In
//             </a>

//             </div>
//           </div>
//         </div>
//         <div
//           className="absolute bottom-0 right-0 w-4 h-4 cursor-ns-resize"
//           onMouseDown={startResizing}
//         />
//       </div>
//     );
//   };

//   const removeComponent = (name) => {
//     setComponents((prev) => ({
//       ...prev,
//       [name]: false,
//     }));
//   };

//   return (
//     <div className="p-2 bg-gray-50 min-h-screen w-full">
//       <PriceHeader />

//       <div className="grid grid-cols-5 gap-1 mt-4">
//         <div className="col-span-3">{components.chart && <Chart />}</div>

//         <div className="space-y-1">
//           {components.orderBook && <OrderBook />}
//           {components.trades && <Trades />}
//         </div>

//         <div className="col-span-1">
//           {components.orderForm && <OrderForm />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TradingDashboard;

import React, { useState, useCallback, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { LineChart as LineChartIcon } from "lucide-react";
import OrderForm from "./OrderForm";

const TradingDashboard = () => {
  const [components, setComponents] = useState({
    chart: true,
    orderBook: true,
    trades: true,
    orderForm: true,
  });

  const [btcPrice, setBtcPrice] = useState(105070.7);
  const [priceChange, setPriceChange] = useState(-5.18);
  const [chartData, setChartData] = useState([]);

  // Generate initial chart data
  useEffect(() => {
    const generateInitialData = () => {
      const basePrice = 105000;
      const data = [];
      for (let i = 0; i < 100; i++) {
        const time = new Date();
        time.setMinutes(time.getMinutes() - (100 - i));
        data.push({
          time: time.toLocaleTimeString(),
          price: basePrice + Math.random() * 1000 - 500,
          volume: Math.floor(Math.random() * 100),
        });
      }
      return data;
    };

    setChartData(generateInitialData());
  }, []);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData((prevData) => {
        const newPrice = btcPrice + (Math.random() * 20 - 10);
        setBtcPrice(newPrice);

        const newData = [
          ...prevData.slice(1),
          {
            time: new Date().toLocaleTimeString(),
            price: newPrice,
            volume: Math.floor(Math.random() * 100),
          },
        ];
        return newData;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [btcPrice]);

  // Resizable hook
  const useResizable = (initialHeight = 400) => {
    const [height, setHeight] = useState(initialHeight);
    const [isResizing, setIsResizing] = useState(false);

    const startResizing = useCallback(
      (e) => {
        e.preventDefault();
        setIsResizing(true);

        const startY = e.clientY;
        const startHeight = height;

        const handleMouseMove = (e) => {
          const deltaY = e.clientY - startY;
          const newHeight = Math.max(100, startHeight + deltaY);
          setHeight(newHeight);
        };

        const handleMouseUp = () => {
          setIsResizing(false);
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
      },
      [height]
    );

    useEffect(() => {
      if (!isResizing) {
        document.body.style.cursor = "";
      } else {
        document.body.style.cursor = "ns-resize";
      }
    }, [isResizing]);

    return { height, startResizing };
  };

  const PriceHeader = () => (
    <div className="flex items-center space-x-6 rounded-lg p-2 text-sm border bg-white dark:bg-gray-900 dark:border-gray-700">
      <div className="flex items-center space-x-2">
        <span className="font-semibold text-gray-900 dark:text-white">
          BTCUSDT
        </span>
        <span className={priceChange >= 0 ? "text-green-500" : "text-red-500"}>
          {btcPrice.toFixed(1)}
        </span>
        <span className={priceChange >= 0 ? "text-green-500" : "text-red-500"}>
          {priceChange}%
        </span>
      </div>
    </div>
  );

  const Chart = () => {
    const { height, startResizing } = useResizable(400);
    const [timeframe, setTimeframe] = useState("1D");

    return (
      <div
        className="relative bg-white dark:bg-gray-900 rounded-lg shadow-sm border dark:border-gray-700 overflow-auto"
        style={{ height: `${height}px` }}
      >
        <div className="absolute inset-0 flex flex-col">
          <div className="flex-none p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-4 text-gray-500 dark:text-gray-300 font-medium">
                <button className="px-3 py-1 text-sm  border-b-2 border-yellow-400">
                  Chart
                </button>
                <button className="px-3 py-1 text-sm ">Info</button>
                <button className="px-3 py-1 text-sm">Trading Data</button>
              </div>
              <button
                onClick={() => removeComponent("chart")}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
            <div className="flex space-x-2 text-sm mb-4">
              <select
                className="border rounded px-2 py-1 text-gray-900 dark:text-white bg-white dark:bg-gray-700"
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
              >
                <option value="15m">15m</option>
                <option value="1H">1H</option>
                <option value="4H">4H</option>
                <option value="1D">1D</option>
              </select>
            </div>
          </div>
          <div className="flex-grow overflow-hidden">
            <LineChart
              width={800}
              height={height - 140}
              data={chartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis domain={["auto", "auto"]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#8884d8"
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </div>
        </div>
        <div
          className="absolute bottom-0 right-0 w-4 h-4 cursor-ns-resize z-50"
          onMouseDown={startResizing}
        />
      </div>
    );
  };

  const OrderBook = () => {
    const { height, startResizing } = useResizable(300);
    const [orderBook, setOrderBook] = useState({
      asks: Array(8)
        .fill()
        .map(() => ({
          price: (btcPrice + Math.random() * 10).toFixed(1),
          size: Math.floor(Math.random() * 100),
          sum: Math.floor(Math.random() * 1000),
        })),
      bids: Array(8)
        .fill()
        .map(() => ({
          price: (btcPrice - Math.random() * 10).toFixed(1),
          size: Math.floor(Math.random() * 100),
          sum: Math.floor(Math.random() * 1000),
        })),
    });

    useEffect(() => {
      const interval = setInterval(() => {
        setOrderBook((prev) => ({
          asks: prev.asks.map((ask) => ({
            ...ask,
            price: (
              parseFloat(ask.price) +
              (Math.random() * 0.2 - 0.1)
            ).toFixed(1),
            size: Math.max(1, Math.floor(ask.size + (Math.random() * 10 - 5))),
          })),
          bids: prev.bids.map((bid) => ({
            ...bid,
            price: (
              parseFloat(bid.price) +
              (Math.random() * 0.2 - 0.1)
            ).toFixed(1),
            size: Math.max(1, Math.floor(bid.size + (Math.random() * 10 - 5))),
          })),
        }));
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    return (
      <div
        className="relative bg-white dark:bg-gray-900 rounded-lg shadow-sm border dark:border-gray-700 overflow-auto"
        style={{ height: `${height}px` }}
      >
        <div className="absolute inset-0 flex flex-col overflow-auto">
          <div className="flex-none flex justify-between items-center p-2 border-b dark:border-gray-600">
            <h3 className="font-medium text-gray-900 dark:text-white">
              Order Book
            </h3>
            <button
              onClick={() => removeComponent("orderBook")}
              className="text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>
          <div className="flex-grow overflow-auto">
            <div className="p-2">
              <div className="sticky top-0 grid grid-cols-3 text-sm text-gray-500 dark:text-gray-400 mb-2 bg-white dark:bg-gray-800">
                <div>Price (USD)</div>
                <div>Size (Cont)</div>
                <div>Sum (Cont)</div>
              </div>
              <div className="space-y-1">
                {orderBook.asks.map((ask, i) => (
                  <div key={`ask-${i}`} className="grid grid-cols-3 text-sm">
                    <div className="text-red-500">{ask.price}</div>
                    <div>{ask.size}</div>
                    <div>{ask.sum}</div>
                  </div>
                ))}
                <div className="text-center py-2 text-lg font-semibold text-gray-800 dark:text-white">
                  {btcPrice.toFixed(1)}
                </div>
                {orderBook.bids.map((bid, i) => (
                  <div key={`bid-${i}`} className="grid grid-cols-3 text-sm">
                    <div className="text-green-500">{bid.price}</div>
                    <div>{bid.size}</div>
                    <div>{bid.sum}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 right-0 w-4 h-4 cursor-ns-resize z-50"
          onMouseDown={startResizing}
        />
      </div>
    );
  };

  const Trades = () => {
    const { height, startResizing } = useResizable(200);
    const [trades, setTrades] = useState([
      {
        price: btcPrice.toFixed(1),
        amount: Math.floor(Math.random() * 10) + 1,
        time: new Date().toLocaleTimeString(),
      },
    ]);

    useEffect(() => {
      const interval = setInterval(() => {
        const newTrade = {
          price: (btcPrice + (Math.random() * 20 - 10)).toFixed(1),
          amount: Math.floor(Math.random() * 10) + 1,
          time: new Date().toLocaleTimeString(),
        };
        setTrades((prev) => [newTrade, ...prev].slice(0, 5));
      }, 1000);

      return () => clearInterval(interval);
    }, [btcPrice]);

    return (
      <div
        className="relative bg-white dark:bg-gray-900 rounded-lg shadow-sm border dark:border-gray-700"
        style={{ height: `${height}px` }}
      >
        <div className="absolute inset-0 flex flex-col">
          <div className="flex-none flex justify-between items-center p-2 border-b dark:border-gray-600">
            <h3 className="font-medium text-gray-900 dark:text-white">
              Trades
            </h3>
            <button
              onClick={() => removeComponent("trades")}
              className="text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>
          <div className="flex-grow overflow-auto">
            <div className="p-2">
              <div className="sticky top-0 grid grid-cols-3 text-sm text-gray-500 dark:text-gray-400 mb-2 bg-white dark:bg-gray-800">
                <div>Price(USD)</div>
                <div>Amount(Cont)</div>
                <div>Time</div>
              </div>
              <div className="space-y-1">
                {trades.map((trade, i) => (
                  <div key={i} className="grid grid-cols-3 text-sm">
                    <div
                      className={
                        parseFloat(trade.price) >= btcPrice
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      {trade.price}
                    </div>
                    <div>{trade.amount}</div>
                    <div>{trade.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 right-0 w-4 h-4 cursor-ns-resize z-50"
          onMouseDown={startResizing}
        />
      </div>
    );
  };

  const removeComponent = (name) => {
    setComponents((prev) => ({
      ...prev,
      [name]: false,
    }));
  };

  return (
    <div className="p-1 bg-gray-50 dark:bg-[#0B0E11] min-h-screen w-full">
      <PriceHeader />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-0 md:gap-1 mt-1">
        <div className="col-span-3 lg:col-span-4">
          <div className="grid grid-rows  lg:grid-cols-4 gap-1">
            <div className="col-span-3">{components.chart && <Chart />}</div>
            <div className="col-span-3 lg:grid lg:col-span-1 space-y-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-1">
              {components.orderBook && <OrderBook />}
             
              {components.trades && <Trades />}
              </div>
             
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 w-full mt-1 md:mt-0">
          {components.orderForm && <OrderForm />}
        </div>
      </div>
    </div>
  );
};

export default TradingDashboard;

// const OrderForm = () => {
//   const { height, startResizing } = useResizable(380);

//   return (
//     <div
//       className="relative bg-white rounded-lg shadow-sm border resizable"
//       style={{ height: `${height}px` }}
//     >
//       <div className="p-4">
//         <div className="space-y-4">
//         <div className="flex space-x-1">
//               <button className="px-3 py-1 text-sm border-b-2 border-yellow-400">
//                Limit
//               </button>
//               <button className="px-3 py-1 text-sm text-gray-500">Market</button>
//               <button className="px-3 py-1 text-sm text-gray-500">
//                  Trailing Stop
//               </button>
//             </div>
//           <div>
//             <label className="block text-sm text-gray-600 mb-1">Price</label>
//             <input
//               type="text"
//               value={btcPrice.toFixed(1)}
//               className="w-full p-2 border rounded"
//               readOnly
//             />
//           </div>
//           <div>
//             <label className="block text-sm text-gray-600 mb-1">Size</label>
//             <input
//               type="text"
//               value="1 Cont = 100 USD"
//               className="w-full p-2 border rounded"
//               readOnly
//             />
//           </div>
//           <div className="flex flex-col items-center text-center gap-2">
//             <a
//               href="/register"
//               className="w-full py-2 text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-500 rounded-lg transition-all duration-300 transform hover:scale-105"
//             >
//               Register Now
//             </a>
//             <a
//               href="/login"
//               className="w-full py-2 text-sm font-medium text-gray-700 hover:text-white bg-gray-300 hover:bg-gray-500 dark:text-gray-300 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 transform hover:scale-105"
//             >
//               Log In
//             </a>
//           </div>
//         </div>
//       </div>
//       <div
//         className="absolute bottom-0 right-0 w-4 h-4 cursor-ns-resize"
//         onMouseDown={startResizing}
//       />
//     </div>
//   );
// };
