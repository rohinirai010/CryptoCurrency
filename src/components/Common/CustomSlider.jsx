import React, { useState, useRef, useEffect } from 'react';

const CustomSlider = () => {
  const [value, setValue] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const sliderRef = useRef(null);
  const isDragging = useRef(false);

  const handleMouseDown = () => {
    isDragging.current = true;
    setIsActive(true);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    // Add a small delay before hiding the value to make it feel smoother
    setTimeout(() => {
      setIsActive(false);
    }, 1000);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    
    const slider = sliderRef.current;
    const rect = slider.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = Math.round((x / rect.width) * 100);
    setValue(percentage);
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="px-4 pt-8">
      <div className="relative w-full">
        {/* Value indicator */}
        {isActive && (
          <div className="absolute -top-8 left-0 w-full">
            <div 
              className="bg-gray-900 text-white text-sm rounded px-2 py-1 absolute -translate-x-1/2 transition-opacity duration-200"
              style={{ left: `${value}%` }}
            >
              {value}%
            </div>
          </div>
        )}

        {/* Slider track */}
        <div 
          ref={sliderRef}
          className="relative w-full h-1 bg-gray-500 rounded cursor-pointer"
          onMouseDown={handleMouseDown}
        >
          {/* Filled track */}
          <div 
            className="absolute h-full bg-yellow-600 rounded"
            style={{ width: `${value}%` }}
          />

          {/* Slider thumb */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-yellow-600 rounded-full cursor-grab active:cursor-grabbing"
            style={{ left: `${value}%`, transform: 'translate(-50%, -50%)' }}
            onMouseDown={handleMouseDown}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;