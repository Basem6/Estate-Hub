import React from 'react';

/**
 * SVG Text Component generated from: "Real Estate"
 * Font: Arial
 * Size: 50px
 * Generated on: 7/10/2026, 11:20:08 AM
 */
const TextToSvgComponent= ({
  className = "md:scale-150 scale-100",
  style = {},
  fill = "transparent",
  stroke = "white",
  strokeWidth = 1,
  width = "100%",
  height = "100%",
  ...props
}) => {
  return (
    <svg
      className={className}
      style={style}
      width={width}
      height={height}
      viewBox="0 0 267.703 70.001"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path
          className="text2"
          d="M130.9 70.001L103.9 70.001L103.9 0.001L130.5 0.001L155.9 30.601L155.9 0.001L182.9 0.001L182.9 70.001L156.3 70.001L130.9 39.401L130.9 70.001ZM28 70.001L0 70.001L0 0.001L62.8 0.001L62.8 23.201L28 23.201L28 30.401L52 30.401L52 49.601L28 49.601L28 70.001ZM226.6 70.001L190.9 70.001L190.9 0.001L226.6 0.001Q238.7 0.001 247.95 4.101Q257.2 8.201 262.45 15.451Q267.7 22.701 267.7 32.101L267.7 37.901Q267.7 47.301 262.45 54.551Q257.2 61.801 247.95 65.901Q238.7 70.001 226.6 70.001ZM95.9 70.001L67.9 70.001L67.9 0.001L95.9 0.001L95.9 70.001ZM218.9 22.601L226.6 22.601Q231.6 22.601 234.95 25.501Q238.3 28.401 238.3 32.601L238.3 37.401Q238.3 41.601 234.95 44.501Q231.6 47.401 226.6 47.401L218.9 47.401L218.9 22.601Z"
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    </svg>
  );
};
export default TextToSvgComponent;
// Usage example:
// import TextToSvgComponent from './TextToSvgComponent';
// 
// function App() {
//   return (
//     <div>
//       <TextToSvgComponent 
//         width="200" 
//         height="100" 
//         fill="#ff0000"
//         className="my-svg"
//       />
//     </div>
//   );
// }