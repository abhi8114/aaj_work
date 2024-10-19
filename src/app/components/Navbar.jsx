import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import "../globals.css";

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between p-4 bg-white border-b border-gray-200 py-[15px]">
      <Link href="/" passHref>
        <Image
          src="/images/logo.svg"
          alt="AAJ Logo"
          width={151}
          height={30}
          className="absolute top-[2%] left-[5%] "
          priority
        />
      </Link>

      {/* Center - Navigation Links */}
      <div className="  absolute left-[299px] top-[21px] w-[503px] h-[24px] flex space-x-6 text-gray-700 sm:space-x-8  ">
        <Link
          href="/company"
          className="hover:text-red-600 transition-colors duration-200 "
        >
          Company
        </Link>
        <Link
          href="/shipping"
          className="hover:text-red-600 transition-colors duration-200 "
        >
          Calculate Shipping Cost
        </Link>
        <Link
          href="/blogs"
          className="hover:text-red-600 transition-colors duration-200 font-hk-grotesk"
        >
          Blogs
        </Link>
        <Link
          href="/contact"
          className="hover:text-red-600 transition-colors duration-200"
        >
          Contact Us
        </Link>
      </div>

      {/* Right - Track Shipment & Login Button */}
      <div className="  flex items-center space-x-6 sm:space-x-8">
        <Link
          href="/track"
          className="text-red-600 hover:text-red-700 hover:underline flex items-center transition-colors duration-200 whitespace-nowrap font-semibold"
        >
          <CiLocationOn  />
          Track Shipment
        </Link>

        <button className="bg-red-600 text-white px-10 py-2 w-[141.07 px]h-[40px] rounded  hover:bg-red-700 transition-colors duration-200">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
