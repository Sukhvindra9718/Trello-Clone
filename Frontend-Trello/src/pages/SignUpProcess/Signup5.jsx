import React, { useState } from 'react'
import SignUpHeader from '../../components/SignUpHeader'
import signup4 from "../../images/signup4.png"
import "../../styles/Signup.css"
import { useNavigate, useLocation } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa6'


function Signup5() {
    const [cards, setCards] = useState(["", ""]);
    
    const handleInputChange = (index, event) => {
        const newCards = [...cards];
        newCards[index] = event.target.value;
        setCards(newCards);
    };
    const navigate = useNavigate();
    const { state } = useLocation();

    const handleSignUpProcess = () => {
        const newCards = cards.forEach((list, index) => {
            if (list === "") {
                cards[index] = ["Project Planning", "Kickoff meeting"][index];
            } else {
                cards[index] = list;
            }
        });
        navigate("/signup/signup5", { state: { email: state.email, goal: state.goal, board: state.board, list: state.list, cards: newCards,listIndex :0} });
    };

    console.log(state)
    return (
        <div className='h-screen'>
            <SignUpHeader />
            <section className='w-full flex' style={{ height: "90%" }}>
                <div className='flex flex-col items-center justify-center bg-white w-5/12 relative'>
                    <div style={{ width: "60%" }} className='flex flex-col gap-4' >
                        <h1 className='font-semibold text-4xl'>Cards are your building blocks</h1>
                        <p>For things you need to do, organize, or share with a teammate.</p>
                        <p>You can also set due dates for cards so you'll never miss a thing.</p>
                        <p>Add titles for a few cards in your <strong>To do</strong> list</p>
                    </div>
                    <div style={{ width: "60%", marginTop: "1rem" }}>
                        {cards.map((list, index) => (
                            <>
                                <label htmlFor="boardname">Card name {index+1}</label>
                                <input
                                    key={index}
                                    type="text"
                                    placeholder={`e.g. ${["Project Planning", "Kickoff meeting",][index]}`}
                                    className="w-full h-12 p-4 rounded-lg border-2 mb-2"
                                    value={list}
                                    onChange={(e) => handleInputChange(index, e)}
                                />
                            </>
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
                        <img src={signup4} alt='' className='absolute top-32 left-52 rounded-xl' style={{ width: "60%" }} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup5