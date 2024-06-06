import React, { useEffect, useRef,useState } from "react";
import { Droppable } from 'react-beautiful-dnd';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import fileSvg from '../images/file.svg';
import Card from './Card';
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";


const List = ({ list,cookies,setData }) => {
    const inputRef = useRef(null);
    const [cardTitle, setCardTitle] = useState(''); 
    const [cardListId, setCardListId] = useState(''); 


    const handleCreateCard = (list) => {
        if (cardTitle === '') {
            return;
        }

        const url = 'http://192.168.1.11:5000/api/v1/createCard';
        const data = {
            cardTitle: cardTitle,
            cardOrder: list.cards.length,
            listId: list._id,
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${cookies.token}`
            },
            body: JSON.stringify(data)
        }).then(async (response) => {
            if (response.ok) {
                const res = await response.json();
                console.log(res);
                setData(res.newBoard);
                setCardListId('');
                setCardTitle('');
            }
        }).catch(error => {
            console.error('Error:', error);
        });
    }


    useEffect(() => {
        if (list._id === cardListId && inputRef.current) {
            inputRef.current.focus();
        }
    }, [list._id, cardListId]);
    return (
        <Droppable droppableId={list._id} type="card">
            {(provided) => (
                <div className='bg-gray-100 rounded-lg h-fit p-2 w-full' style={{ minHeight: "10%" }} >
                    <div className='flex items-center justify-between px-2'>
                        <h1 className='font-semibold'>{list.listTitle}</h1>
                        <HiOutlineDotsHorizontal color='gray' size={25} />
                    </div>
                    <div className='flex flex-col gap-2 mt-2' {...provided.droppableProps} ref={provided.innerRef}>
                        {list?.cards?.map((card, index) => (
                            <Card key={card._id} card={card} index={index} />
                        ))}
                        {provided.placeholder}
                    </div>

                    {list._id !== cardListId && <div className='flex items-center justify-between' onClick={() => setCardListId(list._id)}>
                        <div className='flex items-center gap-2 m-2'>
                            <FaPlus className='text-gray-500 mb-1' size={16} />
                            <span className='text-gray-500 font-semibold font-base'>Add a card</span>
                        </div>
                        <div className='mr-2'>
                            <img src={fileSvg} alt='file' className='w-6 h-6' />
                        </div>
                    </div>}
                    {list._id === cardListId && <div className='bg-gray-100 rounded-lg h-fit py-2 flex flex-col' style={{ minHeight: "10%", width: "280px" }} >
                        <input
                            type="text"
                            placeholder="Enter card title..."
                            value={cardTitle}
                            className="p-1 rounded-md outline-blue-600 border-gray-500  placeholder-gray-600 font-semibold"
                            style={{ borderWidth: "1px" }}
                            onChange={(e) => setCardTitle(e.target.value)}
                            ref={inputRef}
                        />
                        <div className='my-2 flex items-center gap-4'>
                            <button className='bg-blue-600 p-2 rounded' onClick={() => handleCreateCard(list)}>
                                <p className='text-white px-2'>Add card</p>
                            </button>
                            <RxCross2 className='cursor-pointer' size={25} onClick={() => setCardListId('')} />
                        </div>
                    </div>
                    }
                </div>
            )}
        </Droppable>
    );
};


export default List;