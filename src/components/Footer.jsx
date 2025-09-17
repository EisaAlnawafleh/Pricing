import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#080c16] h-[430px] flex flex-row ">
      <div className="pl-[377px] pt-[96px]">
        <a href="">
          <img
            src="https://pulseapp.com/img/pulse-logo.svg"
            alt=""
            className="w-[150px]"
          />
        </a>
        <button className=" mt-[55px] w-[300px] cursor-pointer h-[56px] hover:border-5 hover:border-[#464951] hover:border-t hover:border-r bg-[#10c770] font-[700]">
          Sign Up For Free 30-Day Trail
        </button>
        <p className="mt-[100px]">
          <a href="" className="text-[#83858a]">
            ©2019 Pulseapp.com, Inc. All Rights Reserved | Terms of Use |
            Privacy Policy | EU Privacy <br /> Pulse is made by Simple Focus. We
            also make Ballpark, Sifter, and Curated.
          </a>
        </p>
      </div>
      <div className="flex flex-row  gap-[130px] leading-10 mt-[105px] text-[18px] font-[700]">
        <section className="text-white cursor-pointer ">
          Product
          <ul className="text-[#00ad6bd4] ">
            <li className="hover:text-white ">Features</li>
            <li className="hover:text-white ">Pricing</li>
            <li className="hover:text-white ">Sign Up</li>
          </ul>
        </section>
        <section className="text-white cursor-pointer">
          Company
          <ul className="text-[#00ad6bd4]">
            <li className="hover:text-white ">Customer Stories</li>
            <li className="hover:text-white ">About</li>
            <li className="hover:text-white ">Contact</li>
          </ul>
        </section>
        <section className="text-white cursor-pointer">
          Resources
          <ul className="text-[#00ad6bd4]">
            <li className="hover:text-white ">Support</li>
            <li className="hover:text-white ">Blog</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Footer;
