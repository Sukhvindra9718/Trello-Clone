import React,{useEffect,useState} from 'react'
import boardinviteBg from "../images/boardinvite1bg.png"
import celebrate from "../images/celebrate.png"
import {useNavigate} from 'react-router-dom'
import {useParams} from "react-router-dom"

function BoardInvite() {
    const [data, setData] = React.useState([]);
    const navigate = useNavigate();
    const {id} = useParams();
    
    const getBoard = async () => {
        const url = `http://localhost:5000/api/v1/guest/getBoardById/${id}`;
    
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({})
        }).then(async (response) => {
          if (response.ok) {
            const res = await response.json();
            setData(res.newBoard);
          }
        }).catch(error => {
          console.error('Error:', error);
        });
      }
      const handleClick = () => {
        navigate(`/signup`,{state:{board:data}});
      }
    
      useEffect(() => {
        getBoard();
        return () => { }
      }, []);
    return (
        <div>
            <img src={boardinviteBg} alt='' className='w-full h-screen object-cover opacity-70' />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 bg-white py-4 rounded-lg'>
                <div className='flex flex-col justify-center items-center'>
                    <img src={celebrate} alt='' className='w-56 mx-auto' />
                    <h1 className='text-2xl font-semibold text-center'>You've been invited to collaborate on {data.boardTitle}</h1>
                    <button className='w-28 h-10 mt-4 p-2 buttonActive' onClick={()=>handleClick()}>Join board</button>
                </div>
            </div>
        </div>
    )
}

export default BoardInvite