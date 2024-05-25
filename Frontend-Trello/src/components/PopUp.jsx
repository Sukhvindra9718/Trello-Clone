import React from 'react'
import '../components/Header.jsx'
function PopUp({val,val2}) {
  console.log(val,val2);
  return (
    <>
  <div className={`${val?" flex justify-center flex-wrap item-center fixed top-0 w-screen h-52 translate-y-14 duration-[350ms] z-5 bg-white":null}`}>
      <h1>hello popup</h1>
  </div>
    
    </>
  )
}

export default PopUp
