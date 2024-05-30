import React from 'react'
import SignUpHeader from '../../components/SignUpHeader'
import signupcard from "../../images/signupcard.png"
import "../../styles/Signup.css"
import { useNavigate, useLocation } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa6'


function Signup2() {
  const [board, setBoard] = React.useState('');
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleSignUpProcess = () => {
    const newBoard = board === "" ? "My Trello board" : board;
    navigate("/signup/signup3", { state: { email: state.email, goal: state.goal,board:newBoard} });
  };

  return (
    <div className='h-screen'>
      <SignUpHeader />
      <section className='w-full flex' style={{ height: "90%" }}>
        <div className='flex flex-col items-center justify-center bg-white w-5/12 relative'>
          <div style={{ width: "60%" }} className='flex flex-col gap-4' >
            <h1 className='font-semibold text-4xl'>It all starts with the board</h1>
            <p>A board is where work happens in Trello. You'll find your cards, lists, due dates, and more to keep you organized and on track.</p>
          </div>
          <div style={{ width: "60%",marginTop:"1rem" }}>
            <label htmlFor="boardname">Enter a board name</label>
            <input type="text" id="boardname" placeholder="e.g. My Trello board" className='w-full h-12 p-4 rounded-lg border-2' onChange={(e)=> setBoard(e.target.value)}/>
          </div>
          <div style={{ width: "60%" }} className='flex gap-3 items-center'>
            <button className='w-24 h-10 mt-4 buttonActive' onClick={() => handleSignUpProcess()}>Next</button>
          </div>
          
          <div style={{ width: "100%" }} className='flex items-center justify-between px-4 absolute bottom-6'>
            <div className='flex items-center gap-3 cursor-pointer' onClick={() => window.history.back()}>
                <FaArrowLeft size={20} color='black' />
                <span>Back</span>
            </div>
            <button className='w-16 h-6 text-black'>Skip</button>
          </div>
        </div>
        <div className='w-7/12 h-full flex items-center justify-center relative' style={{ backgroundColor: "#f5f2ff" }}>
          <div className="magicpattern">
            <img src={signupcard} alt='' className='absolute top-32 left-52 rounded-xl' style={{width:"60%"}}/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signup2