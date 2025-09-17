import React from "react";

const Card_2 = () => {
  return (
    <div className="flex flex-row ">
      <div className="bg-white overflow-hidden  group  w-[393px] text-center h-[681px] mt-[86px] ml-[86px]  border border-[#00ad6a] rounded-t-[10px]">
        <a href="">
          <p className="bg-[#00ad6a] text-white ">RECOMMENDED</p>
          <p className="text-[48px] text-[#00ad6a] font-bold flex flex-col mt-3">
            <span> Small </span>
            <span>Business</span>
            <span> Plan</span>
            <span className="text-[#83858a] text-[24px]">$59 per month</span>
          </p>
          <button
            className="w-[203px] opacity-80 group-hover:scale-120 hover:opacity-100
         h-[54px] bg-[#1fe374] mt-5 font-bold text-[20px]"
          >
            Sign Up Now
          </button>

          <section className="ml-6 mt-4 flex flex-col gap-3  ">
            <span className="text-[20px] pr-10  text-[#83858a]">
              You get Pulse Basics, plus:
            </span>
            <ul className="text-[15px] text-[#06b66c] text-[22px]  flex flex-col gap-3">
              <li className="text-left flex flex-row">
                <i class="bx  bx-check"></i>
                <span className="text-[#464951] text-[16px]  ">
                  Manage cash flow across multiple financial accounts
                </span>
              </li>
              <li className="text-left flex flex-row">
                <i class="bx  bx-check"></i>
                <span className="text-[#464951] text-[16px]  ">
                  Invite your investors, book keeper, or management team to see
                  reports or manage cash flow
                </span>
              </li>
              <li className="text-left flex flex-row">
                <i class="bx  bx-check"></i>
                <span className="text-[#464951] text-[16px]  ">
                  Integrate with QuickBooks Online for more accurate cash flow
                </span>
              </li>
              <li className="text-left flex flex-row">
                <i class="bx  bx-check"></i>
                <span className="text-[#464951] text-[16px]  ">
                  Track your actual cash flow alongside your projected cash flow
                </span>
              </li>
            </ul>
          </section>
        </a>
      </div>

      <div className="h-[570px] group w-[392px] border border-[#d6dae5] bg-white mt-[142px] mr-[100px] text-center">
        <span className="bg-[#f2f3f3] h-[80px] block text-[14px] pt-5 font-[400]">
          Complex business with multiple financial <br /> accounts, currencies,
          or auditing needs?
        </span>
        <p className="text-[48px] text-[#00ad6a] font-bold flex flex-col mt-1">
          <span> Unlock Extea </span>
          <span>Features</span>

          <span className="text-[#83858a] text-[24px]">$89 per month</span>
        </p>
        <button
          className="w-[203px] opacity-80 group-hover:scale-120 hover:opacity-100
         h-[54px] bg-[#1fe374] mt-5 font-bold text-[20px]"
        >
          Try Premium
        </button>

        <section className="ml-6 mt-1 flex flex-col gap-3  ">
          <span className="text-[20px] pr-10  text-[#83858a]">
            GET IT ALL, plus:
          </span>
          <ul className="text-[15px] text-[#06b66c] text-[22px]  flex flex-col gap-3">
            <li className="text-left flex flex-row">
              <i class="bx  bx-check"></i>
              <span className="text-[#464951] text-[16px]  ">
                Manage cash flow across unlimited financial accounts
              </span>
            </li>
            <li className="text-left flex flex-row">
              <i class="bx  bx-check"></i>
              <span className="text-[#464951] text-[16px]  ">
                Convert to any currency for localized cash flow reporting and
                projections
              </span>
            </li>
            <li className="text-left flex flex-row">
              <i class="bx  bx-check"></i>
              <span className="text-[#464951] text-[16px]  ">
                Attach invoices or contracts to your cash flow entries for
                accountability and auditing
              </span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Card_2;
