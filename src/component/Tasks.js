import React from 'react'
import { useDrag } from 'react-dnd'
import Task from './user/Task'
const Tasks = ({tasks}) => {
  // const [{ opacity }, dragRef] = useDrag(
  //   () => ({
  //     type: ItemTypes.CARD,
  //     item: { text },
  //     collect: (monitor) => ({
  //       opacity: monitor.isDragging() ? 0.5 : 1
  //     })
  //   }),
  //   []
  // )
  return (
    <div draggable  className='colum tasks'>
        <div className='container'>
            <h4>TASKS</h4>
            {tasks.map((task)=>{
                return  <Task data={task}/>
            })}
        </div>


    </div>
  )
}

export default Tasks