import React from 'react'
import "../styles/Dashboard.css"
import { Link } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

function Dashboard() {
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
                            <button className='bg-blue-600 p-2 rounded' onClick={()=>handleLogout()}>
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
    )
}

export default Dashboard