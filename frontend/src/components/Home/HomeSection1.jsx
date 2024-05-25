import hero from "../../images/hero.png";
import Trello from "../../images/TrelloUICollage_4x.webp";

function HomeSection1() {
  return (
    <div
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
      }}
      className="w-full h-[686px] flex justify-center"
    >
      <div className="flex  h-full justify-evenly  px-32 my-16 p-4  ">
        <div className=" max-w-[560px] h-full flex flex-col items-center pl-8 pt-10 text-white p-4 text-left">
          <h1 className="text-4xl  font-bold mb-2 ">
            Trello brings all your tasks,teammates,and tools together
          </h1>
          <p className="font-semibold">
            Keep everything in the same place—even if your team {"isn’t"}.
          </p>
          <div className="flex gap-4 mt-5 p-1 self-start">
            <input
              className="h-10 rounded-md pl-2"
              type="text"
              placeholder="Email"
              name=""
              id=""
            />
            <button className="bg-[#0065FF] border-[#0065FF] p-2.5 rounded-md">
              Sign up - {"it’s"} free!
            </button>
          </div>
          <div className=" text-sm font-thin self-start pl-3 mt-4">
            <a href="#" className="flex flex-wrap gap-1.5">
              <span className=" underline">Watch video</span>
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m5 5h14v14h-14z"></path>
                <path
                  clipRule="evenodd"
                  d="m10.0138 16.3878c-.83597.4912-1.5138.105-1.5138-.8645v-7.04491c0-.97008.6755-1.358 1.5138-.86566l6.465 3.79747c.5548.3261.5589.8517 0 1.1801z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
                <circle cx="12" cy="12" r="11.5" stroke="currentColor"></circle>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex w-full  h-[92%] p-4 ">
          <img
            src={Trello}
            style={{ height: "auto", maxWidth: "100%" }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default HomeSection1;
