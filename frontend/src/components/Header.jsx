import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import '../styles/Header.css'
function Header() {
  return (

    <header className='w-screen h-28 grid grid-rows-[50%_50%] border-red border-2'>
    <div className=' z-10 w-screen grid  grid-cols-[60%_40%] col-span-full bg-white  hover:shadow-md w-full shadow-black duration-700 fixed'>
      {/* navbar */}
      <nav className=''>
        <ul className=' col-start-1 col-end-2   h-14 flex flex-wrap items-center justify-start list-none text-base gap-10 '>
          {/* logo part */}
        <div className='h-12 flex flex-wrap content-center w-28  relative left-24'>
            <h1 className='relative text-blue-700 text-xs font-bold top-1 left-8'>ATLASSIAN</h1>
            <img src="https://media.discordapp.net/attachments/1238139567845015644/1239585010336661595/Trello_logo.svg.png?ex=66441dc0&is=6642cc40&hm=13028fe06b250a510173d7fc7d16300c06573f871f1a90f5f608bb995b6a2b7d&=&format=webp&quality=lossless&width=1440&height=411" className=' relative h-8' alt="" />
           </div>
            <li className='relative left-20'>
              <NavLink  className={({isActive})=>`
              {isActive ? "text-blue-700":"text-black"}  flex justify-center  hover:text-blue-500`} to="#" >
                Features <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="16px" fill="#e8eae"><path d="M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z"/></svg>
              </NavLink>
            </li>
            <li className='relative left-20 hover:text-blue-500'> <NavLink to="#"  className={({isActive})=>`
              {isActive ? "text-blue-700":"text-black"}  flex justify-center  hover:text-blue-500`} to="#" >
                Solutions   <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="16px" fill="#e8eae"><path d="M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z"/></svg>
              </NavLink>
            </li>
            <li className='relative left-20 hover:text-blue-500'> <NavLink to="#" className={({isActive})=>`
              {isActive ? "text-blue-700":"text-black"}  flex justify-center  hover:text-blue-500`} to="#" >
                Plans  <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="16px" fill="#e8eae"><path d="M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z"/></svg>
              </NavLink>
            </li>
            <li className='relative left-20 hover:text-blue-500'>
            <NavLink to="#" className={({isActive})=>`
              {isActive ? "text-blue-700":"text-black"}  flex justify-center  hover:text-blue-500`} to="#" >
                Pricing   <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="16px" fill="#e8eae"><path d="M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z"/></svg>
              </NavLink>
            </li>
            <li className='relative left-20 hover:text-blue-500'>
            <NavLink to="#"  className={({isActive})=>`
              {isActive ? "text-blue-700":"text-black"}  flex justify-center  hover:text-blue-500`} to="#" >
                Resources   <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="16px" fill="#e8eae"><path d="M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z"/></svg>
              </NavLink>
            </li>
        </ul>
      </nav>
      {/* login part */}
      <div className='col-start-2 flex flex-wrap justify-end items-center text-xl'>
        <p className='block relative right-36'>Log in</p> 
        <Link to="#">
          <button style={{backgroundColor:"rgb(0 128 255)"}} className='text-white h-14 w-44 relative right-32 '>
            Get Trello for free
          </button>
        </Link>
      </div>
    </div>
    <div style={{backgroundColor:"rgb(222, 235, 255)"}} className='row-start-2 flex flex-wrap justify-center items-center'>
      <p>Accelerate your teams' work with Atlassian Intelligence (AI) features 🤖 now available for all Premium and Enterprise!</p>
      <Link className='underline text-blue-700'>Learn more.</Link>
    </div>
  </header>
    // <header className='container'>
    //   <div className="shadow">
    //   <section className='section1_Navbar'>
    //   <div className='logo'>
    //   <p className='relative right-3 text-blue-600  text-right font-bold top-5  '>ALTASSIAN</p>
    //   <img className='h-7' src=" https://media.discordapp.net/attachments/1238139567845015644/1239585010336661595/Trello_logo.svg.png?ex=66441dc0&is=6642cc40&hm=13028fe06b250a510173d7fc7d16300c06573f871f1a90f5f608bb995b6a2b7d&=&format=webp&quality=lossless&width=1440&height=411" alt="" />
    //   </div>
    //     <div className='navbar'>
    //     <ul className='flex gap-10'>
    //       <li>Features <span style={{position:'absolute'}} class="material-symbols-outlined">stat_minus_1</span></li>
    //       <li>Solutions <span style={{position:'absolute'}} class="material-symbols-outlined">stat_minus_1</span></li>
    //       <li>Plans <span style={{position:'absolute'}} class="material-symbols-outlined">stat_minus_1</span></li>
    //       <li>Pricing <span style={{position:'absolute'}} class="material-symbols-outlined">stat_minus_1</span></li>
    //       <li>Resources <span style={{position:'absolute'}} class="material-symbols-outlined">stat_minus_1</span></li>
    // </ul>
    //     </div>
    //   </section>
    //     <section className='section_login'>
    //       <h3 className='inline-block'>Log in</h3>
    //       <Link className='h-full  rounded-none'> Get Trello for free</Link>
    //     </section>
    //     </div>
    //   <section className='section3_ribin'>
    //   <p>Accelerate your teams' work with Atlassian Intelligence (AI) features 🤖 now available for all Premium and Enterprise!<Link href="">Learn more.</Link></p>
    //   </section>
    // </header>
   
  )
}

export default Header