const DiagonalClipContainer = () => {
    return (
      <div
        className="relative w-full h-64 p-6"
        style={{
          background: "linear-gradient(to bottom, #00bfff, #0099cc)", // Light to darker blue
          clipPath: "polygon(0% 0%, 100% 0%, 80% 100%, 0% 200%)", // Adjusted for 40% diagonal
        }}
      />
    );
  };
  
  export default DiagonalClipContainer;
  