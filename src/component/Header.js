import React from 'react'
import Slider from './Slider'
import p1 from '../assets/img/banner 1.png'
const Header = () => {
    const imgs = [p1,"https://inno-themes-prod.s3.me-south-1.amazonaws.com/not_wp/%D8%B9%D8%B7%D8%B1%D9%83.png"]
    const type = 'bannar'

  return (
    <div className='header w-100'>
     <Slider type={type} data={imgs} />

    </div>
  )
}

export default Header