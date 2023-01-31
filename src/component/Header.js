import React from 'react'
import Slider from './Slider'

const Header = () => {
    const imgs = ["https://inno-themes-prod.s3.me-south-1.amazonaws.com/not_wp/7PBFWa1k-1.png"]
    const type = 'bannar'

  return (
    <div className='header w-100'>
     <Slider type={type} data={imgs} />

    </div>
  )
}

export default Header