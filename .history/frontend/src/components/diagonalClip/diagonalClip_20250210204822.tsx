const DiagonalClipContainer = () => {
    return (
      <div className="relative w-full h-64 bg-gray-200 p-6"
        style={{
            background: "linear-gradient(to bottom, #00bfff, #0099cc)", // Light to darker blue
          clipPath: "polygon(0% 0%, 100% 0%, 55% 100%, 0% 100%)",
        }}
      >
       
      </div>
    );
  };
  
  export default DiagonalClipContainer;
  