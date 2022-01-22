import Image from "next/image";
import React from "react";
import Layout2 from "../components/layoutSd";

const info = [
  {
    title: "Phone",
    sub: "(XXX) XXX - XXXX",
    icon: "/images/phone.png",
  },
  {
    title: "Email",
    sub: "520tlocs@gmail.com",
    icon: "/images/email.png",
  },
  {
    title: "Address",
    sub: "5000 Burnet Rd, Austin, Tx 78756",
    icon: "/images/address.png",
  },
];

const contact = () => {
  return (
    <div className="bg-yellowBg bg-cover bg-no-repeat min-h-screen">
      <div className="flex flex-col px-5 items-center">
        {/* Center box */}
        <div className="grid md:grid-cols-2 rounded-md max-w-6xl pt-20">
          <div className="bg-redBg flex flex-col rounded-md lg:rounded-l-md lg:rounded-r-none py-5 md:py-10 justify-center items-center mb-5 md:mb-0">
            <div className="text-[#F1E8DC] text-center pb-5 lg:pb-10">
              <h1 className=" text-4xl lg:text-6xl font-nmr">
                Let&apos;s Talk
              </h1>
              <p className=" text-lg lg:text-2xl">
                We-d love to hear from you!
              </p>
            </div>
            <div className="w-full">
              <form className="flex flex-col space-y-4 px-5 md:px-10 w-full">
                <input
                  placeholder="name"
                  className="rounded-md bg-[#F1E8DC] px-2 py-2"
                ></input>
                <input
                  placeholder="email address"
                  className="rounded-md bg-[#F1E8DC] px-2 py-2"
                ></input>
                <textarea
                  rows="3"
                  placeholder="type your message here!"
                  className="rounded-md bg-[#F1E8DC] px-2 py-2"
                ></textarea>
                <div className="pt-3 text-center">
                  <button className="px-10 py-2 bg-nmr-black text-[#F1E8DC] rounded-md text-lg font-bold font-nmr md:w-48">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* map */}
          <div className="flex">
            <Image src="/gmap.png" alt="google map" width={520} height={552} />
          </div>
        </div>
        {/* icons */}
        <div className="grid md:grid-cols-3 px-14 py-20 md:text-center max-w-6xl w-full">
          {info.map((items, i) => (
            <div className="grid grid-cols-2  md:grid-cols-1">
              <div className="flex justify-center items-center md:block">
                <Image
                  src={items.icon}
                  alt="phone icon"
                  width={59}
                  height={59}
                />
              </div>

              <div>
                <h1 className="font-nmr font-bold text-lg lg:text-3xl text-nmr-black">
                  {items.title}
                </h1>
                <h2 className="text-nmr-red font-semibold">{items.sub}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

contact.Layout = Layout2;

export default contact;
