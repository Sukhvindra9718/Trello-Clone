import React from 'react'
import "../../styles/Signup.css"
import DashboardLogo from "../../images/dashboard-logo2.gif"
import pricingimg from "../../images/pricingimg.png"
import { useNavigate, useLocation } from 'react-router-dom'
import { useCookies } from 'react-cookie';

function Signup6() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [cookies, setCookie] = useCookies(['token']);

    const handleSignUpProcess = () => {
        const obj = {
            email: state.email,
            goal: state.goal,
            workspace: {
                name:"Trello Workspace",
                boards: [
                    {
                        name: state.board,
                        lists: state.list,
                        cards: state.cards
                    }
                ],
                members:state.teammates
            },
        }
        fetch("http://localhost:5000/api/v1/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        }).then(async (res) => {
            const data = await res.json();
            console.log(data.newUser.workspace);
            console.log(data.newUser.workspace.boards[0]);
            setCookie('token', data.token);
            if (data.success) {
                navigate("/playground", {state:{ workspace: data.newUser.workspace, board: data.newUser.workspace.boards[0]}});
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    
    return (
        <div className='pricing-container-signup'>
            <header className='pricing-header shadow-sm'>
                <img src={DashboardLogo} alt='logo' className='h-8 w-40 ml-32' />
            </header>
            <div className='flex items-center justify-center h-3/4 w-full' style={{ height: "92vh" }}>
                <div className='bg-white rounded-2xl p-8 flex gap-4' style={{ width: "60%",height:"70%" }}>
                    <div className='w-2/4'>
                        <h1 className='text-2xl font-semibold my-4'>Try Trello Premium, free for 30 days</h1>
                        <p className='font-medium'>Manage work with advanced layers of organization and features that get your team on the same page. If you change your mind, you can opt out of Premium at any time.</p>
                        <img src={pricingimg} alt='pricing' className='w-3/4 my-8' />
                    </div>
                    <div className='w-2/4'>
                        <button className='bg-pink-400 text-white p-2 rounded-lg w-32 my-4'>Special offer</button>
                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>FREE</th>
                                    <th className="premium-header">PREMIUM</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>BUILT-IN AUTOMATION</td>
                                    <td className="check">&#10004;</td>
                                    <td className="premium-check">&#10004;</td>
                                </tr>
                                <tr>
                                    <td>UNLIMITED POWER-UPS</td>
                                    <td className="check">&#10004;</td>
                                    <td className="premium-check">&#10004;</td>
                                </tr>
                                <tr>
                                    <td>UNLIMITED COLLABORATORS <i className="info">&#9432;</i></td>
                                    <td></td>
                                    <td className="premium-check">&#10004;</td>
                                </tr>
                                <tr>
                                    <td>MULTIPLE PROJECT VIEWS <i className="info">&#9432;</i></td>
                                    <td></td>
                                    <td className="premium-check">&#10004;</td>
                                </tr>
                                <tr>
                                    <td>DUE DATES AND ASSIGNEES FOR CHECKLIST ITEMS <i className="info">&#9432;</i></td>
                                    <td></td>
                                    <td className="premium-check">&#10004;</td>
                                </tr>
                                <tr>
                                    <td className="premium-learn-more">AND MORE...<br/><a href="#">Learn more about Premium</a></td>
                                    <td></td>
                                    <td className="premium-check">&#10004;</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='flex flex-col gap-2 mt-4'>
                            <button className='bg-blue-600 text-white p-2 rounded-md w-80'>Start your Premium 30-day free trial</button>
                            <button className='bg-gray-200 text-black p-2 rounded-md w-80' onClick={()=> handleSignUpProcess()}>Skip</button>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signup6