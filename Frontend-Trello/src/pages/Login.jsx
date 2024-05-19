import React from 'react'
import '../styles/Login.css'
function Login() {
  return (
    <>
    <section className='background'></section>
    <section className='section_Login'>
      <div className='item_holders'>
        <div className='logo'>
          <img src="https://media.discordapp.net/attachments/1238139567845015644/1239585010336661595/Trello_logo.svg.png?ex=66441dc0&is=6642cc40&hm=13028fe06b250a510173d7fc7d16300c06573f871f1a90f5f608bb995b6a2b7d&=&format=webp&quality=lossless&width=1440&height=411" alt="" />
        </div>
        <div className="input">
          <p className='text-center w-full text-xl'>log in to continue</p>
          <input type="email" className=' border-grey border-2' placeholder='Eneter your email' />
          <button style={{backgroundColor:"rgb(0 128 255)"}} className='text-white w-full'>Continue</button>
        </div>
      </div>
    </section>
    </>
  )
}

export default Login