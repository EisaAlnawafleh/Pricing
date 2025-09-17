

const Main_3 = ({ title, title1, title2, title3, title4 }) => {
  return (
    <div className=" bg-white">
      <p className="text-[48px] ml-[380px]  pt-[108px] font-bold">{title}</p>
      <div className="flex flex-row ml-[380px] mr-[412px] text-[20px] gap-[44px] pt-[35px]">
        <div className="w-[555px]">
         <span className="font-bold"> {title1}</span> <br /> <span className="font-[300]">{title3}</span>
        </div>
        <div className="w-[555px]">
         <span className="font-bold"> {title2}</span> <br /> <span className="font-[300]">{title4}</span>
        </div>
        
      </div>
    </div>
  );
};

export default Main_3;
// h-[888px]
