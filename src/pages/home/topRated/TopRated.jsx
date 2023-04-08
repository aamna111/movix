import React from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hook/usefetch' 
import { useState } from 'react'
import Carousel from '../../../components/carousel/carousel'

const TopRated = () => {
  const [endpoint, setendpoint] = useState("movie");
  const { data , loading} = useFetch(`/${endpoint}/top_rated`);
    const onTabChange = (tab) =>{
    
      setendpoint(tab === "Movies" ?  "movie" :"tv");
    };
  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className="carouselTittle">Top Rated</span>
            <SwitchTabs data={["Movies" , "TV Shows"]} onTabChange={onTabChange} />
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
    </div>
  )
}

export default TopRated