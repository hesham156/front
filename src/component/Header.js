import React from 'react'
import Tasks from './Tasks'
import ToDo from './ToDo'
import Done from './Done'
const Header = () => {
 const tasks = [{taskName:"n1",taskId:"1",taskDes:'lorenlllllllllllllllllll',userId:"1"},{taskName:"n2",taskId:"2",taskDes:'222222222222222222',userId:"2"}]

  return (
    <div className='header w-100'>
             <Tasks tasks={tasks}/>
             <ToDo/>
             <Done/>

    </div>
  )
}

export default Header