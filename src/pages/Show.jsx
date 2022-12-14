import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import Cast from '../components/show/Cast'
import Details from '../components/show/Details'
import Seasons from '../components/show/Seasons'
import ShowMainData from '../components/show/ShowMainData'
import { apiGet } from '../misc/config'

import { showActions } from '../store/show'
import { InfoBlock, ShowPageWrapper } from './Show.styled'

const Show = () => {
   const {id} =useParams()

   const dispatch=useDispatch();
   const show=useSelector(state=>state.show.show)
   const isLoading=useSelector(state=>state.show.isLoading)
   const error=useSelector(state=>state.show.error)
   useEffect(()=>{
    let isMounted=true;
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results=>{
        
            if(isMounted){
                dispatch(showActions.onShowResult(results))
                dispatch(showActions.setIsloading())
            }
                  
      
    })
    .catch(err=>{
        if(isMounted){
            dispatch(showActions.setError(err.message));
            dispatch(showActions.setIsloading())
        }
        
    })
    return ()=>{
        isMounted= false
    }
   },[id,dispatch])
   
   if(isLoading){
    return <div>Data is being loaded</div>
   }
   if(error){
    return <div>Error occured</div>
   }
  return (
    <ShowPageWrapper>
        <ShowMainData
        image={show.image}
        name={show.name}
        rating={show.rating}
        summary={show.summary}
        tags={show.genres}
        />
        <InfoBlock>
            <h2>Details</h2>
            <Details
            status={show.status}
            network={show.network}
            premiered={show.premiered}
            />
        </InfoBlock>
        <InfoBlock>
            <h2>Season</h2>
            <Seasons
            seasons={show._embedded.seasons}
            />
        </InfoBlock>
        <InfoBlock>
            <h2>Cast</h2>
            <Cast
            cast={show._embedded.cast}
            />
        </InfoBlock>
    </ShowPageWrapper>
  )
}

export default Show