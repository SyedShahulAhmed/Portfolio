import React from 'react'
import Herobg from '../components/Herobg'
import HeroSection from '../components/HeroSection'
import Introduction from '../components/Introduction'
import Find from '../components/Find'

const Home = () => {
  return (
    <div className='w-full'>
       <Herobg/>
        <HeroSection/>
        <Introduction/>
        <Find/>
    </div>
  )
}

export default Home