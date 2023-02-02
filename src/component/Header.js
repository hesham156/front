import React, { useContext, useState } from 'react'
import Tasks from './Tasks'
import ToDo from './ToDo'
import Done from './Done'
import { useDrop } from 'react-dnd'
const Header = () => {
 const tasks = [{taskName:"n1",taskId:"1",taskDes:'lorenlllllllllllllllllll',userId:"1",state:'task'},{taskName:"n2",taskId:"2",taskDes:'222222222222222222',userId:"2",state:'todo'}]
 
  return (
    <div className='header w-100'>
             <Tasks  tasks={tasks}/>
             <ToDo todo={tasks}/>
             <Done done={tasks} />

    </div>
  )
}

export default Header