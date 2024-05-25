import download from "../../images/download.svg";
import ptc_logo from "../../images/ptc-logo.svg";
import thoughtworks from "../../images/thoughtworks.svg";
import WomenWhoCode_logo from "../../images/WomenWhoCode_logo.svg";
const logo = [ptc_logo, thoughtworks, WomenWhoCode_logo];

function Slides({ data, current, isClicked }) {
  const { id, div_ft, div_Lb1, div_Lb2, div_Lb_link, div_r1, div_r1_link } =
    data;

  return (
    <>
      <div
        className={`w-full h-full   flex justify-between shadow-lg ${
          isClicked ? "transation here" : ""
        } transition-all duration-500 ease-in-out`}
      >
        <div className={`bg-white rounded-s-3xl w-[730px] h-[472px] pb-2   `}>
          <div
            className=" w-full h-2/3 mb-5 px-10 py-8"
            style={{
              backgroundImage: `url(${download})`,
              backgroundSize: "cover",
            }}
          >
            <div className="h-32  mb-2  text-xl">{div_ft}</div>
          </div>
          <div className="rounded-s-3xl w-full ">
            <div className="w-32 h-[1px] ml-3 bg-black"></div>
            <div className="m-2 text-xs font-medium ">
              <p>{div_Lb1}</p>
              <p>{div_Lb2}</p>
            </div>
            <div className="flex justify-between px-8">
              <img
                className={`${current === 1 ? " -ml-5" : "-ml-12"} h-8`}
                style={{ width: "200px", height: "32px" }}
                src={logo[current]}
                alt=""
              />
              <a
                href="#"
                className="text-[#0052CC] underline text-xs text-nowrap "
              >
                Read the story
              </a>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col justify-between   w-[363px] h-[472px] p-8 border-none rounded-e-3xl "
          style={{
            backgroundImage: `linear-gradient(60deg, rgb(101, 84, 192), rgb(249, 156, 219)) `,
            backgroundSize: "cover, auto",
            backgroundRepeat: "no-repeat, repeat",
            backgroundPosition: "center",
            backgroundBlendMode: "normal",
          }}
        >
          <div>
            <h3 className="text-3xl text-white bottom-0">{div_r1}</h3>
          </div>

          <div>
            <a href="#" className=" underline text-white text-sm font-thin  ">
              Trello TechValidate Survey
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slides;
