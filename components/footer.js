import React from "react";
import Image from "next/image";
import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook";
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";

const NavItem = (props) => (
  <li>
    <a
      className="md:text-lg font-bold text-white px-2 py-1 hover:bg-red-900 rounded transition-colors duration-300"
      href={props.href}
    >
      {props.text}
    </a>
  </li>
);

const footer = () => {
  return (
    <div>
      <footer className="p-5 grid grid-cols-5 bg-footer bg-cover bg-no-repeat">
        <div className="grid-span-1 flex items-center">
          <a target="_blank" rel="noopener noreferrer">
            <span className="">
              <Image
                src="/blklogo.png"
                alt="Dark Logo"
                width={165}
                height={165}
              />
            </span>
          </a>
        </div>
        <div className="col-span-4 hidden md:flex justify-between py-5 px-10 ">
          <div className="">
            <h1 className="text-red-600 font-bold pb-5">Contact #</h1>
            <h1 className="text-white font-bold pb-5">+1 (512) 994-8982</h1>
          </div>
          <div>
            <h1 className="text-red-600 font-bold pb-5">Our Home</h1>
            <p className="text-white font-bold w-36">
              5000 Burnet Rd, Austin, TX 78756
            </p>
          </div>
          <div className="">
            <h1 className="text-red-600 font-bold pb-5">Connect</h1>
            <p className="text-white font-bold w-36">
              Follow our journey on social channels
            </p>
            <div className="text-nmr-red pt-3 flex">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/tlocssonorahotdogs/"
              >
                <AiOutlineInstagram className="h-8 w-8" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/profile.php?id=100063692522844"
              >
                <AiFillFacebook className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
        <div className="md:hidden flex justify-between items-center ">
          <ul className="flex space-x-2 font-nmr">
            <NavItem href="/about" text="About" />
            <NavItem href="/catering" text="Catering" />
            <NavItem href="/contact" text="Contact" />
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default footer;
