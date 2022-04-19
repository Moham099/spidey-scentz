import React from 'react'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'



export const Landing = () => {
  return (
    <div>
        <Announcement/>
        <Slider/>
        <Categories/>
    </div>
  )
}

export default Landing