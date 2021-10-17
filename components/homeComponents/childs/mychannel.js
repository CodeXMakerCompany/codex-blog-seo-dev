import React from "react";

export const MyChannel = () => {
  return (
    <iframe
      style={{ width : '100%', height : '100%'}}
      src="https://www.youtube.com/embed/ngCtsVrte5c"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  );
};
