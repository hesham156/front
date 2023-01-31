import React from 'react'

const Tasks = ({tasks}) => {
  return (
    <div className='colum tasks'>
        <div className='container'>
            {tasks.map((task)=>{
                return(<div className='task'>
                        <p>{task.taskName}</p>
                </div>)
            })}
        </div>


    </div>
  )
}

export default Tasks