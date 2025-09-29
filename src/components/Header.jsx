const Header = () => {
  return (
    <div className="flex font-bold flex-row w-[1200px]  items-center justify-between mx-auto mt-10 ">
      <div>
        <a href="#">
          <img
            src="https://raw.githubusercontent.com/EisaAlnawafleh/pulseapp/9555d49a51eb6b4d340bfac668080aa33e85a685/img/icon_header.svg"
            alt=""
          />
        </a>
      </div>
      <div className=" p-1 flex flex-row gap-10 ">
        <a href="" className="text-green-600  hover:text-black">
          Features
        </a>
        <a href="" className="text-green-600 hover:text-black">
          Customper Stories
        </a>
        <a href="">Pricing</a>
        <a href="" className=" text-green-600 hover:text-black">
          Blog
        </a>
        <a
          href=""
          className="text-green-600  py-1 px-5 border-2 hover:border-b-10  hover:border-l-10  "
        >
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Header;
