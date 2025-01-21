// import { useState, useCallback } from 'react';

// export const useResizable = (initialHeight = 400) => {
//   const [height, setHeight] = useState(initialHeight);
//   const [isResizing, setIsResizing] = useState(false);

//   const startResizing = useCallback(() => {
//     setIsResizing(true);
//   }, []);

//   const stopResizing = useCallback(() => {
//     setIsResizing(false);
//   }, []);

//   const resize = useCallback((e) => {
//     if (isResizing) {
//       setHeight(e.clientY);
//     }
//   }, [isResizing]);

//   return {
//     height,
//     startResizing,
//     stopResizing,
//     resize,
//     isResizing
//   };
// };