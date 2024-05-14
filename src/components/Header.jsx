import React from 'react'

import '../styles/Header.css'
function Header() {
  return (
   
    <header className='container'>
      <div className="shadow">
      <section className='section1_Navbar'>
      <div className='logo'>
      <p className='relative right-3 text-blue-600  text-right font-bold top-5  '>ALTASSIAN</p>
      <img className='h-7' src=" https://media.discordapp.net/attachments/1238139567845015644/1239585010336661595/Trello_logo.svg.png?ex=66441dc0&is=6642cc40&hm=13028fe06b250a510173d7fc7d16300c06573f871f1a90f5f608bb995b6a2b7d&=&format=webp&quality=lossless&width=1440&height=411" alt="" />
      </div>
        <div className='navbar'>
        <ul className='flex gap-10'>
          <li>Features <span style={{position:'absolute'}} class="material-symbols-outlined">stat_minus_1</span></li>
          <li>Solutions <span style={{position:'absolute'}} class="material-symbols-outlined">stat_minus_1</span></li>
          <li>Plans <span style={{position:'absolute'}} class="material-symbols-outlined">stat_minus_1</span></li>
          <li>Pricing <span style={{position:'absolute'}} class="material-symbols-outlined">stat_minus_1</span></li>
          <li>Resources <span style={{position:'absolute'}} class="material-symbols-outlined">stat_minus_1</span></li>
    </ul>
        </div>
      </section>
        <section className='section_login'>
          <h3 className='inline-block'>Log in</h3>
          <a className='h-full  rounded-none'> Get Trello for free</a>
        </section>
        </div>
      <section className='section3_ribin'>
      <p>Accelerate your teams' work with Atlassian Intelligence (AI) features 🤖 now available for all Premium and Enterprise!<a href="">Learn more.</a></p>
      </section>
    </header>
   
  )
}

export default Header