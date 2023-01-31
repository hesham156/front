import React from 'react'

const Slider = ({data,type}) => {
  return (
    
    <div className='slide'>Slider
          {data.map((theData)=>{
            return (<div className={(type==="product"?"slideProduct":"slideImgs") + " gg"}>
                             
            </div>)
          })}
    </div>
  )
}

export default Slider