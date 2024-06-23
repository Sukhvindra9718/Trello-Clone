import { Link } from "react-router-dom";
import {  useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

function Navbar() {
  const [activeNavTab, setActiveNavTab] = useState(null);


  const NavbarContent = {
    ["Features"]: <Features />,
  };

  return (
    <>
      <div className="fixed z-[10000]">
        <div className="flex justify-center h-[60px] w-screen bg-white relative z-[10000]">
          <div className="flex items-center justify-between h-full w-[min(1320px,100vw)] ">
            <div className="flex gap-5 h-full">
              <Link to="/" className="flex items-center h-full px-6 py-2">
                <img
                  src="trello.svg"
                  width={100}
                  height={100}
                  alt="Atlassian Trello"
                  className="h-full w-[125px]"
                />
              </Link>
            </div>
            <div className="hidden md:flex justify-between h-full w-full">
              <ul className="flex gap-7 h-full">
                {[
                  { text: "Features" },
                  { text: "Solutions" },
                  { text: "Plans" },
                  { text: "Pricing", href: "/pricing" },
                  { text: "Resources" },
                ].map((item) => (
                  <li
                    key={item.text}
                    className={`flex items-center h-full hover:text-blue-500 transition-all duration-200 hover-underline-animation ${
                      item.text === activeNavTab ? "active" : ""
                    }`}
                  >
                    <button
                      onClick={() => {
                        if (item.href) {
                          //
                        } else {
                          if (activeNavTab === item.text) {
                            setActiveNavTab(null);
                          } else {
                            setActiveNavTab(item.text);
                          }
                        }
                      }}
                      className="flex items-center gap-2 text-sm "
                    >
                      {item.href ? (
                        item.text
                      ) : (
                        <>
                          {item.text}
                          <FaAngleDown size={10} />
                        </>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="h-full flex justify-center items-center">
                <Link to="/login" className="px-6 py-2">
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="h-full flex items-center px-6 py-2 bg-[#0065ff] hover:bg-[#0747a6] text-white transition-all duration-200"
                >
                  Get Trello For Free
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`absolute top-0 left-0 w-screen bg-white z-[1000] transition-all duration-200 ${
            activeNavTab ? "top-[60px]" : "top-0"
          }`}
        >
          {NavbarContent[activeNavTab || "Features"]}
        </div>
      </div>

    </>
  );
}

function Features() {
  return <div>Hello De</div>;
}


export default Navbar;
