import React from 'react'
import HeroBanner from './heroBanner/HeroBanner'
import './style.scss'
import Tranding from './tranding/Tranding'
import Popular from './popular/popular'
import TopRated from './topRated/TopRated'
function Home() {
  return (
    <div className='homepage'>
      <HeroBanner/>
      <Tranding/>
      <Popular/>
      <TopRated/>
        
     
      
     </div>
  )
}

export default Home