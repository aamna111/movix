
import React , {useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../../hook/useFetch'
import { useSelector } from 'react-redux'
import Img from '../../../components/lazyLoadImage/Img'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import './style.scss';
const HeroBanner = () => {
    const [Background, setBackground] = useState("")
    const [query, setquery] = useState("")
    const navigate = useNavigate();
    const {url } = useSelector((state) => state.home)

    const {data , loading} = useFetch("/movie/upcoming")

    useEffect(() => {
       const bg = 
       url.backdrop + 
       data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path;
       setBackground(bg);
    }, [data]);
    
    const searchQueryHandler = (event) => {
        if(event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
        }
    };

  return (
    <div className='herobanner'>
       { !loading && <div className="backdrop-img">
            <Img src={Background}/>
        </div>}
        <div className="opacity-layer">
            
        </div>
        <ContentWrapper>
            <div className="hero-content">
                <span className="tittle">Welcome.</span>
                <span className="subTittle">Millions of movies, TV shows and people to discover. Explore now.</span>
                <div className="searchInput">
                      <input type="text"
                      placeholder='Search for a movie or tv show.....'
                     onChange={(e)=> {setquery(e.target.value)}}   
                      onKeyUp={searchQueryHandler} 
                     />
                   <button>Search</button>
                </div>         
            </div>
        </ContentWrapper>

    </div>
  )
}

export default HeroBanner
