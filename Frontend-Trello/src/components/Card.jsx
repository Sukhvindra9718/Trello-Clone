import React from "react";
import { Draggable } from 'react-beautiful-dnd';


const Card = ({ card, index }) => {
    return (
        <Draggable draggableId={card._id} index={index} key={index}>
            {(provided) => (
                <div key={index} className='rounded-lg bg-white shadow-2xl p-2' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    <h1 className='font-medium'>{card.cardTitle}</h1>
                </div>
            )}
        </Draggable>
    );
};

export default Card;