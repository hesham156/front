import React from 'react'
import Tasks from './Tasks'
import ToDo from './ToDo'
import Done from './Done'
const Header = () => {
 

  return (
    <div className='header w-100'>
             <Tasks/>
             <ToDo/>
             <Done/>

    </div>
  )
}

export default Header