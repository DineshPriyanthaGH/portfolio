const BubbleBackground = () => {
    const bubbles = new Array(20).fill(0); // Number of bubbles
  
    return (
      <div className="fixed top-0 left-0 w-full h-screen -z-20 overflow-hidden pointer-events-none">
        {bubbles.map((_, i) => {
          const size = Math.random() * 40 + 10;
          const left = Math.random() * 100;
          const duration = Math.random() * 10 + 5;
          const delay = Math.random() * 10;
  
          return (
            <div
              key={i}
              className="absolute bottom-0 bg-white rounded-full opacity-20"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                animation: `floatBubble ${duration}s linear ${delay}s infinite`,
              }}
            />
          );
        })}
      </div>
    );
  };
  
  export default BubbleBackground;
  