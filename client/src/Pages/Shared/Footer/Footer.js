import React from "react";
import { FaFacebook , FaInstagram, FaYoutube} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="hero bg-base-100 container px-16 lg:px-24 ">
      <div className="hero-content text-center">
        <div className="max-w-md mx-auto">
        <ul className="flex gap-3 justify-center">
            <li className="text-xl bg-slate-200 p-2 rounded-xl cursor-pointer"><FaFacebook/></li>
            <li className="text-xl bg-slate-200 p-2 rounded-xl cursor-pointer"><FaInstagram/></li>
            <li className="text-xl bg-slate-200 p-2 rounded-xl cursor-pointer"><FaYoutube/></li>
        </ul>
        <p className="my-6 text-[#ADADAD]">Copyright ©2023 All rights reserved | Rubayed Ahmed</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
