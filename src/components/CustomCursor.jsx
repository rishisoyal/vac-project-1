import React, { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const trail = document.getElementById("trail");

    function handleMouseMove(e) {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;
    }

    document.addEventListener("mousemove", (e) => handleMouseMove(e));
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div id="cursor"></div>
      <div id="trail"></div>
    </>
  );
};

export default CustomCursor;
