import React from 'react'

const Slider = ({data,type}) => {
  return (
    
    <div className='slide'>
<div className={(type==="product"?"slideProduct":"slideImgs") + " w-100 d-flex"}>
          {data.map((theData)=>{
            return (<div className="gg w-100">
                             <div>
                                       <img src={theData}/>

                             </div>
            </div>)
          })}
          </div>
    </div>
  )
  
}

export default Slider