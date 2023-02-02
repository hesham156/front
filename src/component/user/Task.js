import React, { useState } from 'react'
import { useDrag } from 'react-dnd'
const Task = ({data}) => {
    const [{isDraggin},drag] = useDrag(()=>({
        type:'div',
        item:{id:data.taskId},
        collect:(monitor)=>({
            isDraggin:!!monitor.isDragging(),
        })
    }))
    const [inTheTask,setInTheTask] = useState(false)
  return (
    <div draggable className='container' >
    <div draggable ref={drag} className='task' style={{display:isDraggin?"none":"block"}} onClick={()=>{inTheTask?setInTheTask(false):setInTheTask(true)}}>
                        <p>{data.taskName}</p>
                        <button>{data.state==='task'?"t":data.state==='todo'?"c":"cf"}</button>
                </div>
                {inTheTask?
                <div className="inthetask">
                <p>{data.taskName}</p>
                   <button onClick={()=>{inTheTask?setInTheTask(false):setInTheTask(true)}}>X</button>
                </div>:''}
       </div>
  )
}

export default Task