import React from 'react'
import { Link,NavLink } from 'react-router-dom'
function HomeSection1() {
  return (
    <>
    <header className='w-screen h-28 grid grid-rows-[50%_50%] border-red border-2'>
    <div className='  w-screen grid  grid-cols-[60%_40%] col-span-full bg-white  hover:shadow-md w-full shadow-black duration-700 fixed'>
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

    <section className='section_1Home'>
      <div className='Homecontent'>
      <div className='Hometext'>
      <h1>Trello brings all your tasks, teammates, and tools together</h1>
      <p>Keep everything in the same place—even if your team isn’t.</p>
      <div className="sing">
        <input type="email" placeholder='Email'/>
        <button>Sing-up-it's free! </button>
      </div>
      <a href="">watch video </a>
      <svg className='h-10'  xmlns="http://www.w3.org/2000/svg" height="" viewBox="0 -960 960 960" width="20px" fill="#ffffff"><path d="m384-312 264-168-264-168v336Zm96.28 216Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z"/></svg>
      </div>
      <div className='Homeimage'>
      <img src="https://images.ctfassets.net/rz1oowkt5gyp/75rDABL8fyMtNLlUAtBxrg/c5e145977a86c41c47e17c69410c64f7/TrelloUICollage_4x.png?w=1080"/>
      </div>
      </div>
    </section>
    </>
  )
}

export default HomeSection1