import Slides from "./Slides";
import { useState } from "react";

const data = [
  {
    id: 1,
    div_ft:
      "[Trello is] great for simplifying complex processes. As a manager, I can chunk [processes] down into bite-sized pieces for my team and then delegate that out, but still keep a bird's-eye view.",
    div_Lb1: "Joey Rosenberg",
    div_Lb2: "Global Leadership Director at Women Who Code",
    div_Lb_link: "https://blog.trello.com/women-who-code",
    div_r1:
      "75% of organizations report that Trello delivers value to their business within 30 days.",
    div_r1_link: "",
  },
  {
    id: 2,
    div_ft:
      "Whether someone is in the office, working from home, or working on-site with a client, everyone can share context and information through Trello.",
    div_Lb1: "Sumeet Moghe",
    div_Lb2: "Product Manager at ThoughtWorks",
    div_Lb_link: "https://www.atlassian.com/customers/thoughtworksx`",
    div_r1: "81% of customers chose Trello for its ease of use.",
    div_r1_link: "",
  },
  {
    id: 3,
    div_ft:
      "We used Trello to provide clarity on steps, requirements, and procedures. This was exceptional when communicating with teams that had deep cultural and language differences.",
    div_Lb1: "Jefferson Scomacao",
    div_Lb2: "Development Manager at IKEA/PTC",
    div_Lb_link: "https://www.atlassian.com/customers/ptc",
    div_r1:
      "74% of customers say Trello has improved communication with their co-workers and teams.",
    div_r1_link: "",
  },
];
function Carousel() {
  const [current, setCurrent] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  console.log(current);
  const handleNext = () => {
    if (current < data.length - 1) setCurrent(current + 1);
    else setCurrent(0);
    setIsClicked(!isClicked);
  };
  const handlePrev = () => {
    if (current > 0) setCurrent(current - 1);
    else setCurrent(data.length - 1);
    setIsClicked(!isClicked);
  };
  return (
    <div className={`max-w-[1108px] trans max-h-[535px] p-2 flex `}>
      <div className={` overflow-hidden relative  `}>
        <div className="w-full flex gap-2 justify-end items-center px-10 ">
          <div
            className={`${
              current !== 0
                ? "rounded-full h-2 w-2 bg-[#091F41]"
                : "rounded-sm h-1 w-10 bg-[#8490A0]"
            }`}
          ></div>
          <div
            className={`${
              current !== 1
                ? "rounded-full h-2 w-2 bg-[#091F41]"
                : "rounded-sm h-1 w-10 bg-[#8490A0]"
            }`}
          ></div>
          <div
            className={`${
              current !== 2
                ? "rounded-full h-2 w-2 bg-[#091F41]"
                : "rounded-sm h-1 w-10 bg-[#8490A0]"
            }`}
          ></div>
          <div className="flex ml-2 p-1 gap-2">
            <button
              onClick={handlePrev}
              className=" rounded-full w-8 h-8 bg-[#F4F5F7] font-bold"
            >
              {`<`}
            </button>
            <button
              onClick={handleNext}
              className=" rounded-full w-8 h-8 bg-[#F4F5F7] font-bold"
            >
              {`>`}
            </button>
          </div>
        </div>
        <div className="flex gap- ">
          <div className=" flex-shrink-0 "></div>

          <Slides
            data={data[current]}
            current={current}
            isClicked={isClicked}
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
