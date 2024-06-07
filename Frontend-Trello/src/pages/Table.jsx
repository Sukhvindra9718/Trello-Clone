import React from 'react'
import { Link } from 'react-router-dom'
function Table() {
  return (
    <section className='h-[96rem]'>
      {/* This section represent titels or buttons */}
      <section className='w-[76rem] flex justify-between  '>
        <div className='text-white text-xl font-bold '>Table</div>
        <div className=' h-10 flex flex-wrap content-center gap-2'>
          <div className='flex flex-wrap content-center' ><p><Link className='text-sm text-blue-500 hover:underline'>Give us feedback!</Link></p></div>
          <div><button className='text-white bg-blue-500 p-1 rounded-sm'>Save as new view</button>
          </div>
          <div className=' w-20 flex flex-wrap content-center justify-center gap-2 bg-white  rounded-sm' >
            <button className='flex  text-black '>
              <svg className='' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eae">
                <path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z" />
              </svg>
              Filter
            </button>
          </div>
        </div>
      </section>
      {/* this section represent Table formats Table headings */}
      <section className='relative top-5 w-[76rem] '>
        <table className=' w-[76rem] flex justify-between'>
          <th>Card</th>
          <th>List</th>
          <th>Labels</th>
          <th>Members</th>
          <th className='w-32 flex justify-between'>
            <p>Due Date</p>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eae">
              <path d="M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z" />
            </svg>
          </th>
        </table>
      </section>
    </section>
  )
}

export default Table
