import React ,{useState , useEffect }from 'react'
import { useParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import {fetchDataFromApi }  from '../../utils/api'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import MovieCard from '../../components/moviecard/MovieCard'
import Spinner from '../../components/spinner/Spinner'
import './style.scss'


function SearchResult() {
  const [data, setdata] = useState(null)
  const [pageNum, setpageNum] = useState(1)
  const [loading, setLoading] = useState(null)
  const {query} = useParams()

  const fetchInitialData=()=>{
    setLoading(true)
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        setdata(res)
        setpageNum((prev) => prev+1)
        setLoading(false)
      } 
    )
  }
  const fetchNextData=()=>{
   
     fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        if(data?.results){
          setdata({
            ...data,
            results : [...data?.results , ...results.results]
          });
        }else{
          setdata(res)
        }
        setpageNum((prev) => prev+1)
      })
    }

  useEffect(() => {
    setpageNum(1)
    fetchInitialData();
  }, [query])
  
  return (
    <div className='searchResultsPage'>
      {loading && <Spinner initial={true}/>}
      {!loading && (
          <ContentWrapper>
            {data?.results?.length > 0 ? (
              <>
                  <div className="pageTitle">
                    {`Search ${
                      data?.total_results >  1 ? "results" : "result"
                    } of '${query}'`}
                  </div>
                  <InfiniteScroll
                    className='content'
                    dataLength={data?.results?.length || []}
                    next={fetchNextData}
                    hasMore={pageNum <= data.total_pages}
                    loader={<Spinner/>}

                  >
                    {data?.results?.map((item,index) => {
                      if(item.media_type === "person") return;
                      return(
                        <MovieCard  key={index} data={item} fromSearch={true}/>
                      )
                    })}             
                  </InfiniteScroll>
              </>
            ): (<span className='resultsNotFound'>
              Sorry, Results not found! 
            </span>)}

          </ContentWrapper>)}
    </div>
  )
}

export default SearchResult
