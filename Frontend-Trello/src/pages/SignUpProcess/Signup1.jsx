import React from 'react'
import SignUpHeader from '../../components/SignUpHeader'
import S1 from "../../images/s1.png"
import S2 from "../../images/s2.png"
import S3 from "../../images/s3.png"
import S4 from "../../images/s4.png"
import trelloblue from "../../images/trelloblue.svg"
import jira from "../../images/jira.png"
import "../../styles/Signup.css"
import { RiOrganizationChart, RiTeamFill } from "react-icons/ri";
import { MdTaskAlt } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { useNavigate, useLocation } from 'react-router-dom'
function Signup1() {
  const [index, setIndex] = React.useState(-1);
  const [goal, setGoal] = React.useState('');
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleSignUpProcess = () => {
    navigate("/signup/signup2", { state: { email: state.email, goal: goal } });
  };

  const handleGoal = (index,goal) => {
    setIndex(index);
    setGoal(goal);
  }
  return (
    <div className='h-screen'>
      <SignUpHeader />
      <section className='w-full flex' style={{ height: "90%" }}>
        <div className='flex flex-col items-center justify-center bg-white w-5/12'>
          <div className='flex flex-col gap-4' style={{ width: "60%" }}>
            <h1 className='font-semibold text-4xl'>What brings you here today?</h1>
            <div className={`w-full h-16 p-4 rounded-xl flex items-center cursor-pointer gap-4 ${index === 0 ? 'card-active' : 'card-inactive'}`} onClick={() => handleGoal(0,"Organize ideas and work")}>
              {index === 0 ? <MdTaskAlt size={25} color='blue' /> : <RiOrganizationChart size={25} />}
              <span className='text-sm font-semibold'>Organize ideas and work</span>
            </div>
            <div className={`w-full h-16 p-4 rounded-xl flex items-center cursor-pointer gap-4 ${index === 1 ? 'card-active' : 'card-inactive'}`} onClick={() => handleGoal(1,"Track personal tasks and to-dos")}>
              {index === 1 ? <MdTaskAlt size={25} color='blue' /> : <FaTasks size={25} />}
              <span className='text-sm font-semibold'>Track personal tasks and to-dos</span>
            </div>
            <div className={`w-full h-16 p-4 rounded-xl flex items-center cursor-pointer gap-4 ${index === 2 ? 'card-active' : 'card-inactive'}`} onClick={() => handleGoal(2,"Manage team projects")}>
              {index === 2 ? <MdTaskAlt size={25} color='blue' /> : <RiTeamFill size={25} />}
              <span className='text-sm font-semibold'>Manage team projects</span>
            </div>
            <div className={`w-full h-16 p-4 rounded-xl flex items-center cursor-pointer gap-4 ${index === 3 ? 'card-active' : 'card-inactive'}`} onClick={() => handleGoal(3,"Create and automate team's workflows")}>
              {index === 3 ? <MdTaskAlt size={25} color='blue' /> : <GiProgression size={25} />}
              <span className='text-sm font-semibold'>Create and automate team's workflows</span>
            </div>
          </div>
          <div style={{ width: "60%" }} className='flex gap-3 items-center'>
            {index === 0 || index === 1 || index === -1 ? <button className={`w-32 h-12 mt-4 ${index !== -1 ? 'buttonActive' : 'buttonInactive'}`} onClick={() => handleSignUpProcess()}>Continue</button>
              : <button className={`w-32 h-12 mt-4 ${index !== -1 ? 'buttonActive' : 'buttonInactive'}`}>Try Jira</button>}
            <button style={{ color: "black", fontWeight: "bold", fontSize: "18px" }} className='w-32 h-12 mt-4'>Skip</button>
          </div>
        </div>
        <div className='w-7/12 h-full' style={{ backgroundColor: "#f5f2ff" }}>
          {index === 0 || index === 1 || index === -1 ? <div className='flex items-center justify-center flex-col' style={{ height: "20%" }}>
            {index !== -1 && <div className='bg-green-100 rounded-md p-1'>
              <span className='font-bold text-green-800' style={{ fontSize: "12px" }}>RECOMMENDED</span>
            </div>}
            <div>
              <img src={trelloblue} alt='' className='w-40' />
            </div>
          </div> :
            <div className='flex items-center justify-center flex-col gap-4' style={{ height: "20%" }}>
              <div className='bg-green-100 rounded-md p-1'>
                <span className='font-bold text-green-800' style={{ fontSize: "12px" }}>TRY IT FREE</span>
              </div>
              <div className='flex gap-2'>
                <img src={jira} alt='' className='w-8' />
                <span className='font-semibold text-3xl'>
                  JIRA
                </span>

              </div>
            </div>}
          <div className="flex flex-col items-center justify-center w-full" style={{ height: "80%" }}>
            {(index === 0 || index === -1) && <img src={S1} alt='' className='w-3/4' />}
            {index === 1 && <img src={S2} alt='' className='w-3/4' />}
            {index === 2 && <img src={S3} alt='' className='w-3/4' />}
            {index === 3 && <img src={S4} alt='' className='w-3/4' />}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signup1