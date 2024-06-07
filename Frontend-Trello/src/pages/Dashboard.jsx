import React, { useEffect } from 'react'
import "../styles/Dashboard.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { PiChalkboardSimpleLight } from "react-icons/pi";
import { LuLayoutTemplate } from "react-icons/lu";
import { CiWavePulse1, CiSettings, CiUser, CiGrid41 } from "react-icons/ci";
import { MdKeyboardArrowDown, MdOutlineWatchLater, MdOutlineBrowserUpdated } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import DropDown from '../components/DropDown';
import templatebg0 from '../images/template-bg0.jpg';
import templatebg1 from '../images/template-bg1.jpg';
import templatebg2 from '../images/template-bg2.jpg';
import templatebg3 from '../images/template-bg3.jpg';
import { useCookies } from 'react-cookie';
import DashboardHeader from '../components/DashboardHeader';


const TemplatesType = ['Education', 'Engineering', 'Finance', 'Health', 'HR', 'IT', 'Legal', 'Marketing', 'Operations', 'Product', 'Project Management', 'Sales', 'Support', 'Team Management', 'Other']
function Dashboard() {
    const [cookies, setCookie] = useCookies(['token']);
    const [active, setActive] = React.useState('boards')
    const [Workspaces, setWorkspaces] = React.useState([])
    const navigate = useNavigate();

    const handleLogout = () => {
        const url = 'http://192.168.120.79:5000/api/user/logout'
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token: cookies.token})
        }).then(async (res) => {
            const data = await res.json();

            if (data.success) {
                navigate('/login');
            } else {
                navigate('/server-error')
            }
        })


    }

    const getWorkspaces = async () => {
        const url = 'http://localhost:5000/api/v1/getWorkspaces'
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${cookies.token}`
            },
            credentials: 'include',

        }).then(async (res) => {
            const { data } = await res.json();
            console.log(data)
            setWorkspaces(data)
        }).catch((err) => {
            console.log(err);
        })
    }

    const handleClick = (workspace, board) => {
        navigate('/playground', { state: { workspace: workspace, board } })
    }
    useEffect(() => {
        getWorkspaces();
        return () => { }
    }, [])
    return (
        <>
            <DashboardHeader />
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
                            {Workspaces?.length > 0 && Workspaces.map((workspace, index) => {
                                return (
                                    <div key={index} className='flex items-center justify-between my-2 workspace-item'>
                                        <div className='flex items-center gap-4'>
                                            <div className='w-8 h-8 bg-blue-600 flex items-center justify-center rounded-md'>
                                                <span className='text-white font-bold text-base w-4'>{workspace.name.substring(0, 1)}</span>
                                            </div>
                                            <p>{workspace.name}</p>
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
                                    <DropDown placeholder='Choose a Category' options={TemplatesType} />
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
                            {Workspaces?.length > 0 && Workspaces.map((workspace, index) => {
                                return (
                                    <div key={index} className='flex flex-col mb-6'>
                                        <div className='flex items-center justify-between my-8 w-full'>
                                            <div className='flex items-center gap-4'>
                                                <div className='w-8 h-8 bg-blue-600 flex items-center justify-center rounded-md'>
                                                    <span className='text-white font-bold text-base w-4'>{workspace.name.substring(0, 1)}</span>
                                                </div>
                                                <p className='text-lg font-semibold' style={{ color: "#172b4d" }}>{workspace.name}</p>
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
                                                    Members ({workspace.members.length})
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
                                            {workspace?.boards?.length > 0 && workspace.boards.map((board, index) => {
                                                return (
                                                    <div className='flex items-center gap-6' key={index} onClick={() => handleClick(workspace, board)}>
                                                        <div className='relative cursor-pointer'>
                                                            <img src={templatebg1} alt="" className='w-56 h-28 rounded-md' />
                                                            <div className='absolute top-2 left-2'>
                                                                <div className='text-white text-lg font-semibold'>{board.boardTitle}</div>
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