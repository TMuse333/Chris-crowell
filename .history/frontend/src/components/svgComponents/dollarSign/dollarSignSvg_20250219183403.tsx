import React, { useState } from "react";

// Define the path data as a constant outside the component
const DOLLAR_SIGN_PATH = "M118.1,235.517c7.898,0,14.31-6.032,14.31-13.483c0-7.441,0-13.473,0-13.473 c39.069-3.579,64.932-24.215,64.932-57.785v-0.549c0-34.119-22.012-49.8-65.758-59.977V58.334c6.298,1.539,12.82,3.72,19.194,6.549 c10.258,4.547,22.724,1.697,28.952-8.485c6.233-10.176,2.866-24.47-8.681-29.654c-11.498-5.156-24.117-8.708-38.095-10.236V8.251 c0-4.552-6.402-8.251-14.305-8.251c-7.903,0-14.31,3.514-14.31,7.832c0,4.335,0,7.843,0,7.843 c-42.104,3.03-65.764,25.591-65.764,58.057v0.555c0,34.114,22.561,49.256,66.862,59.427v33.021 c-10.628-1.713-21.033-5.243-31.623-10.65c-11.281-5.755-25.101-3.72-31.938,6.385c-6.842,10.1-4.079,24.449,7.294,30.029 c16.709,8.208,35.593,13.57,54.614,15.518v13.755C103.79,229.36,110.197,235.517,118.1,235.517z M131.301,138.12 c14.316,4.123,18.438,8.257,18.438,15.681v0.555c0,7.979-5.776,12.651-18.438,14.033V138.12z M86.999,70.153v-0.549 c0-7.152,5.232-12.657,18.71-13.755v29.719C90.856,81.439,86.999,77.305,86.999,70.153z";

interface Props {
  isClicked:boolean
}

const DollarSignSvg:React.FC<Props> = ({
  isClicked
}) => {
  // const [gradientColor, setGradientColor] = useState("#015A01");

 
//    absolute top-1/2 -translate-y-1/2 left-[${isClicked ? "0%" : "2%" }] 
  return (
    <section className={`w-[35vw] h-[35vw]
    max-w-[200px] max-h-[200px] bg-white rounded-3xl p-2
    transition-all  flex justify-center items-center 
    absolute top-1/2 -translate-y-1/2
    duration-700
  `}
  style={{
    left:isClicked ? "50%" : "0%"
  }}
  >
  
        {/* Render the SVG with the gradient */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35vw"
          height="35vw"
          viewBox="0 0 235.517 235.517"
          className=""
        >
          {/* Gradient definition */}
          
          <defs>
    <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#008000" stopOpacity="1" />
      <stop offset="50%" stopColor="#17C517" stopOpacity="1" />
      <stop offset="100%" stopColor="#008000" stopOpacity="1" />

      {/* Animate gradient movement */}
      <animateTransform 
        attributeName="gradientTransform"
        type="translate"
        from="0 -100"
        to="0 100"
        dur="2s"
        repeatCount="indefinite"
      />
    </linearGradient>


          </defs>

          <g>
            {/* Reference the gradient in the fill */}
            <path d={DOLLAR_SIGN_PATH} fill="url(#greenGradient)" />
          </g>
        </svg>
      

      {/* Optional: Button to toggle gradient color */}
      {/* <button
        onClick={handleClick}
        className="mt-5 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle SVG Gradient Color
      </button> */}
    </section>
  );
};

export default DollarSignSvg;
