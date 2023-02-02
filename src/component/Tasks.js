import React from 'react'
import { useDrag } from 'react-dnd'
import Task from './user/Task'
const Tasks = ({tasks,refs}) => {
 let task = tasks.filter((data)=>{return data.state==="task"})
  return (
    <div ref={refs} draggable  className='colum tasks'>
        <div className='container'>
            <h4>TASKS</h4>
            {task.map((data)=>{
                return  <Task data={data} key={data.taskId}/>
            })}
        </div>


    </div>
  )
}

export default Tasks