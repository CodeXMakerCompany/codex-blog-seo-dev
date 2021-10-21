import React from "react";
import Image from 'next/image';

const EmptyContentGlobal = () => {
  return (
    <div align="center" width="50%">
      <p>No content yet :c</p>
      <Image
        src="https://res.cloudinary.com/codexmaker/image/upload/v1592424888/darling_zkfxab.gif"
        alt="loader"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default EmptyContentGlobal;
