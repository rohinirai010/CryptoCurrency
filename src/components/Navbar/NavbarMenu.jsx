import React from 'react';

const NavbarMenu = () => {
  const menuItems = [
    { label: 'Futures', isNew: false },
    { label: 'Options', isNew: true },
    { label: 'Trading Bots', isNew: false },
    { label: 'Copy Trading', isNew: false },
    { label: 'Data', isNew: false },
    { label: 'BFUSD', isNew: true },
    { label: 'Futures Present', isNew: true }
  ];

  return (
    <div className="flex space-x-1">
      {menuItems.map((item) => (
        <button
          key={item.label}
          className="px-3 py-1.5 text-sm hover:bg-gray-100 rounded-md relative"
        >
          {item.label}
          {item.isNew && (
            <span className="absolute top-0 right-0 text-[10px] text-yellow-500">
              New
            </span>
          )}
        </button>
      ))}
    </div>
  );
};

export default NavbarMenu;