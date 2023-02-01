import React from 'react'
import { useDrag } from 'react-dnd'
const Task = ({data}) => {
    const [{isDraggin},drag] = useDrag(()=>({
        type:'div',
        item:{id:data.taskId},
        collect:(monitor)=>({
            isDraggin:!!monitor.isDragging(),
        })
    }))
  return (
    <div ref={drag} className='task' style={{display:isDraggin?"none":"block"}}>
                        <p>{data.taskName}</p>
                </div>
  )
}

export default Task