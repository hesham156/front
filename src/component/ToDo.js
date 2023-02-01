import React from 'react'
import Task from './user/Task'

const ToDo = ({refs,board}) => {
  return (
    <div ref={refs} className='colum todo'>
      {board.map((task)=>{
             return <Task data={task} />
      })}
    </div>
  )
}

export default ToDo