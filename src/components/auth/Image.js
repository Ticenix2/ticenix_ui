import React from "react";

const Image = () => {
  return (
    <div
      className="w-1/2 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/login.jpg')",
      }}
    >
      <div className="w-full h-full bg-gradient-to-t from-black/40 to-transparent"></div>
    </div>
  );
};

export default Image;
