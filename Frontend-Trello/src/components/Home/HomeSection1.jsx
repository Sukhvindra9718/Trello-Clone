import { useRef } from "react";
import {  useNavigate } from "react-router-dom";
function HomeSection1() {
  const navigate = useNavigate()
  const inputRef = useRef(null);

  const handleSignUpProcess = () => {
    navigate("signup", { state: { email: inputRef.current?.value } });
  };
  return (
    <div
      style={{
        background:
          "url('https://images.ctfassets.net/rz1oowkt5gyp/7lTGeXbBRNRLaVk2MdBjtJ/99c266ed4cb8cc63bd0c388071f01ff6/white-wave-bg.svg') center bottom -0.5px / 100% 14% no-repeat scroll padding-box border-box, linear-gradient(60deg, rgb(82, 67, 170), rgb(237, 80, 180)) 0% 0% / auto repeat scroll padding-box border-box rgb(82, 67, 170)",
      }}
      className="min-h-[calc(100vh-60px)] bg-blend-normal text-white flex flex-col md:flex-row pt-16"
    >
      <div className="flex flex-col gap-5 relative md:bottom-16 p-20 lg:pl-[12%] justify-center md:w-1/2">
        <div className="!leading-tight text-2xl md:text-3xl lg:text-5xl ">
          Trello brings all your tasks, teammates, and tools together
        </div>
        <div className="">
          Keep everything in the same place—even if your team isn’t.
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate("login?email=" + inputRef.current?.value);
          }}
          className="flex flex-col md:flex-row gap-5 mt-5"
        >
          <input
            ref={inputRef}
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded text-black focus:outline-none"
            required
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-5 rounded whitespace-nowrap" onClick={()=> handleSignUpProcess()}>
            Sign up - it’s free!
          </button>
        </form>
        <div className="flex gap-2 items-center pt-7">
          <span className="text-sm text-gray-100 underline underline-offset-1 hover:text-white transition-all duration-200">
            Watch Video
          </span>
          <img
            src="assets/play-video.svg"
            className="relative hover:left-3 transition-all duration-200"
            alt="play"
            height={25}
            width={25}
          />
        </div>
      </div>
      <div className="flex items-center justify-center md:w-1/2">
        <img
          src="https://images.ctfassets.net/rz1oowkt5gyp/75rDABL8fyMtNLlUAtBxrg/c5e145977a86c41c47e17c69410c64f7/TrelloUICollage_4x.png?w=1140&fm=webp"
          width={1140}
          height={1006}
          alt="Atlassian Trello"
          className="w-[90%]"
        />
      </div>
    </div>
  );
}

export default HomeSection1;
