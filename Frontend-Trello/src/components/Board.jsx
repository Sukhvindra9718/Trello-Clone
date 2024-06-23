import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import List from './List';

const Board = ({ board, cookies }) => {
  const [data, setData] = useState({});
  const [isListClicked, setIsListClicked] = useState(false);
  const [listTitle, setListTitle] = useState('');
  

  const onDragEnd = (result) => {
    const { destination, source, type } = result;

    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    if (type === 'list') {
      const newListOrder = Array.from(data.lists);
      const [removed] = newListOrder.splice(source.index, 1);
      newListOrder.splice(destination.index, 0, removed);

      const newState = {
        ...data,
        lists: newListOrder,
      };

      setData(newState);
    } else {
      const startList = data.lists.find(list => list._id === source.droppableId);
      const finishList = data.lists.find(list => list._id === destination.droppableId);

      if (startList === finishList) {
        const newCardIds = Array.from(startList.cards);
        const [removed] = newCardIds.splice(source.index, 1);
        newCardIds.splice(destination.index, 0, removed);

        const newList = {
          ...startList,
          cards: newCardIds,
        };

        const newState = {
          ...data,
          lists: data?.lists?.length > 0 && data?.lists?.map(list => (list._id === newList._id ? newList : list)),
        };

        setData(newState);
      } else {
        const startCardIds = Array.from(startList.cards);
        const [removed] = startCardIds.splice(source.index, 1);
        const newStart = {
          ...startList,
          cards: startCardIds,
        };

        const finishCardIds = Array.from(finishList.cards);
        finishCardIds.splice(destination.index, 0, removed);
        const newFinish = {
          ...finishList,
          cards: finishCardIds,
        };

        const newState = {
          ...data,
          lists: data?.lists?.length > 0 && data?.lists?.map(list => {
            if (list._id === newStart._id) return newStart;
            if (list._id === newFinish._id) return newFinish;
            return list;
          }),
        };

        setData(newState);
      }
    }
  };

  const handleCreateList = () => {
    if (listTitle === '') {
      setIsListClicked(false);
      return;
    }

    const url = 'http://localhost:5000/api/v1/createList';
    const data = {
      listTitle: listTitle,
      listOrder: board.lists.length,
      boardId: board._id,
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
        setData(res.newBoard);
      }
    }).catch(error => {
      console.error('Error:', error);
    });


    setIsListClicked(false);
    setListTitle('');
  }
 


  useEffect(() => {
    setData(board);
    return () => { }
  }, [board]);


  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-lists" direction="horizontal" type="list">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className='flex gap-4'
          >
            {data?.lists?.map((list, index) => (
              <Draggable key={list._id} draggableId={list._id} index={index}>
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className='flex gap-4 h-full'
                    style={{ width: "300px", ...provided.draggableProps.style }}
                  >
                    <List
                      list={list}
                      cookies={cookies}
                      setData={setData}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      {isListClicked === false ? (<div className='flex items-center gap-2 h-10 p-4 rounded-lg cursor-pointer' style={{ backgroundColor: "#ffffff3d", width: "300px" }} onClick={() => setIsListClicked(true)}>
        <FaPlus className='text-white mb-1' size={16} />
        <span className='text-white font-semibold font-base'>Add another list</span>
      </div>) :
        (<div className='bg-gray-100 rounded-lg h-fit p-2 flex flex-col' style={{ minHeight: "10%", width: "300px" }} >
          <input
            type="text"
            placeholder="Enter list title..."
            value={listTitle}
            className="p-1 rounded-md outline-blue-600 border-gray-500  placeholder-gray-600 font-semibold"
            style={{ borderWidth: "1px" }}
            onChange={(e) => setListTitle(e.target.value)}
          />
          <div className='my-2 flex items-center gap-4'>
            <button className='bg-blue-600 p-2 rounded' onClick={() => handleCreateList()}>
              <p className='text-white px-2'>Add list</p>
            </button>
            <RxCross2 className='cursor-pointer' size={25} onClick={() => setIsListClicked(false)} />
          </div>
        </div>)}
    </DragDropContext>
  );
};


export default Board;
