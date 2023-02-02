import React from 'react'
import Task from './user/Task'

const Done = ({done}) => {
  let donelist = done.filter((data)=>{return data.state==="done"})

  return (
    <div draggable className='colum done'>
              <div className='container'>
              <h4>done</h4>

         {donelist.map((task)=>{
             return <Task data={task} key={task.taskId} />
      })}
      </div>
    </div>
  )
}

export default Done