import '../components/Header.jsx'
function PopUp({val,val2}) {
  console.log(val,val2);
  return (
    <>
  <div className={`${val?"  overflow-y-hidden flex justify-center flex-wrap item-center   w-full h-[690px] translate-y-14 duration-[350ms] z-10":null}  grid grid-cols-[100%] grid-rows-[60%_40%] fixed bottom-[113px]`}>
    <div className='grid-cols-span opacity-100  bg-white'></div>
    <div className='  bg-blue-400 opacity-20'></div>
  </div>
    
    </>
  )
}

export default PopUp
