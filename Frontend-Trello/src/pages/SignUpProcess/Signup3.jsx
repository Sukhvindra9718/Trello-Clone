import React, {useState} from 'react'
import SignUpHeader from '../../components/SignUpHeader'
import signup3 from "../../images/signup3.png"
import "../../styles/Signup.css"
import { useNavigate, useLocation } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa6'


function Signup3() {
    const [lists, setLists] = useState(["", "", ""]);

    const handleInputChange = (index, event) => {
        const newLists = [...lists];
        newLists[index] = event.target.value;
        setLists(newLists);
    };
    const navigate = useNavigate();
    const { state } = useLocation();

    const handleSignUpProcess = () => {
        const newList = ["","",""]
        lists.forEach((list, index) => {
            if (list === "") {
                newList[index] = ["To do", "Doing", "Done"][index];
                console.log(["To do", "Doing", "Done"][index])
            }else{
                newList[index] = list;
            }
        });
        // console.log(newList)
        navigate("/signup/signup4", { state: { email: state.email, goal: state.goal, board: state.board,list:newList } });
    };


    return (
        <div className='h-screen'>
            <SignUpHeader />
            <section className='w-full flex' style={{ height: "90%" }}>
                <div className='flex flex-col items-center justify-center bg-white w-5/12 relative'>
                    <div style={{ width: "60%" }} className='flex flex-col gap-4' >
                        <h1 className='font-semibold text-4xl'>Now organize your board with lists</h1>
                        <p>A list is a bundle of cards that represent milestones, a set if ideas, or team goals. Customize your lists and add as many as you'd like.</p>
                        <p>A lot of people start with</p>
                    </div>
                    <div style={{ width: "60%", marginTop: "1rem" }}>
                        <label htmlFor="boardname">Name your lists</label>
                        {lists.map((list, index) => (
                            <input
                                key={index}
                                type="text"
                                placeholder={`e.g. ${["To do", "Doing", "Done"][index]}`}
                                className="w-full h-12 p-4 rounded-lg border-2 mb-2"
                                value={list}
                                onChange={(e) => handleInputChange(index, e)}
                            />
                        ))}
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
                    <div className='magicpattern1'>
                        <img src={signup3} alt='' className='absolute top-32 left-52 rounded-xl' style={{ width: "60%" }} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup3