import React, { useContext, useState } from 'react'
import Tasks from './Tasks'
import ToDo from './ToDo'
import Done from './Done'
import { useDrop } from 'react-dnd'
const Header = () => {
 const tasks = [{taskName:"n1",taskId:"1",taskDes:'lorenlllllllllllllllllll',userId:"1"},{taskName:"n2",taskId:"2",taskDes:'222222222222222222',userId:"2"}]
 const [board , setboard] = useState([])
 const [{isOver},drop] =useDrop(()=>({
  accept:"div",
  drop: (item)=> addDivtoboard(item.id),
  collect:(monitor)=>({
    isOver:!!monitor.isOver(),
})
 }))
 const addDivtoboard = (id)=>{
 setboard(tasks.filter((task)=>{return task.taskId===id}))
 console.log(tasks.filter((task)=>{return task.taskId===id}))
}
  return (
    <div className='header w-100'>
             <Tasks tasks={tasks}/>
             <ToDo refs={drop} board={board}/>
             <Done/>

    </div>
  )
}

export default Header