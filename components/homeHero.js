import Image from "next/image";
import React from "react";

const homeHero = () => {
  return (
    <div>
      <div className="text-center text-white flex flex-col font-nmr font-bold p-10 md:p-0">
        <h3 className=" md:text-xl">T-Loc&apos;s World Famous</h3>
        <h1 className=" text-4xl md:text-9xl">SONORAN</h1>
        <h2 className="text-xl md:text-4xl">HOT DOGS</h2>
      </div>
      {/* <div>
        <Image src="/dog.png" width="7000" height="5000" alt="Hot Dog" />
      </div> */}
    </div>
  );
};

export default homeHero;
