import React from 'react'
import { useLocation } from 'react-router-dom'
import DashboardHeader from '../components/DashboardHeader'
import { FaRegStar, FaCalendarAlt } from "react-icons/fa";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";
import { GoRocket, GoPlus } from "react-icons/go";
import { BsLightningFill } from "react-icons/bs";
import { IoFilter } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { PiChalkboardSimpleLight } from "react-icons/pi";
import { LuLayoutTemplate } from "react-icons/lu";
import { RiSettings4Fill } from "react-icons/ri";
import { FaTableList } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import '../styles/playground.css'
import listIcon from '../images/listIcon.svg'
import jira from '../images/jira.png'
import Board from '../components/Board'






function Playground() {
  const { state } = useLocation();
  console.log(state.boardId)

  return (
    <div>
      <DashboardHeader />
      <main className='flex' style={{ height: "92vh" }}>
        <aside className=' bg-pink-600 h-full relative' style={{ width: "18%" }}>
          <div>
            <div className='flex items-center justify-between gap-4 p-2 mt-1'>
              <div className='flex gap-2' >
                <div className='w-10 h-10 bg-blue-600 flex items-center justify-center rounded-md'>
                  <span className='text-white font-bold text-xl w-4'>{state.workspace.name.substring(0, 1)}</span>
                </div>
                <div>
                  <p className='text-white font-semibold'>{state.workspace.name}</p>
                  <p className='text-white font-medium text-sm'>Free</p>
                </div>
              </div>
              <div>
                <IoIosArrowBack size={20} color='white' />
              </div>
            </div>
            <p style={{ borderBottom: '1px solid hsla(0,0%,100%,0.2)', height: "1px" }}></p>
            <ul className='p-4 flex flex-col gap-4'>
              <li className=''>
                <Link className='flex items-center gap-4'>
                  <div className='flex item-center'>
                    <PiChalkboardSimpleLight size={25} className='text-white' />
                  </div>
                  <p className='font-medium text-gray-100'>Boards</p>
                </Link>
              </li>
              <li className='flex items-center justify-between'>
                <Link className='flex items-center gap-4'>
                  <div className='flex item-center'>
                    <LuLayoutTemplate size={25} className='text-white' />
                  </div>
                  <p className='font-medium text-gray-100'>Members</p>
                </Link>
                <div>
                  <GoPlus size={25} color='white' />
                </div>
              </li>
              <li className='flex items-center justify-between'>
                <Link className='flex items-center gap-4'>
                  <div className='flex item-center'>
                    <RiSettings4Fill size={25} className='text-white' />
                  </div>
                  <p className='font-medium text-gray-100'>Workspace settings</p>
                </Link>
                <div className='mr-1'>
                  <IoIosArrowDown size={20} color='white' />
                </div>
              </li>
            </ul>
            <div className='px-4'>
              <h1 className='text-white font-semibold'>Workspace views</h1>
            </div>
            <ul className='p-4 flex flex-col gap-4'>
              <li className='flex items-center gap-4'>
                <div className='flex item-center'>
                  <FaTableList size={16} className='text-white' />
                </div>
                <p className='font-medium text-gray-100 italic'>Table</p>
              </li>
              <li className='flex items-center gap-4'>
                <div className='flex item-center'>
                  <FaCalendarAlt size={16} className='text-white' />
                </div>
                <p className='font-medium text-gray-100 italic'>Calendar</p>
              </li>
            </ul>
            <div className='flex items-center justify-between px-4 mb-2'>
              <h1 className='text-white font-semibold'>Your boards</h1>
              <GoPlus size={25} color='white' />
            </div>
            {state.workspace.boards.map((board, index) => (
              <div key={index} className='flex items-center gap-4 px-4 py-2 board-selected'>
                <div className='w-6 h-6 bg-blue-600 flex items-center justify-center rounded-sm'></div>
                <p className='text-white font-medium'>{board.boardTitle}</p>
              </div>
            ))}
          </div>
          <div className='w-100 absolute bottom-0'>
            <div className='p-4'>
              <div className='h-4/5 bg-white rounded-lg p-4'>
                <div className='flex justify-between items-center'>
                  <img src={jira} alt="" className='w-6 h-6' />
                  <HiOutlineDotsHorizontal size={25} color='black' />
                </div>
                <h1 className='font-semibold text-sm mt-2 mb-4'>Jira Keeps your projects organized</h1>
                <p style={{ fontSize: "13px" }}>Jira's customizability and structure makes handling all your team's projects and processes a breeze.</p>
                <div className='bg-gradient-btn w-32'>
                  <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path fill="white" fill-rule="evenodd" d="M9.276 4.382L7.357 9.247l-4.863 1.917a.78.78 0 000 1.45l4.863 1.918 1.919 4.863a.78.78 0 001.45 0h-.001l1.918-4.863 4.864-1.919a.781.781 0 000-1.45l-4.864-1.916-1.918-4.865a.776.776 0 00-.44-.438.778.778 0 00-1.01.438zm8.297-2.03l-.743 1.886-1.884.743a.56.56 0 000 1.038l1.884.743.743 1.886a.558.558 0 001.038 0l.745-1.886 1.883-.743a.557.557 0 000-1.038l-1.883-.743-.745-1.885a.552.552 0 00-.314-.314.562.562 0 00-.724.314zm-.704 13.003l-.744 1.883-1.883.744a.553.553 0 00-.316.314.56.56 0 00.316.724l1.883.743.744 1.884c.057.144.17.258.314.315a.56.56 0 00.724-.315l.744-1.884 1.883-.743a.557.557 0 000-1.038l-1.883-.744-.744-1.883a.551.551 0 00-.315-.316.56.56 0 00-.723.316z"></path></svg>
                  <span className='text-white font-medium'>Try it free</span>
                </div>
              </div>
            </div>
            <p style={{ borderBottom: '1px solid hsla(0,0%,100%,0.2)', height: "1px" }}></p>
            <div className='py-2 px-4'>
              <div className='bg-gradient-btn'>
                <svg width="20" height="20" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V6H19V20H5V6H7V5ZM9 6H15V5H9V6ZM7 9C7 8.44772 7.44772 8 8 8H10C10.5523 8 11 8.44772 11 9V16C11 16.5523 10.5523 17 10 17H8C7.44772 17 7 16.5523 7 16V9ZM14 8C13.4477 8 13 8.44772 13 9V14C13 14.5523 13.4477 15 14 15H16C16.5523 15 17 14.5523 17 14V9C17 8.44772 16.5523 8 16 8H14Z" fill="white"></path><path d="M4 6C2.89543 6 2 6.89543 2 8V18C2 19.1046 2.89543 20 4 20L4 6Z" fill="white"></path><path d="M20 20V6C21.1046 6 22 6.89543 22 8V18C22 19.1046 21.1046 20 20 20Z" fill="white"></path></svg>
                <span className='text-white font-medium' style={{ fontSize: "14px" }}>Upgrade to Trello Premium</span>
              </div>
            </div>
          </div>
        </aside>

        <section className='bg-pink-300' style={{ width: "82%" }}>
          <div className='bg-pink-400 flex items-center px-4 justify-between' style={{ height: "8%" }}>
            <div className='flex items-center gap-6'>
              <h1 className='text-2xl font-semibold text-gray-100'>{state.boardTitle}</h1>
              <FaRegStar color='white' size={20} />
              <FiUsers color='white' size={20} />
              <h2 className='text-gray-100 font-semibold text-xl'>workspace visible</h2>
              <button className='bg-gray-100 font-semibold px-4 py-2 rounded-md flex gap-2'>
                <img src={listIcon} alt='list' className='w-6 h-6' />
                <span>Board</span>
              </button>
              <IoIosArrowDown color='white' size={25} />
            </div>
            <div className='flex gap-6 items-center'>
              <div className='flex gap-2 items-center'>
                <GoRocket color='white' size={20} />
                <span className='text-gray-100 font-semibold'>Power-Ups</span>
              </div>
              <div className='flex gap-2 items-center'>
                <BsLightningFill color='white' size={20} />
                <span className='text-gray-100 font-semibold'>Automation</span>
              </div>
              <div className='flex gap-2 items-center'>
                <IoFilter color='white' size={20} />
                <span className='text-gray-100 font-semibold'>Filters</span>
              </div>
              <span style={{ borderLeft: '1px solid hsla(0,0%,100%,0.2)', height: "30px" }}></span>
              <div className='bg-blue-950 w-8 h-8 rounded-2xl flex items-center justify-center'>
                <span className='text-sm mt-1 font-medium text-white'>SS</span>
              </div>
              <button className='bg-gray-100 font-semibold px-4 py-2 rounded-md flex gap-2'>
                <FiUserPlus color='black' size={20} />
                <span>Share</span>
              </button>
              <HiOutlineDotsHorizontal color='white' size={25} />
            </div>

          </div>
          <div className='bg-pink-300 flex gap-4 p-4 w-full overflow-x-auto' style={{ height: "92%" }}>
            <div className='flex gap-4'>
              <Board boardId={state.boardId} boardTitle={state.boardTitle}/>
            </div>
          </div>

        </section>



      </main>
    </div>
  )
}

export default Playground