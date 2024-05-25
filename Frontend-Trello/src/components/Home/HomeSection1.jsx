import React from 'react'
import { Link,NavLink } from 'react-router-dom'
function HomeSection1() {
  return (
    

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
  
  )
}

export default HomeSection1
