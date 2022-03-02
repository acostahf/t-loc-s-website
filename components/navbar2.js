import Image from "next/image";
import Link from "next/link";

const NavItem = (props) => (
  <li>
    <a
      className="text-xs px-1 md:text-lg font-bold text-nmr-lightBrown py-1 hover:bg-red-900 rounded transition-colors duration-300"
      href={props.href}
    >
      {props.text}
    </a>
  </li>
);

const navbar = () => (
  <div className="w-full bg-no-repeat bg-cover bg-redBg px-2">
    <nav className="flex justify-between items-center py-4 px-3 md:px-10">
      <div className="flex items-center ">
        <Link href="/">
          <a>
            <Image src="/white-logo.png" alt="Logo" width={69} height={69} />{" "}
          </a>
        </Link>
      </div>
      <div>
        <ul className="flex space-x-2 font-nmr">
          <NavItem href="/about" text="About" />
          <NavItem href="/catering" text="Catering" />
          <NavItem href="/contact" text="Contact" />

          <li>
            <a
              className="text-xs px-1 bg-[#333333] md:text-lg font-bold text-nmr-lightBrown md:px-3 py-2 hover:bg-nmr-lightBrown hover:text-[#333333] rounded transition-colors duration-300"
              href="https://tlocs-hotdogs-103892-107872.square.site"
            >
              ORDER NOW
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default navbar;
