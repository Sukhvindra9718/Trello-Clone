import React from 'react'
import "../styles/Dashboard.css"
import { Link } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { PiChalkboardSimpleLight } from "react-icons/pi";
import { LuLayoutTemplate } from "react-icons/lu";
import { CiWavePulse1, CiSettings, CiUser, CiGrid41 } from "react-icons/ci";
import { MdKeyboardArrowDown, MdOutlineWatchLater,MdOutlineBrowserUpdated } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import DropDown from '../components/DropDown';
import templatebg0 from '../images/template-bg0.jpg';
import templatebg1 from '../images/template-bg1.jpg';
import templatebg2 from '../images/template-bg2.jpg';
import templatebg3 from '../images/template-bg3.jpg';

const Workspaces = ["Projects", "TrelloClone"];
const TeplatesType = ['Education', 'Engineering', 'Finance', 'Health', 'HR', 'IT', 'Legal', 'Marketing', 'Operations', 'Product', 'Project Management', 'Sales', 'Support', 'Team Management', 'Other']
function Dashboard() {
    const [active, setActive] = React.useState('boards')
    const navigate = useNavigate();

    const handleLogout = () => {
        const url = 'http://192.168.120.79:5000/api/user/logout'
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        }).then(async (res) => {
            const data = await res.json();

            if (data.success) {
                navigate('/login');
            } else {
                navigate('/server-error')
            }
        })


    }
    return (
        <>
            <header>
                <nav className='h-14 dash-header p-2 flex justify-between'>
                    <div className='h-full flex items-center'>
                        <div className='h-full flex items-center'>
                            <button className='px-2 header-btn'>
                                <svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4 5C4 4.44772 4.44772 4 5 4H7C7.55228 4 8 4.44772 8 5V7C8 7.55228 7.55228 8 7 8H5C4.44772 8 4 7.55228 4 7V5ZM4 11C4 10.4477 4.44772 10 5 10H7C7.55228 10 8 10.4477 8 11V13C8 13.5523 7.55228 14 7 14H5C4.44772 14 4 13.5523 4 13V11ZM11 4C10.4477 4 10 4.44772 10 5V7C10 7.55228 10.4477 8 11 8H13C13.5523 8 14 7.55228 14 7V5C14 4.44772 13.5523 4 13 4H11ZM10 11C10 10.4477 10.4477 10 11 10H13C13.5523 10 14 10.4477 14 11V13C14 13.5523 13.5523 14 13 14H11C10.4477 14 10 13.5523 10 13V11ZM17 4C16.4477 4 16 4.44772 16 5V7C16 7.55228 16.4477 8 17 8H19C19.5523 8 20 7.55228 20 7V5C20 4.44772 19.5523 4 19 4H17ZM16 11C16 10.4477 16.4477 10 17 10H19C19.5523 10 20 10.4477 20 11V13C20 13.5523 19.5523 14 19 14H17C16.4477 14 16 13.5523 16 13V11ZM5 16C4.44772 16 4 16.4477 4 17V19C4 19.5523 4.44772 20 5 20H7C7.55228 20 8 19.5523 8 19V17C8 16.4477 7.55228 16 7 16H5ZM10 17C10 16.4477 10.4477 16 11 16H13C13.5523 16 14 16.4477 14 17V19C14 19.5523 13.5523 20 13 20H11C10.4477 20 10 19.5523 10 19V17ZM17 16C16.4477 16 16 16.4477 16 17V19C16 19.5523 16.4477 20 17 20H19C19.5523 20 20 19.5523 20 19V17C20 16.4477 19.5523 16 19 16H17Z" fill="currentColor"></path></svg>
                            </button>
                            <Link to='/dashboard' className='h-9 flex items-center p-2 header-btn'>
                                <div className='dash-logo' loading="false"></div>
                            </Link>
                        </div>
                        <div className='h-full flex items-center'>
                            <button className="flex items-center p-2 gap-2 header-btn" type="button" data-testid="workspace-switcher" aria-haspopup="true" aria-expanded="false" title="Workspaces" aria-label="Workspaces">
                                <span className="">Workspaces</span>
                                <span className="">
                                    <span data-testid="DownIcon" aria-hidden="true" className="css-snhnyn">
                                        <svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.2929 16.7071L4.22185 9.63606C3.83132 9.24554 3.83132 8.61237 4.22185 8.22185C4.61237 7.83133 5.24554 7.83133 5.63606 8.22185L12 14.5858L18.364 8.22185C18.7545 7.83132 19.3877 7.83132 19.7782 8.22185C20.1687 8.61237 20.1687 9.24554 19.7782 9.63606L12.7071 16.7071C12.3166 17.0977 11.6834 17.0977 11.2929 16.7071Z" fill="currentColor"></path>
                                        </svg>
                                    </span>
                                </span>
                            </button>
                            <button className="flex items-center p-2 gap-2 header-btn" type="button" data-testid="recents-switcher" aria-haspopup="true" aria-expanded="false" title="recents" aria-label="recents">
                                <span className="">Recents</span>
                                <span className="">
                                    <span data-testid="DownIcon" aria-hidden="true" className="css-snhnyn">
                                        <svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.2929 16.7071L4.22185 9.63606C3.83132 9.24554 3.83132 8.61237 4.22185 8.22185C4.61237 7.83133 5.24554 7.83133 5.63606 8.22185L12 14.5858L18.364 8.22185C18.7545 7.83132 19.3877 7.83132 19.7782 8.22185C20.1687 8.61237 20.1687 9.24554 19.7782 9.63606L12.7071 16.7071C12.3166 17.0977 11.6834 17.0977 11.2929 16.7071Z" fill="currentColor"></path>
                                        </svg>
                                    </span>
                                </span>
                            </button>
                            <button className="flex items-center p-2 gap-2 header-btn" type="button" data-testid="starred-switcher" aria-haspopup="true" aria-expanded="false" title="starred" aria-label="starred">
                                <span className="">Starred</span>
                                <span className="">
                                    <span data-testid="DownIcon" aria-hidden="true" className="css-snhnyn">
                                        <svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.2929 16.7071L4.22185 9.63606C3.83132 9.24554 3.83132 8.61237 4.22185 8.22185C4.61237 7.83133 5.24554 7.83133 5.63606 8.22185L12 14.5858L18.364 8.22185C18.7545 7.83132 19.3877 7.83132 19.7782 8.22185C20.1687 8.61237 20.1687 9.24554 19.7782 9.63606L12.7071 16.7071C12.3166 17.0977 11.6834 17.0977 11.2929 16.7071Z" fill="currentColor"></path>
                                        </svg>
                                    </span>
                                </span>
                            </button>
                            <button className="flex items-center p-2 gap-2 header-btn" type="button" data-testid="templates-switcher" aria-haspopup="true" aria-expanded="false" title="templates" aria-label="templates">
                                <span className="">Templates</span>
                                <span className="">
                                    <span data-testid="DownIcon" aria-hidden="true" className="css-snhnyn">
                                        <svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.2929 16.7071L4.22185 9.63606C3.83132 9.24554 3.83132 8.61237 4.22185 8.22185C4.61237 7.83133 5.24554 7.83133 5.63606 8.22185L12 14.5858L18.364 8.22185C18.7545 7.83132 19.3877 7.83132 19.7782 8.22185C20.1687 8.61237 20.1687 9.24554 19.7782 9.63606L12.7071 16.7071C12.3166 17.0977 11.6834 17.0977 11.2929 16.7071Z" fill="currentColor"></path>
                                        </svg>
                                    </span>
                                </span>
                            </button>
                            <div className='mx-1'>
                                <button className='bg-blue-600 p-2 rounded' onClick={() => handleLogout()}>
                                    <p className='text-white px-2'>Create</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='flex items-center gap-2 relative'>
                            <input type="text" placeholder="Search" className="search-bar" />
                            <IoSearchOutline className="search-icon" />
                        </div>
                        <div className='flex items-center'>
                            <div className='header-icons rotate-45'>
                                <IoMdNotificationsOutline size={25} />
                                <div className='absolute bottom-5 bg-orange-600 w-6 h-6 rounded-xl flex items-center justify-center rotate-315'>
                                    <span className='text-sm font-medium text-white'>3</span>
                                </div>
                            </div>
                            <div className='header-icons'>
                                <AiOutlineQuestionCircle size={25} />
                            </div>
                            <div className='header-icons'>
                                <div className='bg-orange-600 w-8 h-8 rounded-2xl flex items-center justify-center'>
                                    <span className='text-base font-medium text-white'>SS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div className='flex justify-center mt-16'>
                <main className='w-9/12 flex justify-center gap-12'>
                    <section className='dashboard-sidebar'>
                        <nav className='top-section'>
                            <ul>
                                <li className={active === "boards" ? 'tab-active' : 'tab-non-active'}>
                                    <Link onClick={() => setActive('boards')} className='flex items-center gap-4'>
                                        <div className='flex item-center'>
                                            <PiChalkboardSimpleLight size={25} />
                                        </div>
                                        <p>Boards</p>
                                    </Link>
                                </li>
                                <li className={active === "templates" ? 'tab-active' : 'tab-non-active'}>
                                    <Link className='flex items-center gap-4' onClick={() => setActive('templates')}>
                                        <div className='flex item-center'>
                                            <LuLayoutTemplate size={25} />
                                        </div>
                                        <p>Templates</p>
                                    </Link>
                                </li>
                                <li className={active === "home" ? 'tab-active' : 'tab-non-active'}>
                                    <Link onClick={() => setActive('home')} className='flex items-center gap-4'>
                                        <div className='flex item-center'>
                                            <CiWavePulse1 size={25} />
                                        </div>
                                        <p>Home</p>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div className='w-full border-b-2 my-4'></div>
                        <h3 className='font-semibold'>Workspaces</h3>
                        <div>
                            {Workspaces.map((workspace, index) => {
                                return (
                                    <div key={index} className='flex items-center justify-between my-2 workspace-item'>
                                        <div className='flex items-center gap-4'>
                                            <div className='w-8 h-8 bg-blue-600 flex items-center justify-center rounded-md'>
                                                <span className='text-white font-bold text-base w-4'>{workspace.substring(0, 1)}</span>
                                            </div>
                                            <p>{workspace}</p>
                                        </div>
                                        <MdKeyboardArrowDown size={25} />
                                    </div>
                                )
                            })
                            }
                        </div>

                    </section>
                    <section className='dashboard-main'>
                        <div className='templates-section'>
                            <div className='flex justify-between mb-2'>
                                <div className='flex items-center gap-4'>
                                    <LuLayoutTemplate size={25} />
                                    <h2 className='font-semibold text-2xl' style={{ color: '#172b4d' }}>Most popular templates</h2>
                                </div>
                                <span className='w-8 h-8 rounded-sm bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300'>
                                    <RxCross2 size={25} />
                                </span>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div>
                                    <p className=''>Get going faster with a template from the Trello community or </p>
                                </div>
                                <div>
                                    <DropDown placeholder='Choose a Category' options={TeplatesType} />
                                </div>
                            </div>
                            <div className='templates-container my-6'>
                                <div className='flex items-center justify-center gap-6'>
                                    <div className='relative cursor-pointer'>
                                        <img src={templatebg0} alt="" className='w-56 h-28 rounded-md' />
                                        <div className='absolute top-2 left-2'>
                                            <div className='w-20 h-6 bg-gray-300 rounded-md flex items-center justify-center text-black text-sm font-semibold'>Template</div>
                                        </div>
                                        <div className='absolute top-10 left-2'>
                                            <div className='text-white text-lg font-semibold'>Project Management</div>
                                        </div>
                                    </div>
                                    <div className='relative cursor-pointer'>
                                        <img src={templatebg1} alt="" className='w-56 h-28 rounded-md' />
                                        <div className='absolute top-2 left-2'>
                                            <div className='w-20 h-6 bg-gray-300 rounded-md flex items-center justify-center text-black text-sm font-semibold'>Template</div>
                                        </div>
                                        <div className='absolute top-10 left-2'>
                                            <div className='text-white text-lg font-semibold'>Kanban Template</div>
                                        </div>
                                    </div>
                                    <div className='relative cursor-pointer'>
                                        <img src={templatebg2} alt="" className='w-56 h-28 rounded-md' />
                                        <div className='absolute top-2 left-2'>
                                            <div className='w-20 h-6 bg-gray-300 rounded-md flex items-center justify-center text-black text-sm font-semibold'>Template</div>
                                        </div>
                                        <div className='absolute top-10 left-2'>
                                            <div className='text-white text-lg font-semibold'>Simple Project Board</div>
                                        </div>
                                    </div>
                                    <div className='relative cursor-pointer'>
                                        <img src={templatebg3} alt="" className='w-56 h-28 rounded-md' />
                                        <div className='absolute top-2 left-2'>
                                            <div className='w-20 h-6 bg-gray-300 rounded-md flex items-center justify-center text-black text-sm font-semibold'>Template</div>
                                        </div>
                                        <div className='absolute top-10 left-2'>
                                            <div className='text-white text-lg font-semibold'>Remote Team Hub</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link to='/'>
                                <span className='text-blue-600 text-lg hover:underline'>Browse the full template gallery</span>
                            </Link>
                        </div>
                        <div className='recently-viewed my-16'>
                            <div className='flex items-center gap-4'>
                                <MdOutlineWatchLater size={25} />
                                <h2 className='font-semibold text-xl' style={{ color: '#172b4d' }}>Recently viewed</h2>
                            </div>
                            <div className='templates-container my-6'>
                                <div className='flex items-center gap-6'>
                                    <div className='relative cursor-pointer'>
                                        <img src={templatebg0} alt="" className='w-56 h-28 rounded-md' />
                                        <div className='absolute top-2 left-2'>
                                            <div className='text-white text-lg font-semibold'>Project Management</div>
                                        </div>
                                    </div>
                                    <div className='relative cursor-pointer'>
                                        <img src={templatebg1} alt="" className='w-56 h-28 rounded-md' />
                                        <div className='absolute top-2 left-2'>
                                            <div className='text-white text-lg font-semibold'>Kanban Template</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='your-workspace mb-16'>
                            <h2 className='font-semibold text-xl' style={{ color: '#172b4d' }}>YOUR WORKSPACES</h2>
                            {Workspaces.map((workspace, index) => {
                                return (
                                    <div key={index} className='flex flex-col mb-6'>
                                        <div className='flex items-center justify-between my-8 w-full'>
                                            <div className='flex items-center gap-4'>
                                                <div className='w-8 h-8 bg-blue-600 flex items-center justify-center rounded-md'>
                                                    <span className='text-white font-bold text-base w-4'>{workspace.substring(0, 1)}</span>
                                                </div>
                                                <p className='text-lg font-semibold' style={{color:"#172b4d"}}>{workspace}</p>
                                            </div>
                                            <div className='flex items-center gap-4'>
                                                <div className='flex items-center justify-center gap-1 bg-gray-200 rounded-sm w-28 h-8 font-semibold cursor-pointer hover:bg-gray-300'>
                                                    <PiChalkboardSimpleLight size={20} />
                                                    Boards
                                                </div>
                                                <div className='flex items-center justify-center gap-1 bg-gray-200 rounded-sm w-28 h-8 font-semibold cursor-pointer hover:bg-gray-300'>
                                                    <CiGrid41 size={20} />
                                                    Views
                                                </div>
                                                <div className='flex items-center justify-center gap-1 bg-gray-200 rounded-sm w-32 h-8 font-semibold cursor-pointer hover:bg-gray-300'>
                                                    <CiUser size={20} />
                                                    Members (1)
                                                </div>
                                                <div className='flex items-center justify-center gap-1 bg-gray-200 rounded-sm w-28 h-8 font-semibold cursor-pointer hover:bg-gray-300'>
                                                    <CiSettings size={20} />
                                                    Settings
                                                </div>
                                                <div className='flex items-center justify-center gap-1 bg-purple-100 rounded-sm w-28 h-8 font-semibold cursor-pointer hover:bg-purple-200'>
                                                    <MdOutlineBrowserUpdated size={20} />
                                                    Upgrade
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex gap-4'>
                                            {Workspaces.map((workspace, index) => {
                                                return (
                                                    <div className='flex items-center gap-6' key={index}>
                                                        <div className='relative cursor-pointer'>
                                                            <img src={templatebg1} alt="" className='w-56 h-28 rounded-md' />
                                                            <div className='absolute top-2 left-2'>
                                                                <div className='text-white text-lg font-semibold'>{workspace}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                            <div className='w-56 bg-gray-200 h-28 flex items-center justify-center cursor-pointer'>
                                                <span>Create new board</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>
                        <div className='flex items-center justify-center w-52 h-10 bg-gray-200 rounded-md my-2'>
                            <span className='font-semibold'>View all closed boards</span>
                        </div>
                    </section>
                </main>
            </div>

        </>
    )
}

export default Dashboard