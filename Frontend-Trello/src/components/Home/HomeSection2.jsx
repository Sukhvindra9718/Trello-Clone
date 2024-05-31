import { useState } from "react";
import "../../styles/Home.css";

const image = {
  0: "https://images.ctfassets.net/rz1oowkt5gyp/3N2U3C71rApm61cGFxnc2E/970b010002488a09a420282df5e7b43a/Carousel_Image_Boards_2x.png?w=1140&fm=webp",
  1: "https://images.ctfassets.net/rz1oowkt5gyp/4U0VUZYX2tQmB5KVGxBabp/7321ac088fe8ec39dbe3069c47d7df99/Carousel_Image_Lists_2x.png?w=1140&fm=webp",
  2: "https://images.ctfassets.net/rz1oowkt5gyp/26CA6JZeRgoOK4nuRHnIlY/060702a80cf7c3be3651d9297d196267/Carousel_Image_Cards_2x.png?w=1140&fm=webp",
};

function HomeSection2() {
  const [selected, setSelected] = useState(0);

  console.log("my console", image.selected);
  return (
    <section
      className="HomeSection2 w-full h-[900px] flex flex-col justify-center mx-10 px-40     mt-16 py-8"
      style={{
        background:
          "linear-gradient(0deg, rgb(230, 252, 255), rgb(255, 255, 255))",
        borderColor: "rgb(178, 212, 255)",
      }}
    >
      <div className="flex flex-col justify-between gap-5 w-[50%] ">
        <p className="text-md font-semibold">TRELLO 101</p>
        <h3 className="text-2xl font-bold -tracking-tighter  ">
          A productivity powerhouse
        </h3>
        <p>
          Simple, flexible, and powerful. All it takes are boards, lists, and{" "}
          <br />
          cards to get a clear view of {`who’s`} doing what and what needs to{" "}
          <br /> get done. Learn more in our{` `}
          <span className="text-blue-600 font-medium underline">
            {" "}
            guide for getting started
          </span>
          .
        </p>
      </div>
      <div className="flex w-full h-full justify-between items-center pr-10">
        <div className="w-1/3 h-full  py-12 px-4 flex flex-col  text-sm">
          {/* 0 */}
          <div
            className={`${
              selected === 0 ? "bg-white" : ""
            } w-[90%] flex flex-col justify-center rounded-xl relative`}
            onClick={() => setSelected(0)}
          >
            <div className="here">
              <div
                className={`${
                  selected === 0
                    ? "min-w-2 min-h-[95%] rounded-lg absolute self-start bg-[#00C7E5] text-[#00C7E5]"
                    : "text-white"
                }`}
              >
                {"  ."}
              </div>
              <div className="p-4">
                <h3>Boards</h3>
                <p className="my-2">
                  Trello boards keep tasks organized and <br /> work moving
                  forward. In a glance, see everything from “things to do” to
                  “aww yeah, we did it!”
                </p>
              </div>
            </div>
          </div>
          {/* 1 */}
          <div
            className={`${
              selected === 1 ? "bg-white" : ""
            } w-[90%] flex flex-col justify-center rounded-xl relative`}
            onClick={() => setSelected(1)}
          >
            <div className="here">
              <div
                className={` ${
                  selected === 1
                    ? "min-w-2 min-h-[95%] rounded-lg absolute self-start bg-[#00C7E5] text-[#00C7E5]"
                    : "text-white"
                }`}
              >
                {"  ."}
              </div>
              <div className="p-4">
                <h3>Lists</h3>
                <p className="my-2">
                  The different stages of a task. Start as simple as To Do,
                  Doing or Done—or build a workflow custom fit to your{" "}
                  {"team’s"}
                  needs. {`There’s`} no wrong way to Trello.
                </p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div
            className={`${
              selected === 2 ? "bg-white" : ""
            } w-[90%] flex flex-col justify-center rounded-xl relative`}
            onClick={() => setSelected(2)}
          >
            <div className="here">
              <div
                className={`${
                  selected === 2
                    ? "min-w-2 min-h-[95%] rounded-lg absolute self-start bg-[#00C7E5] text-[#00C7E5] mb-2"
                    : "text-white"
                }`}
              >
                {"  ."}
              </div>
              <div className="p-5">
                <h3>Cards</h3>
                <p className="my-2">
                  Cards represent tasks and ideas and hold all the information
                  to get the job done. As you make progress, move cards across
                  lists to show their status.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[70%] h-[70%] flex  justify-start -mt-16 pl-12 ">
          <img
            // src="https://i.postimg.cc/NGZT8RJF/page1-img.png"
            src={image[selected]}
          />
        </div>
      </div>
    </section>
  );
}

export default HomeSection2;
