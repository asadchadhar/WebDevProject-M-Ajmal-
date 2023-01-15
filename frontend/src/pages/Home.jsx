import React from 'react'
import Explore from '../components/Explore'
import Intro from '../components/Intro'
import Latest from '../components/Latest'

const Home = () => {
  return (
    <div className='home'>
        <Intro />
        <Latest />
        <Explore />
    </div>
  )
}

export default Home