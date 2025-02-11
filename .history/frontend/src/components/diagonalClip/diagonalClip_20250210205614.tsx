const DiagonalClipContainer = () => {
    return (
      <div
        className="absolute w-full h-full
        z-[1]"
        style={{
          background: "linear-gradient(to bottom, #00bfff, #0099cc)", // Light to darker blue
          clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 100% 100%)", // Adjusted for 40% diagonal
        }}
      />
    );
  };
  
  export default DiagonalClipContainer;
  