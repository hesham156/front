import React from 'react'
import Task from './user/Task'

const ToDo = ({todo}) => {
  let todolist = todo.filter((data)=>{return data.state==="todo"})

  return (
    <div draggable  className='colum todo'>
              <div className='container'>
              <h4>todo</h4>
      {todolist.map((task)=>{
             return <Task data={task} key={task.taskId} />
      })}
      </div>
    </div>
  )
}

export default ToDo