'use client'
import { useBoardStore } from '@/store/BoradStore';
import React, { useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

function Board() {
    const getBoard = useBoardStore((state) => state.getBoard);
    useEffect(() => {
        getBoard();
    }, [getBoard])
    return (
        <><p>hello</p></>
        // <DragDropContext>
        //     <Droppable droppableId='board' direction='horizontal' type='column'>
        //         {(provided) => 
        //              <div>
        //                 {/* Rendering all the columns */}
        //              </div>
        //         }
        //     </Droppable> 

        // </DragDropContext>
    );
}

export default Board;
