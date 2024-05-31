import React, { useState } from 'react'
import SignUpHeader from '../../components/SignUpHeader'
import signup5 from "../../images/signup5.png"
import "../../styles/Signup.css"
import { useNavigate, useLocation } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa6'


function Signup5() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [teammates, setTeammates] = useState([""]);

    const handleInputChange = (e,index) =>{
        const newTeammate = [...teammates];
        newTeammate[index] = e.target.value;
        setTeammates(newTeammate);
    }
    const handleSignUpProcess = () => {
        navigate("/signup/signup6", { state: { email: state.email, goal: state.goal, board: state.board, list: state.list, cards: state.cards,teammates } });
    };

    return (
        <div className='h-screen'>
            <SignUpHeader />
            <section className='w-full flex' style={{ height: "90%" }}>
                <div className='flex flex-col items-center justify-center bg-white w-5/12 relative'>
                    <div style={{ width: "60%" }} className='flex flex-col gap-4' >
                        <h1 className='font-semibold text-4xl'>Invite your team</h1>
                        <p>You're all set! Invite your teammates to collaborate with you.</p>
                    </div>
                    <div style={{ width: "60%", marginTop: "1rem" }}>
                        <label htmlFor="boardname">Enter an email or search by name</label>
                        <input
                            type="text"
                            placeholder={`e.g. Jessica@gmail.com, Jessica Smith`}
                            className="w-full h-12 p-4 rounded-lg border-2 mb-2"
                            value={teammates}
                            onChange={(e) => handleInputChange(e,0)}
                        />
                    </div>
                    <div style={{ width: "60%" }} className='flex gap-3 items-center'>
                        <button className='w-36 h-10 mt-4 buttonActive' onClick={() => handleSignUpProcess()}>One last thing</button>
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
                    <div className='magicpattern1'>
                        <img src={signup5} alt='' className='absolute top-32 left-52 rounded-xl' style={{ width: "60%" }} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup5