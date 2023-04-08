import React from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hook/usefetch' 
import { useState } from 'react'
import Carousel from '../../../components/carousel/carousel'

const Tranding = () => {
  const [endpoint, setendpoint] = useState("day");
  const { data , loading} = useFetch(`/trending/all/${endpoint}`);
    const onTabChange = (tab) =>{
    
      setendpoint(tab === "Day" ?  "day" :"week");
    };
  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className="carouselTittle">Trending</span>
            <SwitchTabs data={["Day" , "Week"]} onTabChange={onTabChange} />
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading}/>
    </div>
  )
}

export default Tranding